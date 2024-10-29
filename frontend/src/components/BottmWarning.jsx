import React from 'react'
import { Link } from 'react-router-dom'

const BottmWarning = ({to, buttonText}) => {
  return (
    <div className='pb-2 font-medium'>
      Already have an account?
      <Link to={to} className='pl-1 underline pointer'>{buttonText}</Link>
    </div>
  )
}

export default BottmWarning
