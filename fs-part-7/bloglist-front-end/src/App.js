
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes, 
  Route, 
  Link
} from "react-router-dom"

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Notification from './components/Notification/Notification'
import Home from './views/Home'
import Blogs from './views/blog/Blogs'
import Blog from './views/blog/Blog'
import Users from './views/user/Users'
import User from './views/user/User'


const App = () => {
  const notification = useSelector( state => state.notification)


  return (
    <div className='page'>
      <Header />

      <Notification notification={notification} />

      <Routes>
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='/blogs' element={<Blogs />} />
        
        <Route path='/users/:id' element={<User />} />
        <Route path='/users' element={<Users />} />

        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App