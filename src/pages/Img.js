import React from 'react'
import styled from 'styled-components'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Img = () => {
  return (
    <div className='image'>
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
padding: 20px 20px;
`

export default Img