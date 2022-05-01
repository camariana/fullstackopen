import React from 'react'

const Banner = ({ title, description }) => {
  return (
    <div className='banner' role='banner'>
      <div className='banner__contain'>
        <h1 className='banner__title'>{ title }</h1>
        <p className='banner__subtitle'>
          { description }
        </p>
      </div>
    </div>
  )
}

export default Banner
