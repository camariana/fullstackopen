import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import DeleteButton from '../../components/Buttons/DeleteButton'
import LikeButton from '../../components/Buttons/LikeButton'
import NewBlogButton from '../../components/Buttons/NewBlogButton'
import Comments from '../../components/Comments/Comments'

import { selectBlogById } from '../../redux/reducers/blogs/blogsSlice'
import NewComment from './AddCommentForm'

const Blog = () => {
  const id = useParams().id
  
  const blog = useSelector(state => selectBlogById(state, id))

  if (!blog) {
    return  null
  }

  return (
   <>
      <div className='breadcrumb'>
      <div className='breadcrumb__contain'>
        <Link to={'/blogs'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
          <span>Blogs</span> 
        </Link>
        </div>
      </div>
      <main>
        <section className='sec'>
          <div className='contain'>
            <h1>
              { blog.title }
            </h1>
            <p>
              Added by: { blog.user.name }
            </p>

            <p>
              Likes: { blog.likes }
            </p>
            <div>
              <LikeButton id={blog.id} />
              <DeleteButton id={blog.id} />
            </div>
            
            <p>
              <a className='alink' rel='noreferrer' target={'_blank'} href={`${blog.url}`}>
                Read Blog
              </a>
            </p>
          </div>
        </section>

        <section className='sec'>
          <div className='contain contain--small'>
            <NewComment />
            
            <hr className='divider' />
            
            <h2>
              Comments
            </h2>
            <Comments />
          </div>
        </section>
      </main> 
      <NewBlogButton />
    </>
  )
}

export default Blog
