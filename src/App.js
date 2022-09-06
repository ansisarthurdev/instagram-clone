import React from 'react'
import { Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import Login from './pages/Login'
import Img from './pages/Img'
import Discover from './pages/Discover'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/img" element={<Img />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
  )
}

export default App