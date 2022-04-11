import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { likeBlog } from '../../redux/reducers/blogs/blogsSlice'


const LikeButton = ({ id }) => {
  const dispatch = useDispatch()
  const blogs = useSelector( state => state.blogs )

  const like = id => {
    const likedBlog = blogs.find((blog) => blog.id === id)
    dispatch(likeBlog(likedBlog))
  }
  

  return (
    <button className='button' onClick={() => like(id)}>
      👍
    </button>
  )
}

export default LikeButton
