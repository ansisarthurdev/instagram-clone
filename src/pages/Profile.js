import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import {Helmet} from "react-helmet"

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StoryProfile from '../components/StoryProfile'

//icons
import { ArrowIosBack } from '@styled-icons/evaicons-solid/ArrowIosBack'
import { LogOut } from '@styled-icons/boxicons-regular/LogOut'

//firebase
import { useSelector } from 'react-redux'
import { selectUser } from '../app/appSlice'
import { signOut } from "firebase/auth"
import { auth } from '../app/firebase'

const Profile = () => {

  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth);
    navigate('/login');
  }
  
  useEffect(() => {
    if(user === null){
      navigate('/login');
    }
  //eslint-disable-next-line
  }, [user])

  return (
    <div className='profile'>
      <Helmet><title>Instagram - Account</title></Helmet>
        <Navbar />
          <Wrapper>
            <div className='left'>
              <div className='profile'>

                <div className='profile-top'>
                  <Link to='/'><ArrowIosBack className='icon' /></Link>
                  {user?.photoURL ? <Avatar src={user?.photoURL} /> : <AvatarWithOutPhoto>{user?.email[0]}</AvatarWithOutPhoto>}
                </div>

                <div className='profile-bottom'>

                  <div className='profile-stats'>
                    <div className='stat'>
                      <h3>518</h3>
                      <p>posts</p>
                    </div>
                    <div className='stat'>
                      <h3>220k</h3>
                      <p>followers</p>
                    </div>
                    <div className='stat'>
                      <h3>197</h3>
                      <p>following</p>
                    </div>
                  </div>

                  <div className='profile-action'>
                    {user ? <div className='logged-btn btn' onClick={() => logOut()}><LogOut className='icon' /> Log out</div> : <div className='follow-btn btn'>Follow</div>}
                  </div>

                  <h3 className='profile-name'>{user?.displayName ? user?.displayName : user?.email}</h3>
                  <p className='profile-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p className='profile-web'>https://github.com/ansisarthurdev</p>

                  <div className='stories'>
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
                      userName= 'ansisarthur'
                      seen='true'
                    />

                    <StoryProfile 
                      link='/'
                      image= './images/testImage.jpeg'
                      userName= 'ansisarthur'
                      seen='true'
                    />

                    <StoryProfile 
                      link='/'
                      image= './images/testImage.jpeg'
                      userName= 'ansisarthur'
                      seen='false'
                    />
                  </div>
                </div>

              </div>
            </div>
            <div className='right'>
              <div className='images'>
                <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
              </div>
            </div>
          </Wrapper>
        <Footer />
    </div>
  )
}

const AvatarWithOutPhoto = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
margin-left: 20%;
font-size: 1rem;
background: #554CD7;
display: flex;
justify-content: center;
align-items: center;
color: white;
transition: .2s ease-out;

:hover {
  transform: scale(1.2)
}

@media(max-width: 760px){
  margin-left: 0;
  position: relative;
  right: 15px;
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
          
          h3 {
            font-size: .9rem;
          }

          p {
            font-size: .6rem;
            color: gray;
          }
        }
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

    .img {
      width: 30%;
      height: 280px;
      background-size: cover;
      background-position: center;
      margin: 0 20px 20px 0;
      transition: .3s cubic-bezier(.5,.17,.53,1.14);

      @media(max-width: 1000px) {
        width: 45%;
      }

      @media(max-width: 520px) {
        width: 100%;
        margin-right: 10px;
      }

      :hover {
        transform: scale(1.1);
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

:hover {
  transform: scale(1.2)
}

@media(max-width: 760px){
  margin-left: 0;
  position: relative;
  right: 15px;
}
`

export default Profile