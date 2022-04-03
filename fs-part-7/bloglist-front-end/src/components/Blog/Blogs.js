import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = ({ blogs }) => {
  return (
    <ul className='list'>
      {
        blogs.map(blog =>
          <li className='list__item' key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <div className='list__primary'>
                <h2>
                  {blog.title}
                </h2>
              </div>
              <div className='list__secondary'>

              </div>
            </Link>
          </li>          
        )
      }
    </ul>
  )
}

export default Blogs
