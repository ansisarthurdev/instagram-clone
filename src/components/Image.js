import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

//icons
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'
import { Comment } from '@styled-icons/boxicons-regular/Comment'
import { Send } from '@styled-icons/feather/Send'
import { MoreHorizontalOutline } from '@styled-icons/evaicons-outline/MoreHorizontalOutline'

const Image = ({ id, image, userImage, userName, postAdded, likes }) => {
  return (
    <Wrapper>
        <Link to={`./posts/${id}`}>
        <div className='insta-image' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
        </Link>
        <InstaInfo>
            <div className='left'>
                <Link to={`./users/${userName}`}>
                <div>
                    <Avatar src={userImage} />
                </div>
                </Link>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Link to={`./users/${userName}`}><h4 style={{fontSize: '.7rem'}}>{userName}</h4></Link>
                    <p style={{fontSize: '.5rem', opacity: '0.8'}}>{postAdded}</p>
                </div>
            </div>
            <div className='right'>
                <p>{likes} likes</p> <HeartOutline className='icon' /> <Comment className='icon' /> <Send className='icon' /> <MoreHorizontalOutline className='icon' />
            </div>
        </InstaInfo>
    </Wrapper>
  )
}

const Avatar = styled.img`
width: 28px;
height: 28px;
border-radius: 50%;
margin-right: 10px;
`

const InstaInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 0 0 10px;
margin: 5px 0 0 0;

.right {
    display: flex;
    align-items: center;

    .icon, p {
        margin-right: 10px;
        cursor: pointer;

        :hover {
            opacity: .5;
        }
    }

    .icon {
        width: 15px;
        height: 15px;
        transition: .2s linear;
    }

    p {
        font-size: .6rem;
        font-weight: bold;
        transition: .2s linear;
    }
}

.left {
    display: flex;
    align-items: center;
}
`

const Wrapper = styled.div`
width: 32%;
height: 100%;
margin-bottom: 40px;

@media(max-width: 900px){
    width: 49%;
}

@media(max-width: 600px){
    width: 99%;
}

.insta-image {
    width: 100%;
    height: 280px;
    margin-bottom: 10px;
    background-size: cover;
    background-position: center;
    transition: .3s cubic-bezier(.5,.17,.53,1.14);

    :hover {
        transform: scale(1.05)
    }
}

a {
    text-decoration: none;
    color: black;
}

`

export default Image