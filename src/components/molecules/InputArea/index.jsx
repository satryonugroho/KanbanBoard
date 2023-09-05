import React from 'react'
import { Label, TextArea } from '../../atoms'

const InputArea = ({text, changeHandle, Value}) => {
  return (
    <div className='py-2'>
        <div>
            <Label
                text={text}
                className="text-sky-700"
            />
        </div>
        <div>
            <TextArea
            className="border-2 border-sky-300 resize-none rounded-md w-full h-28 p-2 focus:outline-none text-sky-800"
            onChange={(e)=>changeHandle(e.target.value)}
            value={Value}
            >

            </TextArea>
        </div>
    </div>
  )
}

export default InputArea