import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { Message } from "../model/message"

export default function useMessages(messagesInput: Message[]): [Message[], Dispatch<SetStateAction<Message[]>>]{
    const [messages, setMessages] = useState<Message[]>(messagesInput)

    useEffect(()=>{
        setMessages(messagesInput)
    }, [messagesInput])

    return [messages, setMessages]
}