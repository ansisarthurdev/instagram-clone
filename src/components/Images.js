import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Image from './Image'

//firebase
import { onSnapshot, query, collection, orderBy } from '@firebase/firestore'
import { db } from '../app/firebase'

const Images = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        });

        return unsubscribe;
    }, [])

  return (
    <Wrapper>
        {posts?.map(img => (
            <Image 
                key={img.id}
                id={img?.id}
                userId={img?.data().uid}
                image={img?.data().image}
                userImage={img?.data().profileImg}
                userName={img?.data().username}
                likes={'0'}
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