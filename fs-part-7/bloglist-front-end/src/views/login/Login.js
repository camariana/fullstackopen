import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getUser } from '../../redux/reducers/users/userSlice'
import loginService from '../../services/login/login'
import blogService from '../../services/blogs/blogs'


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })

      // store the user to local storage
      window.localStorage.setItem(
        'loggedInBlogAppUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)

      //reset the username and password
      setUsername('')
      setPassword('')
      
      dispatch(getUser(user))
      // take the login user to the home page
      navigate('/')
    } catch (exception) {
      //TODO fix this with an inline notification on top of the form
      console.log('Wrong username or password');
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form">
        <div className='form__group'>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              name="username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div className='form__group'>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              name="password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className='form__group form__group--submit'>
            <button type="submit">Login</button>
          </div>
      </form>
    </div>
  )
}

export default Login
