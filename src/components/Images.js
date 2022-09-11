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
        likes: '120'
    },
    {
        id: '412312',
        image: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        userImage: 'https://randomuser.me/api/portraits/thumb/men/54.jpg',
        userName: 'smallrabbit2',
        postAdded: '45m ago',
        likes: '100'
    },
    {
        id: '432432',
        image: 'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        userImage: 'https://randomuser.me/api/portraits/thumb/women/31.jpg',
        userName: 'KatieSwan',
        postAdded: '2hr ago',
        likes: '310'
    },
    {
        id: '235234',
        image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
        userImage: 'https://randomuser.me/api/portraits/thumb/women/24.jpg',
        userName: 'leopardx',
        postAdded: '3hr ago',
        likes: '356'
    },
    {
        id: '2331231234',
        image: 'https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
        userName: 'tinykoala',
        postAdded: '3hr ago',
        likes: '400'
    },
    {
        id: '231235234',
        image: 'https://images.unsplash.com/photo-1471400974796-1c823d00a96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        userImage: 'https://randomuser.me/api/portraits/thumb/men/66.jpg',
        userName: 'greenbird',
        postAdded: '1d ago',
        likes: '200'
    },
    {
        id: '523423',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        userImage: 'https://randomuser.me/api/portraits/thumb/women/24.jpg',
        userName: 'leopardx',
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
                key={img?.id}
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