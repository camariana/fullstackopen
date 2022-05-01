
import React from 'react'
import { Routes, Route } from "react-router-dom"

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Notification from './components/Notification/Notification'
import Home from './views/Home'
import Blogs from './views/blog/Blogs'
import Blog from './views/blog/Blog'
import Users from './views/user/Users'
import User from './views/user/User'
import Login from './views/login/Login'
import NewBlog from './views/blog/AddBlogForm'


const App = () => {
  return (
    <div className='page'>
      
      <Header />

      <Notification />
      
        <Routes>
          <Route path='/login' element={<Login />} />
          
          <Route path='/create' element={<NewBlog />} />
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