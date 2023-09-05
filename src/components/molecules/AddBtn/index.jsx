import React from 'react'
import { Btn } from '../../atoms'
import {PlusIcon} from '@heroicons/react/24/outline'

const AddBtn = ({handleClick}) => {
  return (
        <Btn 
            className="h-8 border-2 border-violet-900 bg-violet-900 rounded-lg hover:bg-violet-100 hover:shadow-lg"
            onClick={()=>handleClick()}    
        >
            <PlusIcon className="h-full w-auto text-violet-50 hover:text-violet-900" />
        </Btn>
  )
}

export default AddBtn