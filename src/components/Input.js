import React from 'react'

function Input({ label, placeholder, func }) {
  return (
    <div>
      <label>{label}</label>
      <input onChange={func} name={label} placeholder={placeholder} />
    </div>
  )
}

export default Input
