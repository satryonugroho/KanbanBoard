import React from 'react'

const Btn = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Btn