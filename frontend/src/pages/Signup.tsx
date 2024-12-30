import {Input} from "../components/Input"
import {Button} from "../components/Button"
import { useRef } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Signup(){
    const navigate = useNavigate()
    const usernameRef = useRef<any>()
    const passwordRef = useRef<any>()
    async function signup(){
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        await axios.post(BACKEND_URL+"/api/v1/signup",{
                username,
                password
            
        })
        alert("You have signed up")
        navigate("/signin")
    }
    return(
        <div className="h-screen w-full bg-gray-200 flex items-center justify-center">
            <div className="bg-white rounded-lg border min-w-56 min-h-72 flex flex-col items-center justify-center gap-5">
                <Input reference={usernameRef} placeholder="Username"></Input>
                <Input reference={passwordRef} placeholder="Password"></Input>
                <div className="flex justify-center">
                <Button onClick={signup} varient="primary" text="submit"/>
                </div>
            </div>
        </div>
    )
}