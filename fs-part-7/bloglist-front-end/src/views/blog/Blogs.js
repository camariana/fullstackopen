import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getBlogs, selectBlogs } from '../../redux/reducers/blogs/blogsSlice'

import DeleteButton from '../../components/Buttons/DeleteButton'
import LikeButton from '../../components/Buttons/LikeButton'



const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(selectBlogs)


  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])


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
                <LikeButton id={blog.id} />
                <DeleteButton id={blog.id} />
              </div>
          </li>          
        )
      }
    </ul>
  )
}

export default Blogs
