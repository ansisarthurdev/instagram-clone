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
//import { collection, query, where, getDocs } from "firebase/firestore";

const Profile = () => {

  const user = useSelector(selectUser);
  const navigate = useNavigate();
  //const [posts, setPosts] = useState([]);

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
                  {user?.photoURL ? <Avatar src={user?.photoURL} /> : <Avatar src='data:image/png;base64,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' />}
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