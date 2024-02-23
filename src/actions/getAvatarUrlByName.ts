import { users } from "../database/db";

export default function getAvatarUrlByName(name: string | undefined){
    return users.find(user => user.name ==  name)?.avatar
}