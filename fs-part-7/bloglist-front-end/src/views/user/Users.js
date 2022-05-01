import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUsers, selectUsers } from '../../redux/reducers/users/usersSlice'

import Banner from '../../components/Banner/Banner'

const Users = () => {

  const dispatch = useDispatch()
  const users = useSelector(selectUsers)

  const title = "Users"
  const description = "The description of the page will come soon"


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <>
      <Banner title={title} description={description} />
      <main>
        <div className='contain contain--alt'>
          <ul className='list list--inline'>
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
        </div>
      </main>
    </>
  )
}

export default Users
