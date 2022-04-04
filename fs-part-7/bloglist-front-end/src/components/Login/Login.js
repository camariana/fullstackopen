import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { initialUser } from '../../redux/reducers/users/userSlice'



const Login = ({ user }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

    dispatch(initialUser('Matti Luukkainen'))
    navigate('/')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        
        user: <input type='text' />
        password: <input type='password' />
        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
