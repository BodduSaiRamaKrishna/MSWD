import React from 'react'

const Notification = ({ message, type, display }) => {
   if (message === null) {
    return null
  }

  return (
    <div className={`notification ${styleTypes[type]}`}>
      {message}
    </div>
  )
}

export default Notification
