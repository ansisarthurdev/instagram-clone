import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//components
import Footer from '../components/Footer'

//icons 
import { Google } from '@styled-icons/boxicons-logos/Google'

const SignUp = () => {
  return (
    <div className='sign-up'>
          <Wrapper>
            <Mockup />

            <LoginWrapper>
              <div className='content'>
                <div className='top'>
                  <img src='../images/Instagram_logo.png' alt='' />

                  <div className='input-box'>
                    <input type='email' placeholder='Email'/>
                  </div>

                  <div className='input-box'>
                    <input type='password' placeholder='Password'/>
                  </div>
                  
                  <div className='login-btn'><p>Sign Up</p></div>

                  <div className='divider'>
                    <p>OR</p>
                  </div>

                  <div className='login-with-google'><Google className='icon' /><p>Sign up with Google</p></div>
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