import React from 'react'

const Reciever = ({sendTo}) => {
  return (
    <div className='flex  items-center gap-3 pt-11 pl-2 pb-4'>
      <div className=' flex justify-center items-center size-11 bg-green-500 text-white text-2xl font-medium rounded-full'>{"A"}</div>

      <div className='font-medium text-xl'>{sendTo}</div>
    </div>
  )
}

export default Reciever
