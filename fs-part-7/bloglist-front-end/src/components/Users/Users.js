import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({ users }) => {
  return (
    <ul className='list'>
      {
        users.map(user =>
          <li className='list__item' key={user.id}>
            <Link to={`/users/${user.id}`}>
              <div className='list__primary'>
                <h2>
                  {user.name}
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

export default Users
