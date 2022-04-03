import React from 'react'
import Logo from '../_includes/Logo'
import Nav from '../_includes/Nav'
import User from '../_includes/User'





const Header = () => {
  return (
    <header className='header'>
      <div className='header__contain'>
        <Logo />
        <Nav />
        <User />
      </div>
    </header>
  )
}

export default Header
