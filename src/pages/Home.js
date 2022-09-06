import React from 'react'

//components
import Navbar from '../components/Navbar'
import Stories from '../components/Stories'
import Images from '../components/Images'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='homepage'>
        <Navbar />
        <Stories /> 
        <Images />
        <Footer />
    </div>
  )
}

export default Home