import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUsers, selectUsers } from '../../redux/reducers/users/usersSlice'


const Users = () => {

  const dispatch = useDispatch()
  const users = useSelector(selectUsers)


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

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
                {user.blogs.length}
              </div>
            </Link>
          </li>          
        )
      }
    </ul>
  )
}

export default Users
