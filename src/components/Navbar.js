import React, { useState } from 'react'
import styled from 'styled-components'

import { Link, useLocation } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'

//icons
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Send } from '@styled-icons/feather/Send'
import { HomeOutline } from '@styled-icons/evaicons-outline/HomeOutline'
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'
import { Tv } from '@styled-icons/bootstrap/Tv'
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline'
import { ImageAdd } from '@styled-icons/boxicons-regular/ImageAdd'
import Hamburger from 'hamburger-react'

//components
import Icon from './Icon'
 
const Navbar = () => {

    const location = useLocation();
    const [searchInput, setSearchInput] = useState('');
    const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper>
        <DekstopNav>
        <div className='logo'>
            <Link to='/'><Instagram className='icon' /> <img src='../images/Instagram_logo.png' alt='instagram logo' /></Link>
        </div>

        <div className='nav-btns'>
            <Icon 
                Icon={HomeOutline}
                link='/'
                name='Home'
            />

            {location?.pathname !== '/discover' && <>
                <Icon 
                    Icon={SearchAlt}
                    link='/discover'
                    name='Discover'
                />
            </>}

            {location?.pathname === '/discover' && <>
                <div className='search-input'>
                    <SearchAlt className='icon' />
                    <input type='text' name={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Search...' />
                </div>
            </>}

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
            <Icon 
                Icon={ImageAdd}
                link=''
                name='Upload Image'
            />

            <Hamburger size={20} easing='ease-in' duration={0.2} toggled={isOpen} toggle={setOpen} />
            <Link to='/profile' style={{position: 'relative', top: 3}}><Tooltip title='Profile'><Avatar src='../images/testImage.jpeg' /></Tooltip></Link>
        </div>
        </DekstopNav>

        {isOpen && <>
            <MobileNav>
            <div className='search-input'>
                <SearchAlt className='icon' />
                <input type='text' value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Search...' />
            </div>  

            <div className='mobile-links'>
                <Link to='/' onClick={() => setOpen(false)}><HomeOutline className='icon'/><p>Home</p></Link>
                <Link to='/discover' onClick={() => setOpen(false)}><SearchAlt className='icon'/><p>Discover</p></Link>
                <Link to='/' onClick={() => setOpen(false)}><Tv className='icon'/><p>IGTV</p></Link>
                <Link to='/' onClick={() => setOpen(false)}><HeartOutline className='icon'/><p>Notifications</p></Link>
            </div>
            </MobileNav>
        </>}

    </Wrapper>
  )
}

const MobileNav = styled.div`
    padding: 10px 20px;
    background: white;

    .mobile-links {
        margin: 5px 0;

        a {
            display: flex;
            padding: 5px;
            align-items: center;  
            color: black;
            text-decoration: none;
            background: #F3F3F3;
            margin: 5px 0;
            transition: .2s ease-out;

            :hover {
                background: lightgray;
            }

            .icon {
                margin-right: 10px;
                color: black;
                height: 17px;
                width: 17px;
            }
        }
    }

    .search-input {
        position: relative;
        border-radius: 3px;
        padding: 2px 4px 6px 10px;
        background: #F3F3F3;

        .icon {
            width: 17px;
            height: 17px;
            position: relative;
            right: 3px;
        }

        input {
            outline: none;
            border: none;
            height: 100%;
            width: 90%;
            font-size: .8rem;
            background: #F3F3F3;
        }
    }
`

const Avatar = styled.img`
width: 24px;
height: 24px;
border-radius: 50%;
`

const Wrapper = styled.div``

const DekstopNav = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 20px 20px;
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
left: 0;
background: white;
z-index: 100;

.nav-btns {
    display: flex;
    align-items: center;

    .search-input {
        position: relative;
        top: 2px;
        margin-right: 1.8rem;
        border-radius: 3px;
        padding: 0 4px 4px 10px;
        background: #F3F3F3;

        @media(max-width: 685px){
            left: 10%;  
        }

        @media(max-width: 478px){
            display: none;
        }

        .icon {
            width: 17px;
            height: 17px;
            position: relative;
            right: 3px;
        }

        input {
            outline: none;
            border: none;
            height: 100%;
            font-size: .8rem;
            background: #F3F3F3;
        }
    }
}

.user-btns {
    display: flex;
    align-items: center;

    .hamburger-react {
        position: relative;
        top: 1.5px;
        display: none;

        @media(max-width: 685px){
            display: block;
        }

    }

    a {
        color: black;
        cursor: pointer;

        .icon {
        width: 17px;
        height: 17px;
        margin-right: 25px;
        transition: .2s ease-out;

        @media(max-width: 685px){
            display: none;
        }

        }

        :hover {
            .icon {
                transform: scale(1.2);
            }
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
        position: relative;
        top: 2px;

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