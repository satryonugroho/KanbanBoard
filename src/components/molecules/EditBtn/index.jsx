import React from 'react'
import { Btn } from '../../atoms'
import {PencilSquareIcon} from '@heroicons/react/24/solid'

const EditBtn = ({handleClick}) => {
  return (
    <Btn
        className="h-8 border-2 border-sky-500 bg-sky-500 rounded-lg hover:bg-sky-100 hover:shadow-lg"
        onClick={()=>handleClick()}
    >
        <PencilSquareIcon className='h-full w-auto text-sky-200 hover:text-sky-500' />
    </Btn>
  )
}

export default EditBtn