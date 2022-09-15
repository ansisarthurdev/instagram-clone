import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Discover from './pages/Discover'
import Post from './pages/Post'
import Likes from './pages/Likes'

//firebase
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './app/firebase'
import { updateUser } from './app/appSlice'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch();

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(updateUser(user))
      } else {
        dispatch(updateUser(null))
      }
    });
  }

  useEffect(() => {
    checkUser();
    //eslint-disable-next-line
  }, [])
  
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/profile/:id" exact element={<UserProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/likes" element={<Likes />} />
    </Routes>
  )
}

export default App