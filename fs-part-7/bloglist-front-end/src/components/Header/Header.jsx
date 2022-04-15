import React from 'react'
import Logo from '../_includes/Logo'
import Nav from '../_includes/Nav'
import User from '../_includes/User'

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
