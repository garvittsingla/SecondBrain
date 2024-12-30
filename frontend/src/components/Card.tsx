import { ShareIcon } from "../icons/ShareIcon";
interface CardProps{
    title:string,
    link:string,
    type:"Youtube"|"Twitter"
}
export function Card({title,link,type}:CardProps){
    let final = link.toString()
    return (
        <div className="bg-white min-h-48 p-4 max-w-72 border rounded-md  outline-slate-200">
            <div className="flex justify-between">
                <div className="flex items-center gap-2"> <ShareIcon/>{title}</div>
                <div className="flex items-center gap-2"> <a href={link} target="_blank"><ShareIcon/></a><ShareIcon/></div>
            </div>
            <div className="w-60 mt-2">
            {type === "Youtube"&& (
                
                <iframe className="w-full" src={final.replace('https://youtu.be/', 'https://www.youtube.com/embed/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerFolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                )}

                {type==="Twitter" && <blockquote className="twitter-tweet">
                    <a href={final.replace("x.com","twitter.com")}></a> 
                </blockquote>}
                {final.replace("x.com","twitter.com")}
            </div>
        </div>  
    )
}