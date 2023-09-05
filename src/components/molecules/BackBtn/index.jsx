import React from 'react'
import { Btn } from '../../atoms'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/outline'

const BackBtn = ({handleClick}) => {
  return (
    <Btn
        className="h-8 border-2 border-gray-700 bg-gray-700 rounded-lg hover:bg-gray-100 hover:shadow-lg"
        onClick={()=>handleClick()}
    >
        <ArrowUturnLeftIcon className='h-full w-auto text-gray-200 hover:text-gray-700' />
    </Btn>
  )
}

export default BackBtn