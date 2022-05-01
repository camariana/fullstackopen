import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getBlogs, selectBlogs } from '../../redux/reducers/blogs/blogsSlice'

import DeleteButton from '../../components/Buttons/DeleteButton'
import LikeButton from '../../components/Buttons/LikeButton'
import Banner from '../../components/Banner/Banner'
import NewBlogButton from '../../components/Buttons/NewBlogButton'



const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(selectBlogs)
  
  const title = "Blogs"
  const description = "The description of the page will come soon"

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])


  return (
    <>
      <Banner title={title} description={description} />
      <main>
        <div className='contain contain--alt'>
          <ul className='list'>
            {
              blogs.map(blog =>
                <li className='list__item' key={blog.id}>
                    <div className='list__primary'>
                      <h3 className='list__title'>
                        <Link to={`/blogs/${blog.id}`}>
                          {blog.title}
                        </Link>
                      </h3>
                      <span>
                        Likes {blog.likes}
                      </span>
                    </div>
                    <div className='list__secondary'>
                      <LikeButton id={blog.id} />
                      <DeleteButton id={blog.id} />
                    </div>
                </li>          
              )
            }
          </ul>
        </div>
      </main>
      <NewBlogButton />
    </>
  )
}

export default Blogs
