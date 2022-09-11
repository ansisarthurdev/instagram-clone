import React, { useState } from 'react'
import styled from 'styled-components'
import Picker from 'emoji-picker-react';

//icons
import { EmojiAdd } from '@styled-icons/fluentui-system-regular/EmojiAdd'

const AddComment = ({id}) => {

    const [comment, setComment] = useState('');
    const [picker, setPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setComment(comment + emojiObject?.emoji)
    };

  return (
    <Wrapper>
        <Avatar src='../images/testImage.jpeg' />

        <div className='comment-container'>
            <EmojiAdd className='icon' onClick={() => setPicker(!picker)}/>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
            <p>Post</p>
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