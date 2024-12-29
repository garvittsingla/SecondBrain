import './App.css'
import {Button} from "./components/Button"
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/Card'
import {CreateContentModal }from "./components/CreateContentModal.tsx"
import { useState } from 'react'
import { Sidebar } from './components/Sidebar.tsx'
function App() {
  const [modalOpen,setModalOpen] = useState(false)
  return (
    <div>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-gray-100'>
      
      <CreateContentModal open={modalOpen} onclose={()=>{
        setModalOpen(false)
      }}/>
  
       <div className='flex items-end justify-end w-full gap-4 '>
       <Button onClick={()=>{setModalOpen(true)}} varient="primary" startIcon={<PlusIcon/>} text="Add content"></Button>
       <Button varient="secondary" startIcon={<ShareIcon/>} text="Share"></Button>
       </div>
        <div className='flex gap-4'> 
        <Card type='youtube' link="https://www.youtube.com/watch?v=RMTRruhsqi8" title=""/>
        <Card type='twitter' link="https://x.com/100xDevs/status/1873341454451614124" title=""/>
        </div>
      </div>
    </div>
  )
}

export default App
