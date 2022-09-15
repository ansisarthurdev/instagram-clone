import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import {Helmet} from "react-helmet"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import StoryProfile from '../components/StoryProfile'

//icons
import { ArrowIosBack } from '@styled-icons/evaicons-solid/ArrowIosBack'
import { LogOut } from '@styled-icons/boxicons-regular/LogOut'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { Camera } from '@styled-icons/bootstrap/Camera'

//firebase
import { useSelector } from 'react-redux'
import { selectUser } from '../app/appSlice'
import { signOut, updateProfile } from "firebase/auth"
import { auth, db, storage } from '../app/firebase'
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from '@firebase/storage'

const Profile = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    width: '100%',
    bgcolor: 'background.paper',
    border: '1px solid black',
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
  };

  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');

  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  //following&followed modal
  const [openFModal, setOpenFModal] = useState(false);
  const [fModalType, setFModalType] = useState();

  const logOut = () => {
    signOut(auth);
    navigate('/login');
  }

  const changeImage = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  const updateProfileHook = async () => {
    if(loading) return;

    if(username !== '' && description !== '' && link !== '' && selectedFile !== null){
      setLoading(true);
      setAlert('');

      const docRef = doc(db, 'users', user?.uid);
      const imageRef = ref(storage, `userImages/${user?.uid}/image`);
  
      await uploadString(imageRef, selectedFile, 'data_url').then(async snapshot => {
        const downloadURL = await getDownloadURL(imageRef);
        
        await updateDoc(docRef, {
          userDisplayName: username,
          description: description,
          homepage: link,
          userImage: downloadURL
        });
  
        updateProfile(auth.currentUser, {
          displayName: username, 
          photoURL: downloadURL
        })
  
      })
  
      setOpenModal(false);
      setLoading(false);
      setSelectedFile(null);
    } else {
      setAlert('One of fields are not filled and/or profile image!')
    }

  }

  const showInfo = (type) => {
    if(type === 'following' && userData?.followingId?.length > 0){
      setFModalType('following');
      setOpenFModal(true);

    } else if(type === 'followers' && userData?.followersId?.length > 0) {
      setFModalType('followers');
      setOpenFModal(true);
    }
  }


  //useEffects..........
  
  useEffect(() => {
    if(user === null){
      navigate('/login');
    }
  //eslint-disable-next-line
  }, [user])

  useEffect(() => {
    if(user !== 'loading'){
      const unsub = onSnapshot(doc(db, 'users', user?.uid), (doc) => {
        setUserData(doc?.data());
      });
  
      return unsub;
    }
    //eslint-disable-next-line
  }, [db, user])

  return (
    <div className='profile'>
      <Helmet><title>{`Instagram - ${userData?.userDisplayName}`}</title></Helmet>
        <Navbar />
          <Wrapper>
            <div className='left'>
              <div className='profile'>

                <div className='profile-top'>
                  <Link to='/'><ArrowIosBack className='icon' /></Link>
                  <Avatar src={userData?.userImage}/>
                </div>

                <div className='profile-bottom'>

                  <div className='profile-stats'>
                    <div className='stat'>
                      <h3>{userData?.posts?.length}</h3>
                      <p>posts</p>
                    </div>
                    <div className='stat' onClick={() => showInfo('followers')}>
                      <h3>{userData?.followersId?.length}</h3>
                      <p>followers</p>
                    </div>
                    <div className='stat' onClick={() => showInfo('following')}>
                      <h3>{userData?.followingId?.length}</h3>
                      <p>following</p>
                    </div>
                  </div>

                  <div className='profile-action'>
                    {user ? <div className='logged-btn btn' onClick={() => logOut()}><LogOut className='icon' /> Log out</div> : <div className='follow-btn btn'>Follow</div>}
                  </div>

                  <h3 className='profile-name'>{userData?.userDisplayName}</h3>
                  <p className='profile-desc'>{userData?.description}</p>
                  <p className='profile-web'>{userData?.homepage}</p>

                  {/*<div className='stories'>
                    <StoryProfile 
                      link='/'
                      image= './images/testImage.jpeg'
                      userName= 'Story1'
                      seen='false'
                    />

                    <StoryProfile 
                      link='/'
                      image= './images/testImage.jpeg'
                      userName= 'Story2'
                      seen='true'
                    />

                    <StoryProfile 
                      link='/'
                      image= './images/testImage.jpeg'
                      userName= 'Story3'
                      seen='false'
                    />

                    <StoryProfile 
                      link='/'
                      image= './images/testImage.jpeg'
                      userName= 'Story4'
                      seen='true'
                    />

                    <StoryProfile 
                      link='/'
                      image= './images/testImage.jpeg'
                      userName= 'Story5'
                      seen='true'
                    />

                    <StoryProfile 
                      link='/'
                      image= './images/testImage.jpeg'
                      userName= 'Story6'
                      seen='false'
                    />
                  </div>*/}
                  <div className='update-btn btn' onClick={() => setOpenModal(true)}>Update Profile</div>
                </div>

              </div>
            </div>
            <div className='right'>
              <div className='images'>
                {userData?.posts?.map(post => (
                  <Link to={`../posts/${post?.id}`}><div className='img' style={{ backgroundImage: `url(${post?.image})` }}></div></Link>
                ))}
              </div>
            </div>
          </Wrapper>
        <Footer />

        {/* Upload modal */}
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Box sx={style}>
            <CloseOutline onClick={() => setOpenModal(false)} className='closeIcon' style={{width: 20, height: 20, position: 'absolute', right: 20, zIndex: 100, cursor: 'pointer'}} />

            <p style={{textAlign: 'center'}}>Update Profile</p>
                
            <div className='change-avatar' style={{position: 'relative'}}>
              <ChangeAvatar src={selectedFile ? selectedFile : userData?.userImage} onClick={() => filePickerRef.current.click()} />
              <Camera className='icon' style={{position: 'absolute', width: 30, height: 30, top: 25, color: 'white', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none'}}/>
              <input type='file' ref={filePickerRef} onChange={changeImage} hidden/>
            </div>

            {alert && <AlertBar>{alert}</AlertBar>}

            <p style={{marginTop: 20}}>Username</p>
            <div className='user-name' style={{width: '100%'}}>
              <input type='text' name={username} onChange={e => setUsername(e.target.value)} placeholder={userData?.userDisplayName} style={{width: '100%', outline: 'none', border: 'none', margin: '10px 0 10px'}} />
            </div>

            <p style={{marginTop: 20}}>Description</p>
            <div className='user-description' style={{width: '100%'}}>
              <input type='text' name={description} onChange={e => setDescription(e.target.value)} placeholder={userData?.description ? userData?.description : 'Type your profile description...'} style={{width: '100%', outline: 'none', border: 'none', margin: '10px 0 10px'}} />
            </div>

            <p style={{marginTop: 20}}>Home page link</p>
            <div className='user-description' style={{width: '100%'}}>
              <input type='text' name={link} onChange={e => setLink(e.target.value)} placeholder={userData?.homepage ? userData?.homepage : 'Type your home page link...'} style={{width: '100%', outline: 'none', border: 'none', margin: '10px 0 10px'}} />
            </div>
            
            <button className='update-profile' onClick={updateProfileHook} disabled={loading}  style={{background: loading ? '#707070' : '#218CEE', width: '50%', margin: '20px auto 0', textAlign: 'center', color: 'white', padding: 10, fontSize: '0.8rem', borderRadius: 5, cursor: 'pointer', border: 'none', display: 'flex', justifyContent: 'center'}}>
              {loading ? 'Uploading...' : 'Update'}
            </button>
          </Box>
        </Modal>

        {/* Following/Followers modal */}
        <Modal
          open={openFModal}
          onClose={() => setOpenFModal(false)}
        >
          <Box sx={style}>
            <CloseOutline onClick={() => setOpenFModal(false)} className='closeIcon' style={{width: 20, height: 20, position: 'absolute', right: 20, zIndex: 100, cursor: 'pointer'}} />

            <FollowFollowingModal>
              {fModalType === 'followers' && <p className='header'>Followers</p>}
              {fModalType === 'following' && <p className='header'>Following</p>}
              
              <div className='content-wrapper'>
                  {fModalType === 'followers' &&
                    userData?.followersId?.map(user => (
                      <div className='user'>
                      <Link to={`../profile/${user?.id}`} key={user?.id}><div className='user'>
                          <img src={user?.userImage} alt=''/>
                          <p>{user?.userDisplayName}</p>
                      </div></Link>
                      </div>
                    ))
                  }

                  {fModalType === 'following' &&
                      userData?.followingId?.map(user => (
                        <div className='user'>
                          <Link to={`../profile/${user?.id}`} key={user?.id}><div className='user'>
                              <img src={user?.userImage} alt=''/>
                              <p>{user?.userDisplayName}</p>
                          </div></Link>
                      </div>
                    ))
                  }
              </div>
            </FollowFollowingModal>
            
          </Box>
        </Modal>
    </div>
  )
}

const AlertBar = styled.div`
font-size: .8rem;
text-align: center;
background: #DC3545;
padding: 10px;
border-radius: 5px;
color: white;
`

const FollowFollowingModal = styled.div`
  .user {
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    transition: .2s ease-out;

    a {
      text-decoration: none;
      color: black;
      padding: 0;
    }

    :hover {
      background: lightgray;
    }

    img {
      margin-right: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .header {
    text-align: center;
    margin: 0 0 30px 0;
  }

  .content-wrapper {
    height: 300px;
    overflow: scroll;
    overflow-x: hidden;

  }
`

const Wrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 20px 0 20px 40px;
display: flex;

@media(max-width: 760px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media(max-width: 520px) {
  padding-left: 10px;
}

.left {
  width: 12%;
  min-width: 170px;
  margin-right: 4%;

  @media(max-width: 760px) {
    width: 60%;
  }

  .profile {
    display: flex;
    flex-direction: column;
  
    .profile-top {
      display: flex;
      align-items: center;

      @media(max-width: 760px){
        justify-content: center;
      }

      .icon {
        width: 24px;
        height: 24px;
        transition: .2s linear;

        @media(max-width: 760px){
          position: relative;
          right: 80px;
        }

        :hover {
          opacity: .5;
        }
      }
    }

    .profile-bottom {
      display: flex;
      flex-direction: column;
      margin-top: 40px;

      .profile-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        
        .stat {
          text-align: center;
          cursor: pointer;

          :hover {
            p {
              color: black;
            }
          }
          
          h3 {
            font-size: .9rem;
          }

          p {
            font-size: .6rem;
            color: gray;
          }
        }
      }

      .btn {
          width: 100%;
          padding: 8px 5px;
          font-size: .7rem;
          color: black;
          border-radius: 5px;
          transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;  

          :hover {
            opacity: .8;
          }
        }

      .update-btn {
        background: lightgray;
      }

      .profile-action {
        .btn {
          width: 100%;
          padding: 8px 5px;
          font-size: .8rem;
          color: white;
          border-radius: 5px;
          transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;  

          :hover {
            opacity: .8;
          }
        }

        .follow-btn {
          background: #218CEE;
        }

        .logged-btn {
          background: #DC3545;

          .icon {
            width: 16px; 
            height: 16px;
            margin-right: 5%;
          }
        }
      }

      .profile-name {
        font-size: .9rem;
        margin-bottom: 10px;
      }

      .profile-desc {
        font-size: .8rem;
        margin-bottom: 10px;
      }

      .profile-web {
        font-size: .8rem;
        color: #218CEE;
        margin-bottom: 30px;
      }

      .stories {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

    }
  }
}

.right {
  width: 84%;

  @media(max-width: 760px) {
    width: 100%;
  }

  .images {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 760px) {
      margin-top: 50px;
    }

    a {

      width: 30%;
      height: 280px;
      margin: 0 20px 20px 0;

      @media(max-width: 1000px) {
        width: 45%;
      }

      @media(max-width: 520px) {
        width: 100%;
        margin-right: 10px;
      }

      .img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: .3s cubic-bezier(.5,.17,.53,1.14);

      :hover {
        transform: scale(1.1);
      }

    }

    }
  }
}
`
const Avatar = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
margin-left: 20%;
transition: .2s ease-out;
object-fit: cover;

:hover {
  transform: scale(1.2)
}

@media(max-width: 760px){
  margin-left: 0;
  position: relative;
  right: 15px;
}
`

const ChangeAvatar = styled.img`
border-radius: 50%;
margin: 30px auto;
display: flex;
justify-self: center;
width: 80px;
height: 80px;
transition: .2s ease-out;
cursor: pointer;

:hover {
  transform: scale(1.2);
}
`

export default Profile