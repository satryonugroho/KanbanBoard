import React from 'react'

const TextArea = ({content, ...props}) => {
  return (
    <>
    <textarea {...props}>{content}</textarea>
    </>
  )
}

export default TextArea