import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import User from '../User/User'

import { useSelector } from 'react-redux'

import { selectUser } from '../../redux/reducers/users/userSlice'



const Header = () => {
  const user = useSelector(selectUser)

  console.log(user);

  return (
    <header className='header'>
      <div className='header__contain'>
        <Logo />
        <Nav />
        <User user={user} />
      </div>
    </header>
  )
}

export default Header
