import {CrossIcon} from "../icons/CrossIcon"
import {Button} from "../components/Button"
import {Input} from "../components/Input"
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
enum contenttype {
    Youtube = "Youtube",
    Twitter = "Twitter"
}
export function CreateContentModal({ open, onclose }) {
    const titleRef = useRef<any>()
    const linkRef = useRef<any>()
    const [type,settype] = useState(contenttype.Youtube)
    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        },{headers:{
            "Authorization":localStorage.getItem("token")
    }})
        onclose()
    }
    return (
        <div>
            {open && (
                <div>
                <div className="w-full h-screen bg-slate-500 opacity-70 fixed top-0 left-0 flex justify-center">
                    
                </div>
                <div>
                <div className="flex flex-col justify-center z-10 absolute">
                        <span className="bg-white opacity-100 left-[150%]  p-4 relative rounded">
                            <div className="flex justify-end">
                                <div className="cursor-pointer" onClick={onclose}>
                                <CrossIcon/>
                                </div>
                            </div>
                            <div>
                                <Input reference={titleRef} type="text" placeholder="Title"/>
                                <Input reference={linkRef} type="text" placeholder="Link" />
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <Button text="Youtube" varient={type===contenttype.Youtube?"primary":"secondary"} onClick={()=>{
                                    settype(contenttype.Youtube)
                                }}></Button>
                                <Button text="Twitter" varient={type===contenttype.Twitter?"primary":"secondary"} onClick={()=>{
                                    settype(contenttype.Twitter)
                                }}></Button>
                            </div>
                           <div className="flex justify-center mt-5">
                            <Button onClick={addContent} varient="primary" text="Submit"/>
                           </div>
                        </span>
                    </div>
                </div>
                </div>)}
        </div>
    );
}
