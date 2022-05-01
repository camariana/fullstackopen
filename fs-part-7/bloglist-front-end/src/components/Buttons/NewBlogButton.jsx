import React from 'react'
import { Link } from 'react-router-dom'

const NewBlogButton = () => {
  return (
    <Link className='button button--fab' to={'/create'}>
      + New
    </Link>
  )
}

export default NewBlogButton
