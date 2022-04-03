import React from 'react'
import { useParams } from 'react-router-dom'

function Blog({ blogs }) {
  const id = useParams().id
  
  const blog = blogs.find(b => b.id === id)

  return (
    <div>
      <p>
        {blog.title}
      </p>
    </div>
  )
}

export default Blog
