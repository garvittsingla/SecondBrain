import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return (
        <div className="h-screen bg-white border-r border-2 border-gray-600 w-72 absolute">
            <div className="mx-auto mt-4 font-semibold text-3xl font-mono flex items-center">
                <h1 className="mx-auto">Brainly</h1>
            </div>
            <div className="pt-4 pl-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon></TwitterIcon>}/>
                <div className="h-4">
                
                </div>
                <SidebarItem text="Youtube" icon={<YoutubeIcon></YoutubeIcon>}/>
            </div>
        </div>
    )
}