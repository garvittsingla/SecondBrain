import {Input} from "../components/Input"
import {Button} from "../components/Button"
import { useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export function Signin(){
    const usernameRef = useRef<any>()
    const passwordRef = useRef<any>()
    const navigate = useNavigate()
    async function signin(){
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

       const response = await axios.post(BACKEND_URL+"/api/v1/signin",{
                username,
                password
            
        })
        const jwt = response.data.token
        localStorage.setItem("token",jwt)
        navigate("/dashboard")
    }
    return(
        <div className="h-screen w-full bg-gray-200 flex items-center justify-center">
            <div className="bg-white rounded-lg border min-w-56 min-h-72 flex flex-col items-center justify-center gap-5">
                <Input reference={usernameRef} placeholder="Username"></Input>
                <Input reference={passwordRef} placeholder="Password"></Input>
                <div className="flex justify-center">
                <Button varient="primary" onClick={signin} text="submit"/>
                </div>
            </div>
        </div>
    )
}