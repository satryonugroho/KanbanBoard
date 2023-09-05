import React from 'react'

const Select = ({Options, handleChange, Selected, ...props}) => {
  const listOptions = (data) => {
    return(
        data.map((item)=>(
            <option key={item.id} value={item.id}>{item.nameOption}</option>
        ))
    )
  }
  return (
    <select value={Selected} onChange={handleChange} {...props}>
        <option value=''>Please Select</option>
        {
            listOptions(Options)
        }
    </select>
  )
}

export default Select