import React from 'react'
import { Link } from 'react-router-dom'
 


const Nav = () => {
  return (
    <nav className='nav'>
      <Link className='nav__link' to="/">Home</Link>
      <Link className='nav__link' to="/blogs">Blogs</Link>
      <Link className='nav__link' to="/users">Users</Link>
    </nav>
  )
}

export default Nav
