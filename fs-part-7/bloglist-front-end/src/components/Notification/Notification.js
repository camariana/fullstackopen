import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector( state => state.notification)

  if (!notification) {
    return null
  }

  return (
    <div className='notification'>
      <p>
        {notification}
      </p>
    </div>
  )
}

export default Notification
