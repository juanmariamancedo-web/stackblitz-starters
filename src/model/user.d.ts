import { Message } from "./message"

export type User = {
    name: string,
    avatar: string, 
    messages: Message[]
}