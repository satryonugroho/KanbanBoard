import React, { useEffect, useState } from 'react'
import { CardTask } from '../../molecules'
import FormAdd from '../FormAdd'

const CardList = ({title, tasks, status, handleModifTask}) => {

  const [listTask, setListTask] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [dataTask, setDataTask] = useState(null)
  
  useEffect(() => {
    let newArr = tasks.filter(item => item.status === status);
    setListTask(newArr);
  }, [tasks]);

  const handleMenu = (v,data) => {
    if(v < 3){
      data.status = v
      handleModifTask(data)
    }
    if(v === 3){
      setDataTask(data)
      setShowForm(true)
    }
    if(v === 4){
      handleModifTask(data, true)
    }
  }

  return (
    <div className='border-2 h-full w-full lg:w-1/3 border-violet-800'>
        <div className='p-2 border-b-2 border-violet-800 bg-violet-300 text-blue-800 text-xl'>{`${title} (${listTask.length})`}</div>
        <div className='p-2 flex flex-col gap-2 bg-violet-100'> 
        {listTask.length > 0 ? (
          listTask.map((item) => (
            <CardTask key={item.id} data={item} handleMenu={(v) => handleMenu(v, item)} />
            ))
          ) : (
            <>Data Kosong</>
          )
        }
        </div>
        {showForm &&
          <FormAdd 
          data={dataTask}
          handleBack={()=>setShowForm(false)}
          handleEditTask={(data)=>{handleModifTask(data); setShowForm(false)}}
          />
        }
    </div>
  )
}

export default CardList