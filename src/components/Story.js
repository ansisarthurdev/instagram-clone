import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Story = ({ link, image, userName, seen}) => {
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
margin: 0 35px 0 0;
position: relative;
display: flex;
justify-content: center;

.not-watched {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(45deg, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    position: absolute;
    top: -1px;
    left: 0px;
    z-index: -1;
    transform: scale(1.1);
    transition: .2s ease-out;
}

:hover {

    .not-watched {
        transform: scale(1.2);
    }

    a {
        img {
            transform: scale(1.1);
        }
    }
}

a {
    color: black;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 43px;
        height: 43px;
        border-radius: 50%;
        border: 2px solid white;
        transition: .2s ease-out;
    }

    p {
        margin: 6px 0 0 0;
        font-size: .6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 48px;    
    }
}
`

export default Story