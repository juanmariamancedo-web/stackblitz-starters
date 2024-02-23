import { User } from "../model/user";

export const users:User[] = [
    {
        name: "Sheba",
        avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Sheba&backgroundColor=b6e3f4",
        messages: [{
                text: "Hello, I am Sheba. What is you name?",
                type: "recive"
            },
            {
                text: "Hi. I am Juan, a Next developer",
                type: "sent"
            }
        ]
    },
    {
        name: "Pepper",
        avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Pepper&backgroundColor=b6e3f4",
        messages: [{
            text: "Hello, I am Pepper. What is you name?",
            type: "recive"
        }]
    },
    {
        name: "Harley",
        avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Harley&backgroundColor=b6e3f4",
        messages: [{
            text: "Hello, I am Harley. What is you name?",
            type: "recive"
        }]
    }
]