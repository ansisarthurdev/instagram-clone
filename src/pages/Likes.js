import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { useSelector } from 'react-redux'
import { selectUser } from '../app/appSlice'
import { db } from '../app/firebase'
import { doc, getDoc } from "firebase/firestore";

const Likes = () => {

    const [active, setActive] = useState('followers');
    const user = useSelector(selectUser);
    const [followersData, setFollowersData] = useState([]);

    const getData = async () => {
        const docRef = doc(db, 'users', user?.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setFollowersData(docSnap.data())
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
}

    //get data about user followers
    useEffect(() => {
        getData();
    //eslint-disable-next-line
    }, [])

    //follower or likes switch
    useEffect(() => {
        if(active === 'followers'){
            const itemFollowers = document.querySelector('.followers');
            const itemLikes = document.querySelector('.likes');
            itemFollowers?.classList.add('active');
            itemLikes?.classList.remove('active');
        } else if (active === 'likes'){
            const itemFollowers = document.querySelector('.followers');
            const itemLikes = document.querySelector('.likes');
            itemFollowers?.classList.remove('active');
            itemLikes?.classList.add('active');
        }
    }, [active])

  return (
    <Wrapper>
        <Navbar />
            <div className='likes-content'>
                <ul>
                    <li className='followers' onClick={() => setActive('followers')}>Followers</li>
                    <li className='likes' onClick={() => setActive('likes')}>Likes</li>
                </ul>

                <h3 className='heading'>{active === 'followers' ? 'These users have followed you' : 'In development process.'}</h3>

                {active === 'followers' && <>
                    <div className='followers-content'>
                        {followersData?.followersId?.map(item => (
                        <div className='follower-item' key={item?.id}>
                            <img src={item?.userImage} alt='' />
                            <p className='text'>{item?.userDisplayName} followed you!</p>
                        </div>
                        ))}
                    </div>
                </>}

            </div>
        <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`

ul {
    list-style-type: none;
    display: flex;
    justify-content: center;

    li {
        cursor: pointer;
        opacity: .7;

        :nth-child(1){
            margin-right: 10px;
        }
    }

    .active {
        opacity: 1;
        border-bottom: 2px solid black;
    }
}

.likes-content {
    max-width: 800px;
    margin: 20px auto 0;
    padding: 20px 20px;

    .heading {
        font-size: .8rem;
        border-bottom: 2px solid black;
        display: inline-block;
        padding-bottom: 5px;
        margin-bottom: 20px;
    }

    .followers-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 200px;

        .follower-item {
            display: flex;
            align-items: center;
            margin: 0 20px 10px 0;
            background: lightgray;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: .2s ease-out;

            img {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                margin-right: 10px;
            }

            .text {
                font-size: .8rem;
            }

            :hover {
                background: #eeeeee;
            }

        }
    }
}
`

export default Likes