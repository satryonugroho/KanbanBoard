import React, { useState } from 'react'
import { Btn } from '../../atoms'

const DropdownMenu = ({handleMenu}) => {
    const [showSubMenu, setShowSubMenu] = useState(false)
  return (
    <div className='flex flex-col text-left z-50'>
        <div className=''>
            <div className='p-1 border-2 border-sky-200 hover:bg-sky-50'>
                <Btn className="w-full text-left"
                onClick={()=>{setShowSubMenu(!showSubMenu)}}
                >
                    Move To...
                </Btn>
            </div>
            {showSubMenu && <>
            <div className='px-3 border-sky-200 hover:bg-sky-50 '>
                <Btn className='w-full text-left' onClick={()=>handleMenu(0)}>To Do</Btn>
            </div>
            <div className='px-3 border-sky-200 hover:bg-sky-50 '>
                <Btn onClick={()=>handleMenu(1)}>On Progress</Btn>
            </div>
            <div className='px-3 border-sky-200 hover:bg-sky-50 '>
                <Btn className='w-full text-left' onClick={()=>handleMenu(2)}>Done</Btn>
            </div>
            </>}
        </div>
        <div className='border-2 border-sky-200 hover:bg-sky-50 p-1'>
            <Btn className='w-full text-left' onClick={()=>handleMenu(3)}>Edit</Btn>
        </div>
        <div className='border-2 border-sky-200 hover:bg-sky-50 p-1'>
            <Btn className='w-full text-left' onClick={()=>handleMenu(4)}>Delete</Btn>
        </div>
    </div>
  )
}

export default DropdownMenu