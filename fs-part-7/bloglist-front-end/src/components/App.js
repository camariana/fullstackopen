
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

import { initialBlogs } from '../redux/reducers/blogs/blogsSlice'
import { getUsers, selectAllUsers } from '../redux/reducers/users/usersSlice'

import Header from './Header/Header'
import Blogs from './Blog/Blogs'
import Blog from './Blog/Blog'
import Login from './Login/Login'
import Users from './Users/Users'
import NewBlog from './Blog/NewBlog'
import Notification from './Notification/Notification'


const App = () => {
  const dispatch = useDispatch()
  const blogs = useSelector( state => state.blogs )
  const { users } = useSelector(selectAllUsers) 
  const notification = useSelector( state => state.notification)

  useEffect(() => {
    dispatch(initialBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  

  console.log(users);

  return (
    <div className='page'>
      <Header />

      <NewBlog />

      <Notification notification={notification} />

      <Routes>
        <Route path='/blogs/:id' element={<Blog blogs={blogs} />} />
        <Route path='/blogs' element={<Blogs blogs={blogs} />} />

        <Route path='/users' element={<Users users={users} />} />
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Blogs blogs={blogs} />} />
      </Routes>
    </div>
  )
}

export default App