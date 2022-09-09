import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactLoading from 'react-loading';

//components
import Story from './Story'

//icons
import { Plus } from '@styled-icons/boxicons-regular/Plus'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { selectStories, updateStories } from '../app/appSlice'

const Stories = () => {

    const [newStories, updateNewStories] = useState(null);
    
    //redux
    const dispatch = useDispatch();
    const storageStories = useSelector(selectStories);

    const getData = () => {
        axios.get('https://randomuser.me/api/?results=15')
        .then(response => updateNewStories(response?.data?.results))
    }

    useEffect(() => {
      !storageStories ? getData() : updateNewStories(storageStories)
      //eslint-disable-next-line
    }, [])

    useEffect(() => {
      newStories && dispatch(updateStories(newStories))
      //eslint-disable-next-line
    }, [newStories])

  return (
    <Wrapper style={{justifyContent: newStories ? 'flex-start' : 'center'}}>
        {newStories ? <>
        <UserStory>
            <Link to='/'>
                <img src='../images/testImage.jpeg' alt='profile' />
                <p>My Story</p>
                <div className='plus-btn'><Plus className='icon'/></div>
            </Link>
        </UserStory>

        {newStories?.map(story => (
            <Story 
            key={story?.login?.uuid}
            link={story?.login?.uuid}
            image={story?.picture?.thumbnail}
            userName={story?.login?.username}
            seen={false}
            />
        ))}
        
        </> : (
            <ReactLoading className='loading-bubbles' type='bubbles' color='black' width={'50px'} />
        )}
    </Wrapper>
  )
} 

const UserStory = styled.div`
margin: 0 35px 0 0;
position: relative;

.plus-btn {
    background: #5B51D8;
    color: white;
    position: absolute;
    width: 13px;
    height: 13px;
    bottom: 13px;
    right: 2px;  
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid white;

    .icon {
        width: 12px;
        height: 12px;
        position: relative;
        top: .5px;
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
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }

    p {
        margin: 6px 0 0 0;
        font-size: .6rem;
    }
}
`

const Wrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
padding: 20px 0px 20px 50px;
display: flex;
overflow-y: hidden;
position: relative;

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
`

export default Stories