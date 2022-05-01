import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteBlog } from '../../redux/reducers/blogs/blogsSlice'


const DeleteButton = ({ id }) => {

  const dispatch = useDispatch()
  const blogs = useSelector( state => state.blogs )
  
  const remove = id => {
    const deletedBlog = blogs.find((blog) => blog.id === id)
    
    const yes = window
      .confirm(`Are you sure you want to delete ${deletedBlog.title} by ${deletedBlog.author}`)

    if (!yes) {
      return
    }

    dispatch(deleteBlog(deletedBlog))
  }


  return (
    <button className='button button--tertiary' onClick={() => remove(id)}>
      Delete
    </button>
  )
}

export default DeleteButton
