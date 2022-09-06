import React from 'react'
import styled from 'styled-components'

const AddImage = () => {
  return (
    <Wrapper>
        <div className='inner-box' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: absolute;
bottom: 20px;
right: 20px;
width: 40px;
height: 40px;
background: linear-gradient(45deg, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
border-radius: 10px;

.inner-box {
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 10px;
    position: relative;
    top: 2px;
    left: 2px;
}
`

export default AddImage