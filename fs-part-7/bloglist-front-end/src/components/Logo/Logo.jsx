import React from 'react'
import { Link } from 'react-router-dom'
 


const Logo = () => {
  return (
    <div className='logo'>
      <Link className='logo__text' to="/">Bloglist</Link>
    </div>
  )
}

export default Logo
