import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import {Helmet} from "react-helmet"
import Tooltip from '@mui/material/Tooltip'
import moment from 'moment';

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommentItem from '../components/CommentItem'
import AddComment from '../components/AddComment'

//icons
import { MoreHorizontalOutline } from '@styled-icons/evaicons-outline/MoreHorizontalOutline'
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'
import { Heart } from '@styled-icons/evaicons-solid/Heart'
import { Comment } from '@styled-icons/boxicons-regular/Comment'
import { Send } from '@styled-icons/feather/Send'
import { Bookmark } from '@styled-icons/bootstrap/Bookmark'

//firebase
import { doc, getDoc, onSnapshot, query, orderBy, collection, setDoc, deleteDoc, updateDoc, increment } from "firebase/firestore"
import { db } from '../app/firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../app/appSlice'

const Post = () => {

  const user = useSelector(selectUser);
  const params = useParams();
  const [postData, setPostData] = useState(null);
  const [comments, setComments] = useState(null);
  const [likes, setLikes] = useState(null);
  const [hasLiked, setHasLiked] = useState(null);

  const likePost = async() => {
    if(hasLiked){
      await deleteDoc(doc(db, 'posts', params.id, 'likes', user?.uid));

      await updateDoc(doc(db, 'posts', params?.id ), {
        likes: increment(-1)
      });
    } else {
      await setDoc(doc(db, 'posts', params?.id, 'likes', user?.uid), {
        username: user?.displayName ? user?.displayName : user?.email,
        uid: user?.uid
      })

      await updateDoc(doc(db, 'posts', params?.id ), {
        likes: increment(1)
      });
    }
  }

  useEffect(() => {
    const getData = async() => {
      const docRef = doc(db, 'posts', params.id);
      const docSnap = await getDoc(docRef);
      setPostData(docSnap.data());
    }

    getData();
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    onSnapshot(query(collection(db, 'posts', params.id, 'comments'),
    orderBy('timestamp', 'desc')
    ), (snapshot) => setComments(snapshot.docs))

    //eslint-disable-next-line
  }, [db, params.id])

  useEffect(() => {
    onSnapshot(collection(db, 'posts', params.id, 'likes'), (snapshot) => setLikes(snapshot.docs))
    //eslint-disable-next-line
  }, [db, params.id])

  useEffect(() => {
    setHasLiked(
      likes?.findIndex((like) => like?.id === user?.uid) !== -1
    )
    //eslint-disabled-next-line
  }, [likes, user?.uid])
  
  return (
    <div className='post'>
      <Helmet><title>{`Instagram - ${postData?.caption}`}</title></Helmet>
        <Navbar />
          <Wrapper>
            <PostTop>
              <div className='left'>
                <Link to={`/profile/${postData?.uid}`}><Avatar src={postData?.profileImg}/></Link>
                <div>
                  <Link to={`/profile/${postData?.uid}`}><h4 style={{fontSize: '.7rem'}}>{postData?.username}</h4></Link>
                  <p style={{fontSize: '.5rem', opacity: '0.8'}}>{moment(new Date(postData?.timestamp?.toMillis())).fromNow()}</p>
                </div>
              </div>
              
              <div className='right'>
                <Tooltip title='More'><MoreHorizontalOutline className='icon'/></Tooltip>
              </div>
            </PostTop>
            
            {/* Image */}  
            <img src={postData?.image} className='post-image' alt=''/>

            <PostActions>
              <div className='left'>
                {!hasLiked ? <HeartOutline className='icon' onClick={likePost} /> : <Heart className='icon' style={{color: 'red'}} onClick={likePost} />}

                <Comment className='icon'/>
                <Send className='icon'/>
              </div>

              <div className='right'>
                <Bookmark className='icon'/>
              </div>
            </PostActions>

            <p className='post-description'>{postData?.caption}</p>
            {likes?.length > 0 && <><p className='post-like-count'>Liked by <span className='last-liked'><Link to='/'>{likes[0]?.data()?.username}</Link></span> {likes?.length > 1 && <>and <span className='like-count'><Link to='/'>{likes?.length - 1} others</Link></span></>}</p></>}

            {comments?.length > 0 && <>
              <div className='post-comments'>
              {comments?.map(comment => (
                <CommentItem 
                  key={comment?.data().userId}
                  id={comment?.data().userId}
                  name={comment?.data().username}
                  comment={comment?.data().comment}
                  avatar={comment?.data().userImage}
                />
              ))}
              </div>
            </>}

            <AddComment id={params.id} />
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

.post-description {
  font-size: .8rem;
  margin: 10px 0;
}

.post-comments {
  min-height: 30px;
  max-height: 130px;
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
object-fit: cover;
`

export default Post