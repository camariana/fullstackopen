import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { selectUserById } from '../../redux/reducers/users/usersSlice'

function User() {
  const id  = useParams().id

  const user = useSelector(state => selectUserById(state, id))

  /* 
  The error message will occur if you refresh the page for an individual user.

  The cause of the issue is that, when we navigate directly to the page of an individual user, the React application has not yet received the data from the backend. One solution for fixing the problem is to use conditional rendering:
  */
  if (!user) {
    return null
  }

  return (
    <>
      <div className='breadcrumb'>
      <div className='breadcrumb__contain'>
        <Link to={'/users'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
          <span>Users</span> 
        </Link>
        </div>
      </div>
      <main>
        <div className='contain contain--alt'>
          <h1>
            { user.name }
          </h1>
          <p>
            Added blogs: 
          </p>
          <ul>
          {
            user.blogs.map((blog) => 
            <li key={blog.id}>
              { blog.title }
            </li>
            )
          }
         </ul>
        </div>
      </main> 
    </>
  )
}

export default User
