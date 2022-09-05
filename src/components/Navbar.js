import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'

//icons
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Send } from '@styled-icons/feather/Send'
import { HomeOutline } from '@styled-icons/evaicons-outline/HomeOutline'
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'
import { Tv } from '@styled-icons/bootstrap/Tv'
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'

//components
import Icon from './Icon'
 
const Navbar = () => {
  return (
    <Wrapper>
        <div className='logo'>
            <Link to='/'><Instagram className='icon' /> <img src='./images/Instagram_logo.png' alt='instagram logo' /></Link>
        </div>

        <div className='nav-btns'>
            <Icon 
                Icon={HomeOutline}
                link='/'
                name='Home'
            />

            <Icon 
                Icon={SearchAlt}
                link='/'
                name='Search'
            />

            <Icon 
                Icon={Tv}
                link='/'
                name='IGTV'
            />

            <Icon 
                Icon={HeartOutline}
                link='/'
                name='Likes'
            />
        </div>

        <div className='user-btns'>
            <Link to='/'><Tooltip title='Messages'><Send className='icon' /></Tooltip></Link>
            <Link to='/' style={{position: 'relative', top: 3}}><Tooltip title='Profile'><Avatar src='./images/testImage.jpeg' /></Tooltip></Link>
        </div>
    </Wrapper>
  )
}

const Avatar = styled.img`
width: 24px;
height: 24px;
border-radius: 50%;
`

const Wrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 20px 20px;
display: flex;
justify-content: space-between;

.nav-btns {
    display: flex;
    align-items: center;
}

.user-btns {
    display: flex;
    align-items: center;

    a {
        color: black;
        cursor: pointer;

        .icon {
        width: 17px;
        height: 17px;
        margin-right: 25px;
        }
    }
}

.logo {

    a {
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
        cursor: pointer;

        .icon {
        width: 18px;
        height: 18px;
        margin-right: 15px;
        }

        img {
            width: 80px;
            height: 30px;
            
        }
    }
}
`

export default Navbar