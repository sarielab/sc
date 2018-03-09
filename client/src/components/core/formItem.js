import React from 'react'

const FormItem = props => {
  let { label, value, name, handleChange, type } = props

  let input

  if (type === 'text' || type === 'hidden' || type === 'date'  || type === 'number')
    input = <input
        onChange={handleChange}
        type={type}
        value={value}
        name={name}
        label={label}
      />

  return (
    <div>
      <label>{label}</label> 
      {input}
    </div>
  )
}

export default FormItem