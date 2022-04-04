
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

import { initialBlogs } from '../redux/reducers/blogs/blogsSlice'
import { initialUsers } from '../redux/reducers/users/usersSlice'

import Header from './Header/Header'
import Blogs from './Blog/Blogs'
import Blog from './Blog/Blog'
import Login from './Login/Login'
import Users from './Users/Users'
import NewBlog from './Blog/NewBlog'


const App = () => {
  const dispatch = useDispatch()
  const blogs = useSelector( state => state.blogs )
  const users = useSelector( state => state.users )
  const user = useSelector( state => state.user )


  useEffect(() => {
    dispatch(initialBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(initialUsers())
  }, [dispatch])
  

  return (
    <div className='page'>
      <Header user={user} />

      <NewBlog />

      <Routes>
        <Route path='/blogs/:id' element={<Blog blogs={blogs} />} />
        <Route path='/blogs' element={<Blogs blogs={blogs} />} />

        <Route path='/users' element={<Users users={users} />} />
        <Route path='/login' element={<Login user={user} />} />

        <Route path='/' element={<Blogs blogs={blogs} />} />
      </Routes>
    </div>
  )
}

export default App