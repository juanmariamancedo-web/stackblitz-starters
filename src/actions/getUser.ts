import { users } from "../database/db";

export default function getUser(name?: string){
    return users.find(user => user.name == name)
}