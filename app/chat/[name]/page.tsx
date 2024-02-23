import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import getUser from "@/src/actions/getUser";
import Chat from "@/src/components/Chat";
import { notFound } from 'next/navigation'

export default function ChatPage({params}: {params: Params}){
    const user = getUser(decodeURIComponent(params.name))
    
    if(!user) return notFound()
    
    return (
        <Chat user={user} />
    );
}