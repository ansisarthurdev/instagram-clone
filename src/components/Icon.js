import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import Tooltip from '@mui/material/Tooltip'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

//icons
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { AddAPhoto } from '@styled-icons/material/AddAPhoto'

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

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
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
        
        <div className='add-post' style={{background: '#218CEE', width: '50%', margin: '20px auto 0', textAlign: 'center', color: 'white', padding: 10, fontSize: '0.8rem', borderRadius: 5, cursor: 'pointer'}}>
          Add Post
        </div>
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