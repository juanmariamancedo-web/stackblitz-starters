import { Message } from "../model/message"

export default function mapMessages(messagesInput: string[]): Message[]{
    return messagesInput.map(message=>{
        return({
            text: message,
            type: "recive"
        })
    })
}