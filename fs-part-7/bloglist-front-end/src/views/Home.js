import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import DeleteButton from '../components/Buttons/DeleteButton'
import LikeButton from '../components/Buttons/LikeButton'
import NewBlogButton from '../components/Buttons/NewBlogButton'

import Masthead from '../components/Masthead/Masthead'
import { getBlogs, selectBlogs } from '../redux/reducers/blogs/blogsSlice'

const Home = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(selectBlogs)

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])

  return (
    <>
      <Masthead />
      <main>
        <section className='sec'>
          <div className='contain'>
            <header className='sec__header'>
              <h2>
                Most Like Blogs
              </h2>
              <div>
              <Link className='button button--secondary' to={'/blogs'}>
                See all Blogs
              </Link>
              </div>
            </header>

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
        </section>
      </main>
      <NewBlogButton />
    </>
  )
}

export default Home
