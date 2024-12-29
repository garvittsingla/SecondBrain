import { ShareIcon } from "../icons/ShareIcon";
interface CardProps{
    title:string,
    link:string,
    type:"youtube"|"twitter"
}
export function Card({title,link,type}:CardProps){
    return (
        <div className="bg-white min-h-48 p-4 max-w-72 border rounded-md  outline-slate-200">
            <div className="flex justify-between">
                <div className="flex items-center gap-2"> <ShareIcon/>Project Ideas</div>
                <div className="flex items-center gap-2"> <a href={link} target="_blank"><ShareIcon/></a><ShareIcon/></div>
            </div>
            <div className="w-60 mt-2">
                {type === "youtube" && <iframe className="w-full h-40" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type==="twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com","twitter.com")}></a> 
                </blockquote>}
            </div>
        </div>
    )
}