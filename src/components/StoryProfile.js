import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StoryProfile = ({ link, image, userName, seen}) => {
  return (
    <Wrapper>
        <Link to={link}>
            <img src={image} alt='profile' />
            <p>{userName}</p>
        </Link>
        {!seen && <div className='not-watched' />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 0 10px 20px 0;
position: relative;

.not-watched {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background: linear-gradient(45deg, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: -1;
}

a {
    color: black;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid white;
    }

    p {
        margin: 6px 0 0 0;
        font-size: .6rem;
    }
}
`

export default StoryProfile