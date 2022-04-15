import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectBlogById } from '../../redux/reducers/blogs/blogsSlice'

function Blog() {
  const id = useParams().id
  
  const blog = useSelector(state => selectBlogById(state, id))

  if (!blog) {
    return  null
  }

  return (
    <div>
      <p>
        {blog.title}
      </p>
    </div>
  )
}

export default Blog
