import { ReactElement } from "react";

export function SidebarItem({text,icon}):{
text:string,icon:ReactElement}{
    return(
        <div className="ml-6 flex gap-2 text-gray-700">
            {icon}{text}
        </div>
    )
}