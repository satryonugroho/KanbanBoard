import React from 'react'
import { Input, Label } from '../../atoms'

const InputText = ({text, changeHandle, Value}) => {
  return (
    <div className='py-2'>
        <div>
            <Label
                text={text}
                className="text-sky-700"
            />
        </div>
        <div>
            <Input
            type="text"
            className="border-2 rounded-lg w-full border-sky-300 px-2 focus:outline-none text-sky-800"
            onChange={(e)=>changeHandle(e.target.value)}
            value={Value}
            />
        </div>
    </div>
  )
}

export default InputText