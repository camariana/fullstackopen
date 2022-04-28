import React from 'react'

const Banner = ({ title, description }) => {
  return (
    <div className='banner' role='banner'>
      <h1>{ title }</h1>
      <p>
        { description }
      </p>
    </div>
  )
}

export default Banner
