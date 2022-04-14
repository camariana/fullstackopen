import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

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
    <ul>
      {
        user.blogs.map((b) => 
          <li key={b}>{b}</li>
        )
      }
    </ul>
  )
}

export default User
