import React, { useState } from 'react'
import {FlagIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/solid'
import { Btn } from '../../atoms'
import DropdownMenu from '../DropdownMenu'

const CardTask = ({data, handleMenu}) => {
  const [showMenu,setShowMenu] = useState(false)
  const Flag = (flag) => {
    if(flag === "0"){
        return(
            <><FlagIcon className='h-4 w-4 text-green-500' /></>
        )
    } else if(flag === "1"){
        return(
            <><FlagIcon className='h-4 w-4 text-yellow-500' /></>
        )
    } else if(flag === "2"){
        return(
            <><FlagIcon className='h-4 w-4 text-red-500' /></>
        )
    }
    return("False Data")
  }
  return (
    <div className='relative border-2 bg-white'>
        <div className='flex items-center gap-2 p-1'>
            <div>
                {Flag(data.urgency)}
            </div>
            <div className='text-lg'>{data.title}</div>
        </div>
        <div className='p-1'>{data.detail}</div>
        <div className={`${!showMenu ? "h-4 w-4 absolute top-0 right-0 text-right" : "w-max h-max absolute top-0 right-0 text-right bg-sky-100 z-50"}`}>
            <Btn className={`${showMenu ? "h-6 w-6" : "h-full w-full"}`}
            onClick={()=>{setShowMenu(!showMenu)}}
            >
                <EllipsisHorizontalIcon 
                className='h-full w-auto' 
                />
            </Btn>
            {showMenu &&
                <DropdownMenu handleMenu={(v)=>{handleMenu(v),setShowMenu(false)}}/>
            }
        </div>
    </div>
  )
}

export default CardTask