import React from 'react'
import { Link } from 'react-router-dom'
import SignoutButton from '../Buttons/SignoutButton'

const User = ({ user }) => {
  return (
    <div className='user'>
      {
        user
        ? <div>
            <span>
              { user }
            </span>
            <SignoutButton />
            
          </div>
        : <Link className='button button--link' to={'/login'}>
            Login
          </Link>
      }
    </div>
  )
}

export default User
