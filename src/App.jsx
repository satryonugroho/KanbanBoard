import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import { Label } from './components/atoms'
import { AddBtn } from './components/molecules'
import { FormAdd, CardList } from './components/organismes'

function App() {
  const [showFormAdd, setShowFormAdd] = useState(false)
  const [count, setCount] = useState(1)
  const [task, setTask] = useState([])

  const handleNewTask = (data) => {
    let prev = [...task]
    data.id = count
    setCount(count+1)
    prev.push(data)
    setTask(prev)
    setShowFormAdd(false)
  }

  const handleModifTask = (data, isDelete = false) => {
    let prev = [...task]
    let i 
    prev.map((item, index)=>{
      if(item.id === data.id){
        i = index
      }
    })
    prev[i]=data
    if(isDelete){
      prev.splice(i,1)
    }
    setTask(prev)
  }

  return (
    <>
      <div className='flex flex-col h-max w-screen gap-2'>
        <div className='flex place-content-center h-40'>
          <div className='h-full py-5'>
            <img src={viteLogo} alt='Logo' className='h-full w-auto object-cover' />
          </div>
        </div>
        <div className='text-center'>
          <Label
            text="Kanban Board"
            className="text-2xl text-violet-900"
          />
        </div>
        <div className='text-right pr-5'>
          <AddBtn 
          handleClick={()=>setShowFormAdd(true)}/>
        </div>
        <div className='flex flex-col lg:flex-row place-content-center px-5 pt-5 gap-5 mb-20'>
          <CardList 
          title="To Do"
          tasks={task}
          status = {0}
          handleModifTask={handleModifTask}
          />
          <CardList 
          title="On Progress"
          tasks={task}
          status = {1}
          handleModifTask={handleModifTask}
          />
          <CardList 
          title="Done"
          tasks={task} 
          status={2}
          handleModifTask={handleModifTask}
          />
        </div>
      </div>
      {showFormAdd && 
        <FormAdd 
        handleBack={()=>setShowFormAdd(false)}
        handleNewTask={(data)=>handleNewTask(data)}
        />
      }
    </>
  )
}

export default App
