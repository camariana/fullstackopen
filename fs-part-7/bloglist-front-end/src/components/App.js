
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

import { initialBlogs } from '../redux/reducers/blogs/blogsSlice'

import Header from './Header/Header'
import Blogs from './Blog/Blogs'
import Blog from './Blog/Blog'


const App = () => {
  const dispatch = useDispatch()
  const blogs = useSelector( state => state.blogs )

  useEffect(() => {
    dispatch(initialBlogs)
  }, [dispatch])

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path='/' element={<Blogs blogs={blogs} />} />
        
        <Route path='/blogs' element={<Blogs blogs={blogs} />} />
        <Route path='/blogs/:id' element={<Blog blogs={blogs} />} />
      </Routes>
    </div>
  )
}

export default App