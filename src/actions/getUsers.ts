import { users } from "../database/db"
import { User } from "../model/user"

export default function getUsers():User[]{
    return users
}