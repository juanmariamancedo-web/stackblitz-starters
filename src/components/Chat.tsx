'use client'

import Message from "./Message"
import Avatar from "./Avatar"
import { FormEvent, useState } from "react"
import Sent from "../icons/Sent"
import useMessages from "../hooks/useMessages"
import { User } from "../model/user"

export default function Chat({user}:{user: User}){
    const [textInput, setTextInput] = useState("")
    
    const [messages, setMessages] = useMessages(user.messages)

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        setTextInput("")
        setMessages((messages)=>[...messages, {type: 'sent', text: textInput}])
    }

    return(
        <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden gap-4">
            <header className="flex items-center p-4 border-b space-x-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                    <Avatar size={40} src={user.avatar} />
                </span>
                <h1 className="text-xl font-bold">
                    {user.name}
                </h1>
            </header>
            <div className="flex flex-col p-4 overflow-hidden gap-4">
                {/* Messages */}
                {messages.length > 0 && <ul className="flex flex-col gap-4">
                    {messages.map((message, index)=>{
                        return(
                            <li key={`message#${index}`}>
                                <Message text={message.text} name={message.type == "recive"? user.name : undefined} />
                            </li>
                        )
                    })}
                </ul>}
                {/* send message */}
                <form className="flex items-center gap-4 border-t p-4" onSubmit={handleSubmit}>
                        <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 min-w-0"
                        placeholder="Digite sua mensagem aqui..."
                        value={textInput}
                        onChange={(e)=>setTextInput(e.target.value)}
                        />
                        <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full w-10 h-10"
                        type="submit"
                        >
                            <Sent />
                        </button>
                </form>
            </div>
      </div>
    )
}