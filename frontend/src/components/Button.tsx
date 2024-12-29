
interface ButtonProps{
    varient:"primary"|"secondary"
    text:string
    startIcon?:any
    onClick?:()=>void
    
    
}

const varientClasses = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-400"
}

const defaultStyles = "px-4 py-2 rounded-md flex items-center gap-2"
export function Button ({varient,text,startIcon,onClick}:ButtonProps){
    return <button onClick={onClick} className={`${varientClasses[varient]} ${defaultStyles}}`}>{startIcon}{text}</button>
}