import React from 'react'

//components
import Navbar from '../components/Navbar'
import Stories from '../components/Stories'
import Images from '../components/Images'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Stories /> 
        <Images />
    </div>
  )
}

export default Home