import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import {Helmet} from "react-helmet"

//components
import Footer from '../components/Footer'

//firebase
import { auth, db } from '../app/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"

import { useSelector } from 'react-redux'
import { selectUser } from '../app/appSlice'

const SignUp = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const user = useSelector(selectUser);
  
  const [alert, setAlert] = useState(null);

  const createUser = () => {
    if(email?.length !== 0 && password?.length !== 0 && username?.length !== 0){

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          description: '',
          homepage: '',
          followersId: [],
          followingId: [],
          likedPosts: [],
          posts: [],
          userDisplayName: username,
          userImage: '../images/userImg.png',
        });

        updateProfile(auth.currentUser, {
          displayName: username, photoURL: "../images/userImg.png"
        })

        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAlert(errorMessage)
      });

    } else {
      setAlert('Check registration fields again!')
    }
  }

  useEffect(() => {
    if(user !== null){
      navigate('/');
    }
  //eslint-disable-next-line
  }, [user])

  return (
    <div className='sign-up'>
        <Helmet><title>Instagram - Sign up</title></Helmet>
          <Wrapper>
            <Mockup />

            <LoginWrapper>
              <div className='content'>
                <div className='top'>
                  <img src='../images/Instagram_logo.png' alt='' />

                  {alert && <Alert>{alert}</Alert>}

                  <div className='input-box'>
                    <input type='text' placeholder='Username' name={username} onChange={e => setUsername(e.target.value)}/>
                  </div>

                  <div className='input-box'>
                    <input type='email' placeholder='Email' name={email} onChange={e => setEmail(e.target.value)}/>
                  </div>

                  <div className='input-box'>
                    <input type='password' placeholder='Password' name={password} onChange={e => setPassword(e.target.value)} />
                  </div>
                  
                  <div className='login-btn' onClick={createUser}><p>Sign Up</p></div>
                
                </div>

                <div className='bottom'>
                  <div className='no-account'>
                    <p>Already have an account?</p><Link to='/login'>Log in</Link>
                  </div>
                </div>
              </div>
            </LoginWrapper>
          </Wrapper>
        <Footer />
    </div>
  )
}

const Alert = styled.div`
background: #dc3545;
width: 80%;
margin: 10px auto;
padding: 10px;
color: white;
font-size: .8rem;
`

const LoginWrapper = styled.div`
width: 50%;

@media(max-width: 750px){
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.content {
  text-align: center;

  .top {
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 20px 10px;

    img {
      width: 200px;
      margin: 20px 0;
    }

    .input-box {
      width: 80%;
      margin: 0 auto 10px;
      border: 1px solid lightgray;
      border-radius: 5px;
      overflow: hidden;
      padding-right: 5%;

      input {
        width: 100%;
        padding: 10px 5% 10px 10px;
        font-size: .7rem;
        background: #FAFAFA;
        outline: none;
        border: none;
      }
    }

    .login-btn {
      background: #218CEE;
      padding: 10px;
      margin: 15px auto;
      width: 80%;
      border-radius: 5px;
      cursor: pointer;
      transition: .2s ease-out;

      :hover {
        background: #1978d0;
      }
      
      p {
        color: white;
        font-size: .8rem;
        font-weight: bold;
      }
    }

    .divider {
      position: relative;
      border-top: 1.5px solid lightgray;
      margin: 30px auto;
      width: 80%;

      p {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        font-weight: bold;
        font-size: .9rem;
        color: gray;
        background: white;
        padding: 0 20px;
      }
    }

    .login-with-google {
      background: #FAFAFA;
      width: 80%;
      margin: 0 auto;
      border: 1px solid lightgray;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: .2s ease-out;

      :hover {
        background: #e9e9e9;
      }

      p {
        font-size: .7rem;
      }

      .icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }

  .bottom {
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 20px 10px;
    margin: 20px 0;
    
    .no-account {
      display: flex;
      justify-content: center;

      p, a {
        font-size: .9rem;
      }

      p { margin-right: 10px; }

      a {
        text-decoration: none;
        color: #218CEE;
        transition: .2s ease-out;

        :hover {
          opacity: .5;
        }
      }
    }
  }
}
`

const Mockup = styled.div`
width: 45%;
background-image: url('../images/Mockup.png');
height: 350px;
background-size: contain;
background-repeat: no-repeat;

@media(max-width: 750px){
  display: none;
}
`

const Wrapper = styled.div`
max-width: 800px;
margin: 50px auto 40px;
display: flex;
justify-content: space-between;
padding: 0 20px;
`

export default SignUp