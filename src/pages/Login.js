import React from 'react'
import styled from 'styled-components'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div className='login'>
        <Navbar />
          <Wrapper>
            there goes content
          </Wrapper>
        <Footer />
    </div>
  )
}

const Wrapper = styled.div``

export default Login