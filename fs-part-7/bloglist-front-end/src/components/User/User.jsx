import React from 'react'
import { Link } from 'react-router-dom'

import LogoutButton from '../Buttons/LogoutButton'

const User = ({ user }) => {
  
  const handleLogout = () => {
    window.localStorage.removeItem('loggedInBlogAppUser')
    window.location.reload()
    return false
  }

  return (
    <div className='user'>
      {
        user
        ? <div>
            <span>
              { user.name }
            </span>
            <LogoutButton handleLogout={handleLogout} />
            
          </div>
        : <Link className='button button--secondary' to={'/login'}>
            Login
          </Link>
      }
    </div>
  )
}

export default User
