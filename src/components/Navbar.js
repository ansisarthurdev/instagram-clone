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

//redux
import { selectUser } from '../app/appSlice'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const location = useLocation();
    const [searchInput, setSearchInput] = useState('');
    const [isOpen, setOpen] = useState(false);
    const user = useSelector(selectUser);

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
            <Link to='/profile' style={{position: 'relative', top: 3}}><Tooltip title='Profile'>{user?.photoURL ? <Avatar src={user?.photoURL} /> : <Avatar src='data:image/png;base64,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' />}</Tooltip></Link>
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
        text-decoration: none;

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