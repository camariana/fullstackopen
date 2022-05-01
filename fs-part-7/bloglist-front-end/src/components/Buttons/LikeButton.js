import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { likeBlog, selectBlogs } from '../../redux/reducers/blogs/blogsSlice'


const LikeButton = ({ id }) => {
  const dispatch = useDispatch()
  const blogs = useSelector(selectBlogs)

  const like = id => {
    const likedBlog = blogs.find((blog) => blog.id === id)
    dispatch(likeBlog(likedBlog))
  }
  

  return (
    <button className='button button--tertiary' onClick={() => like(id)}>
      👍
    </button>
  )
}

export default LikeButton
