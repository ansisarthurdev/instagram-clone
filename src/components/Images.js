import React from 'react'
import styled from 'styled-components'

import Image from './Image'

const Images = () => {

    const imagesList = [{
        id: '31231',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: './images/testImage.jpeg',
        userName: 'ansisarthur',
        postAdded: '30m ago',
        likes: '100'
    },
    {
        id: '412312',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: './images/testImage.jpeg',
        userName: 'ansisarthur',
        postAdded: '30m ago',
        likes: '100'
    },
    {
        id: '432432',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: './images/testImage.jpeg',
        userName: 'ansisarthur',
        postAdded: '30m ago',
        likes: '100'
    },
    {
        id: '235234',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: './images/testImage.jpeg',
        userName: 'ansisarthur',
        postAdded: '30m ago',
        likes: '100'
    },
    {
        id: '235234',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: './images/testImage.jpeg',
        userName: 'ansisarthur',
        postAdded: '30m ago',
        likes: '100'
    },
    {
        id: '235234',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: './images/testImage.jpeg',
        userName: 'ansisarthur',
        postAdded: '30m ago',
        likes: '100'
    },
    {
        id: '523423',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: './images/testImage.jpeg',
        userName: 'ansisarthur',
        postAdded: '30m ago',
        likes: '100'
    },
    {
        id: '41232',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: './images/testImage.jpeg',
        userName: 'ansisarthur',
        postAdded: '30m ago',
        likes: '100'
    },
    {
        id: '12412321',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: './images/testImage.jpeg',
        userName: 'ansisarthur',
        postAdded: '30m ago',
        likes: '100'
    },]

  return (
    <Wrapper>
        {imagesList?.map(img => (
            <Image 
                id={img?.id}
                image={img?.image}
                userImage={img?.userImage}
                userName={img?.userName}
                postAdded={img?.postAdded}
                likes={img?.likes}
            />
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
max-width: 1100px;
margin: 20px auto 150px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 0 20px;
`

export default Images