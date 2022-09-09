import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommentItem from '../components/CommentItem'
import AddComment from '../components/AddComment'

//icons
import { MoreHorizontalOutline } from '@styled-icons/evaicons-outline/MoreHorizontalOutline'
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'
import { Comment } from '@styled-icons/boxicons-regular/Comment'
import { Send } from '@styled-icons/feather/Send'
import { Bookmark } from '@styled-icons/bootstrap/Bookmark'

const Post = ({id}) => {

  const comments = [{
    id: 1,
    name: 'ansisarthur',
    comment: 'this is a test comment',
    avatar: '../images/testImage.jpeg'
  },
  {
    id: 2,
    name: 'Elon Musk',
    comment: 'Nice Pic! Is it Kittila?',
    avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/15E47/production/_124717698_gettyimages-1395200655.jpg'
  },
  {
    id: 3,  
    name: 'ansisarthur',
    comment: 'this is a test comment',
    avatar: '../images/testImage.jpeg'
  },
  {
    id: 4,
    name: 'ansisarthur',
    comment: 'this is a test comment',
    avatar: '../images/testImage.jpeg'
  },
  {
    id: 5,
    name: 'ansisarthur',
    comment: 'this is a test comment',
    avatar: '../images/testImage.jpeg'
  },
  {
    id: 6,
    name: 'ansisarthur',
    comment: 'this is a test comment',
    avatar: '../images/testImage.jpeg'
  },]

  return (
    <div className='post'>
        <Navbar />
          <Wrapper>
            <PostTop>
              <div className='left'>
                <Link to='/'><Avatar src='../images/testImage.jpeg'/></Link>
                <div>
                  <Link to='/'><h4 style={{fontSize: '.7rem'}}>ansisarthur</h4></Link>
                  <p style={{fontSize: '.5rem', opacity: '0.8'}}>1hr ago</p>
                </div>
              </div>
              
              <div className='right'>
                <Tooltip title='More'><MoreHorizontalOutline className='icon'/></Tooltip>
              </div>
            </PostTop>
            
            {/* Image */}  
            <img src='https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='post-image' alt=''/>

            <PostActions>
              <div className='left'>
                <HeartOutline className='icon'/>
                <Comment className='icon'/>
                <Send className='icon'/>
              </div>

              <div className='right'>
                <Bookmark className='icon'/>
              </div>
            </PostActions>

            <p className='post-like-count'>Liked by <span className='last-liked'><Link to='/'>Elon Musk</Link></span> and <span className='like-count'><Link to='/'>120 others</Link></span></p>

            <div className='post-comments'>
              {comments?.map(comment => (
                <CommentItem 
                  key={comment?.id}
                  name={comment?.name}
                  comment={comment?.comment}
                  avatar={comment?.avatar}
                />
              ))}
            </div>

            <AddComment />
          </Wrapper>
        <Footer />
    </div>
  )
}

const PostActions = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 5px 0 10px 0;

.icon {
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: .2s ease-out;
  margin-right: 12px; 

  :nth-child(4){
    margin-right: 0; 
  }

  :hover {
    transform: scale(1.2);
  }
}

.right {
  .icon {
    margin-right: 0;
  }
}
`

const PostTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

.left {
  display: flex;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
    display: flex;
  }
}

.right {
  .icon {
    width: 17px;
    height: 17px;
    cursor: pointer;
    transition: .2s ease-out;

    :hover {
      transform: scale(1.2);
    }
  }
}
`

const Wrapper = styled.div`
max-width: 800px;
margin: 20px auto 0;
padding: 20px 20px;

.post-comments {
  height: 130px;
  overflow-y: scroll;
  margin-bottom: 10px;

  ::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #000000;
  border: 0px none #000000;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #1c1c1c;
}
::-webkit-scrollbar-thumb:active {
  background: #424242;
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-track:hover {
  background: #ffffff;
}
::-webkit-scrollbar-track:active {
  background: #ffffff;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
}

.post-like-count {
  font-size: .7rem;
  margin-bottom: 20px;  

  span {
    font-weight: bold;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
}

.post-image {
  width: 100%;
  max-height: 500px;
  background-position: center;
  background-size: contain;
  margin-top: 20px;
}
`

const Avatar = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
margin-right: 10px;
`

export default Post