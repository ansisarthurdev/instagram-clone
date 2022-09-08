import React from 'react'
import styled from 'styled-components'

import { PlayFill } from '@styled-icons/bootstrap/PlayFill'

const Category = ({image, name}) => {
  return (
    <Wrapper> 
        {name !== 'See More' ? <>
            <div className='category-image' style={{ backgroundImage: `url(${image})`  }}></div>
            <p className='category-name'>{name}</p>     
        </> : <>
            <div className='category-more'><PlayFill className='icon' /></div>
            <p className='category-name'>{name}</p>
        </>}                                   
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin-right: 20px;
cursor: pointer;

:hover {
    .category-name {
        font-weight: bold;
    }

    .category-image {
        filter: blur(.5px)
    }
}

.category-image {
    width: 95px;
    height: 66px;
    background-position: center;
    background-size: cover;
    transition: blur .5s ease-out;
    border-radius: 5px;
}

.category-name {
    font-size: .7rem;
    text-align: center;
    margin: 5px 0 15px;
    transition: .2s ease-out;
}

.category-more {
    width: 95px;
    height: 66px;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        .icon {
            transform: scale(1.2);
        }
    }

    .icon {
        width: 30px;
        height: 30px;
        transition: .2s ease-out;
    }
}
`

export default Category