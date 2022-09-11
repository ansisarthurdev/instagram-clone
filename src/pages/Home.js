import React, { useEffect } from 'react'
import {Helmet} from "react-helmet"
import { useNavigate } from 'react-router-dom'

//components
import Navbar from '../components/Navbar'
import Stories from '../components/Stories'
import Images from '../components/Images'
import Footer from '../components/Footer'

//redux
import { useSelector } from 'react-redux'
import { selectUser } from '../app/appSlice'

const Home = () => {

  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if(user === null){
      navigate('/login');
    }
  //eslint-disable-next-line
  }, [user])

  return (
    <div className='homepage'>
        <Helmet><title>Instagram - Home</title></Helmet>
        <Navbar />
        <Stories /> 
        <Images />
        <Footer />
    </div>
  )
}

export default Home