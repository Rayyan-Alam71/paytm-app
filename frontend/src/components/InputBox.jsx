import React from 'react'

const InputBox = ({onChange, label_text, placeholder}) => {
  return (
    <div className='pb-4'>
        <div className='text-left text-sm font-medium py-1'>{label_text}</div>
      <input type="text"  onChange ={onChange} placeholder= {placeholder} className='w-full px-2 py-2 border-slate-200 rounded border focus:outline-none'/>
    </div>
  )
}

export default InputBox
