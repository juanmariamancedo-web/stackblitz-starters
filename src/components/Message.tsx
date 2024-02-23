import getAvatarUrlByName from "../actions/getAvatarUrlByName";
import Avatar from "./Avatar";

export default function Message(
    {text, 
    name
}: {text : string,
    name? : string
}){
    const src = getAvatarUrlByName(name) as string
 
    return(
        <div className={`flex items-center gap-4 ${!name && "justify-end"}`}>
            {name && <Avatar src={src} size={30} />}
            <div className={`${name? "bg-gray-100 max-w-[85%] self-start" : "border"} rounded-lg p-4 text-sm inline-block overflow-hidden break-words`}>
                {text}
            </div> 
        </ div>
    )
}