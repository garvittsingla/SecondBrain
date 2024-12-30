import '../App.css'
import {Button} from "../components/Button"
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import {CreateContentModal }from "../components/CreateContentModal.tsx"
import { useState } from 'react'
import axios from "axios"
import { Sidebar } from '../components/Sidebar.tsx'
import { useContent } from '../hooks/useContent.tsx'
import { BACKEND_URL } from '../config.tsx'
function Dashboard() {
  const [modalOpen,setModalOpen] = useState(false)
  const content = useContent() 
  return (
    <div>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-gray-100'>
      
      <CreateContentModal open={modalOpen} onclose={()=>{
        setModalOpen(false)
      }}/>
  
       <div className='flex items-end justify-end w-full gap-4 '>
       <Button onClick={()=>{setModalOpen(true)}} varient="primary" startIcon={<PlusIcon/>} text="Add content"></Button>
       <Button onClick={async ()=>{
        const resp = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
          share:true
        },{
          headers:{
            "Authorization": localStorage.getItem("token")
          }
        })
        const shareurl = `http://localhost:5173/share/${resp.data.hash}`
        alert(shareurl)
       }} varient="secondary" startIcon={<ShareIcon/>} text="Share"></Button>
       </div>
        <div className='flex gap-4 flex-wrap'> 
            
        {content.map(({title,link,type})=>
            console.log(title,link,type)
         )}
        {content.map(({title,link,type})=>
            <Card link={link} type={type} title={title}/>
         )} 
         <Card link="https://youtu.be/LDB4uaJ87e0?si=YIwB-3x34eGrNWPr" type="Youtube" title="garvitsingla"/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
