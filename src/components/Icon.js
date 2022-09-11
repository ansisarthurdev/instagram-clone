import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import Tooltip from '@mui/material/Tooltip'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

//icons
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { AddAPhoto } from '@styled-icons/material/AddAPhoto'

//firestore
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore"
import { db, storage } from '../app/firebase'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'

import { useSelector } from 'react-redux'
import { selectUser } from '../app/appSlice'

const Icon = ({ Icon, link, name}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid black',
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
  };

  const [openModal, setOpenModal] = useState(false);
  const [postDescription, setPostDescription] = useState();
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  const uploadPost = async () => {
    if(loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, 'posts'), {
      uid: user.uid,
      username: user.email,
      caption: postDescription,
      profileImg: user.photoURL ? user.photoURL : 'data:image/png;base64,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',
      timestamp: serverTimestamp()
    })

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, 'data_url').then(async snapshot => {
      const downloadURL = await getDownloadURL(imageRef);
      
      await updateDoc(doc(db, 'posts', docRef.id), {
        image: downloadURL
      })
    })

    setOpenModal(false);
    setLoading(false);
    setSelectedFile(null);
  }

  const onClickEvent = () => {
    if(name === 'Upload Image'){
      if(!openModal){
        setOpenModal(true);
      }
    }
  }

  return (

    <Wrapper onClick={() => onClickEvent()}>
    <Link to={link}>
    <Tooltip title={name}>
        <Icon className='icon' />
    </Tooltip>
    </Link>

    {/* Upload modal */}
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <Box sx={style}>
        <CloseOutline onClick={() => setOpenModal(false)} className='closeIcon' style={{width: 20, height: 20, position: 'absolute', right: 20, zIndex: 100, cursor: 'pointer'}} />

        {selectedFile ? (
          <img src={selectedFile} alt='' style={{width: '100%', height: 200, objectFit: 'contain', cursor: 'pointer', marginBottom: 20}} onClick={() => setSelectedFile(null)}/>
        ) : (
          <div className='add-photo' style={{width: 50, margin: '20px auto', padding: 10, border: '2px dotted black', textAlign: 'center', cursor: 'pointer'}} onClick={() => filePickerRef.current.click()}>
            <AddAPhoto  className='add-photo-icon' style={{width: 30, height: 30}}/>
            <input type='file' ref={filePickerRef} onChange={addImageToPost} hidden/>
          </div>
        )}

        <p style={{textAlign: 'center'}}>Add photo</p>
        <div className='post-description' style={{width: '100%'}}>
          <input type='text' placeholder='Description' name={postDescription} onChange={e => setPostDescription(e.target.value)} style={{width: '100%', outline: 'none', border: 'none', margin: '40px 0 10px'}} />
        </div>
        
        <button className='add-post' onClick={uploadPost} disabled={loading} style={{background: '#218CEE', width: '50%', margin: '20px auto 0', textAlign: 'center', color: 'white', padding: 10, fontSize: '0.8rem', borderRadius: 5, cursor: 'pointer', border: 'none', display: 'flex', justifyContent: 'center'}}>
          {loading ? 'Uploading...' : 'Add Post'}
        </button>
      </Box>
    </Modal>

    </Wrapper>
  )
    
}

const Wrapper = styled.div`

@media(max-width: 685px){
  display: none;
}

a {
    color: black;
    cursor: pointer;

    .icon {
    width: 17px;
    height: 17px;
    margin-right: 1.8rem;
    transition: .2s ease-out;
    }

    :hover {
      .icon {
        transform: scale(1.2)
      }
    }
}
`

export default Icon