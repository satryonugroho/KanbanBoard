import React, { useEffect, useState } from 'react'
import { AddBtn, BackBtn, EditBtn, InputArea, InputSelect, InputText } from '../../molecules'
import { Label } from '../../atoms'

const FormAdd = ({handleBack, handleNewTask, handleEditTask, data = null}) => {
  const Options = [{id:0,nameOption:"Low"},{id:1,nameOption:"Medium"},{id:2,nameOption:"High"}]
  const [showInfo,setShowInfo] = useState(false)
  const [info,setInfo] = useState([])
  const [title,setTitle] = useState('')
  const [detail,setDetail] = useState('')
  const [urgency,setUrgency] = useState('')

  useEffect(()=>{
    if(info.length !== 0)
    {
        setShowInfo(true)
    }
  },[info])

  useEffect(()=>{
    if(data !== null) {
        setTitle(data.title)
        setDetail(data.detail)
        setUrgency(data.urgency)
      }
  },[data])

  const handleAddTask = () => {
    let prev = []
    if(title === ''){
        prev.push("Please Input Title Task!")
    }
    if(detail === ''){
        prev.push("Please Input Detail Task!")
    }
    if(urgency === ''){
        prev.push("Please Input Urgency Task!")
    }
    if(prev.length !== 0){
        setInfo(prev)
    } else {
        let body = {
            title:title,
            detail:detail,
            urgency:urgency,
            status:0
        }
        handleNewTask(body)
    }
  }

  const handleEdit = () => {
    let prev = []
    if(title === ''){
        prev.push("Please Input Title Task!")
    }
    if(detail === ''){
        prev.push("Please Input Detail Task!")
    }
    if(urgency === ''){
        prev.push("Please Input Urgency Task!")
    }
    if(prev.length !== 0){
        setInfo(prev)
    } else {
        data.title=title,
        data.detail=detail,
        data.urgency=urgency,
        handleEditTask(data)
    }
  }

  return (
    <div className='fixed top-0 left-0 h-screen w-screen z-50'>
        <div className='flex justify-center items-center h-full px-5'>
            <div className='flex flex-col border-2  border-violet-800 bg-violet-600 rounded-lg w-full lg:w-1/3'>
                <div className='text-center text-2xl text-sky-100'>
                    {data === null ? (<>Add New Task</>):(<>Edit Task</>) }
                </div>
                <div className='border-y-2 border-violet-800 bg-white p-2'>
                    <InputText
                        text="Title Task:"
                        changeHandle={(v)=>setTitle(v)}
                        Value={title}
                    />
                    <InputArea
                        text="Detail Task:"
                        changeHandle={(v)=>setDetail(v)}
                        Value={detail}
                    />
                    <InputSelect
                        text="Urgency Task:"
                        Options={Options}
                        handleSelect={(v)=>setUrgency(v)}
                        Selected={urgency}
                    />
                    <div className='flex justify-evenly lg:justify-end lg:gap-3'>
                        <BackBtn
                            handleClick={handleBack}
                        />
                        {data === null ? (
                            <AddBtn
                            handleClick={handleAddTask}
                            />
                        ):(
                            <EditBtn 
                            handleClick={handleEdit}
                            />
                        ) }                    
                    </div>
                </div>
                <div className={'text-left text-md px-2 text-red-600 bg-violet-200 rounded-b-md'+ (!showInfo ? ' h-5' : '')}>
                {showInfo &&
                    JSON.stringify(info)
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAdd