import React, { useState } from 'react'
import styled from 'styled-components'
import Picker from 'emoji-picker-react';

//icons
import { EmojiAdd } from '@styled-icons/fluentui-system-regular/EmojiAdd'

//firebase & redux
import { selectUser } from '../app/appSlice'
import { useSelector } from 'react-redux'
import { db } from '../app/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const AddComment = ({id}) => {

    const [comment, setComment] = useState('');
    const [picker, setPicker] = useState(false);
    const user = useSelector(selectUser);

    const onEmojiClick = (event, emojiObject) => {
        setComment(comment + emojiObject?.emoji)
    };

    const addComment = async () => {
        if(comment.length !== 0){
            const commentToSend = comment;
            setComment('');
            setPicker(false);
    
            await addDoc(collection(db, 'posts', id, 'comments'), {
                comment: commentToSend,
                username: user.displayName ? user.displayName : user.email,
                userId: user.uid,
                userImage: user?.photoURL ? user.photoURL : '../images/userImg.png',
                timestamp: serverTimestamp()
            })
        }
    }

  return (
    <Wrapper>
        <Avatar src={user?.photoURL} />

        <div className='comment-container'>
            <EmojiAdd className='icon' onClick={() => setPicker(!picker)}/>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
            <p onClick={addComment}>Post</p>
            {picker && <Picker onEmojiClick={onEmojiClick}/>}
        </div>
    </Wrapper>
  )
}

const Avatar = styled.img`
min-width: 28px;
max-width: 28px;
height: 28px;
border-radius: 50%;
margin-right: 10px;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
margin: 20px 0 40px 0;

.emoji-picker-react {
    position: absolute;
    top: -330px;
    left: 0;
}

.comment-container {
    background: #F3F3F3;
    padding: 6px 5px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 5px;
    position: relative;

    p {
        color: #218CEE;
        font-size: .7rem;
        font-weight: bold;
        padding: 3px 10px;
        cursor: pointer;
    }

    input {
        outline: none;
        border: none;
        background: transparent;
        padding-left: 5px;
        width: 100%;
    }
}

.icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: .2s ease-out;

    @media(max-width: 600px){
        display: none;
    }

    :hover {
        transform: scale(1.2);
    }
}
`

export default AddComment