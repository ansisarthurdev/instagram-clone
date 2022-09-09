import React from 'react'
import styled from 'styled-components'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Post = () => {
  return (
    <div className='post'>
        <Navbar />
          <Wrapper>
            there goes content
          </Wrapper>
        <Footer />
    </div>
  )
}

const Wrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 20px 0;
`

export default Post