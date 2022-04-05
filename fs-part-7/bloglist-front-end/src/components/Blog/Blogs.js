import React from 'react'
import { Link } from 'react-router-dom'
import LikeButton from '../LikeButton/LikeButton'

const Blogs = ({ blogs }) => {
  return (
    <ul className='list'>
      {
        blogs.map(blog =>
          <li className='list__item' key={blog.id}>
              <div className='list__primary'>
                <h2>
                  <Link to={`/blogs/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h2>
                <p>
                  {blog.likes}
                </p>
              </div>
              <div className='list__secondary'>
                <LikeButton id={blog.id}/>
              </div>
          </li>          
        )
      }
    </ul>
  )
}

export default Blogs
