import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'

const Comment = ({id, name, comment, avatar}) => {
  return (
    <Wrapper>
      <div style={{display: 'flex', paddingRight: 5, alignItems: 'center'}}>
        <HeartOutline className='icon'/>
        <Avatar className='comment-avatar' src={avatar}/>

        <Link to={`../profile/${id}`}>
          <p className='comment-name'>{name}</p>
        </Link>

      </div>
      <div>
        <p className='comment-content'>{comment}</p>
      </div>
    </Wrapper>
  )
}

const Avatar = styled.img`
min-width: 20px;
max-width: 20px;
height: 20px;
border-radius: 50%;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
margin-bottom: 10px;

a {
  text-decoration: none;
  color: black;
  transition: .2s ease-out;

  :hover {
    opacity: .5;
  }
}

p {
  font-size: .7rem;
}

.icon {
  width: 15px;
  height: 15px;
  cursor: pointer;
  transition: .2s ease-out;

  :hover {
    transform: scale(1.2)
  }
}

.comment-name {
  font-weight: bold;
}

.icon, .comment-avatar, .comment-name, .comment-content {
  margin-right: 5px;
}
`

export default Comment