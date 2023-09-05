import React, { useEffect, useState } from 'react'
import { Label, Select } from '../../atoms'

const InputSelect = ({text, Options, handleSelect, Selected}) => {

  const [isOptions, setIsOptions] = useState(false)

  useEffect(()=>{
    if(Array.isArray(Options)){
        setIsOptions(true)
    }
  },[isOptions])

  return (
    <div className='py-2'>
        <div>
            <Label
                text={text}
                className="text-sky-700"
            />
        </div>
        <div>
            {!isOptions && <>No Have Options</>}
            {isOptions && 
            <Select 
            handleChange={(e)=>handleSelect(e.target.value)}
            Options={Options}
            Selected={Selected}
            />
            }
        </div>
    </div>
  )
}

export default InputSelect
