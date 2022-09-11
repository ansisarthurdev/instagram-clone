import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux'
import { store } from './app/store'

//pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Img from './pages/Img'
import Discover from './pages/Discover'
import Post from './pages/Post'

const App = () => {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/img" element={<Img />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
    </Provider>
  )
}

export default App