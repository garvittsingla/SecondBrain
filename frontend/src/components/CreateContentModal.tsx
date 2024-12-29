import {CrossIcon} from "../icons/CrossIcon"
import {Button} from "../components/Button"

export function CreateContentModal({ open, onclose }) {
    return (
        <div>
            {open && (
                <div className="w-full h-screen bg-slate-500 opacity-70 fixed top-0 left-0 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white opacity-100 p-4 rounded">
                            <div className="flex justify-end">
                                <div className="cursor-pointer" onClick={onclose}>
                                <CrossIcon/>
                                </div>
                            </div>
                            <div>
                                <Input type="text" placeholder={"Title"} />
                                <Input type="text" placeholder={"Link"} />
                            </div>
                           <div className="flex justify-center">
                            <Button varient="primary" text="Submit"/>
                           </div>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
function Input({onChange,placeholder}:{onChange:()=>void}){
    return(
        <div>
            <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2" onChange={onChange} />
        </div>
    )
}