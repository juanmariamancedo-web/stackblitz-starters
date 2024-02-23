import { User } from "../model/user"
import Avatar from "./Avatar"
import Link from "next/link"

export default function SideNav({users}: {users: User[]}){
    return(
        <nav className="basis-1/4 shrink">
            <h2 className='text-lg font-semibold text-center p-4 border-b'>
                Chats
            </h2>
            <ul className="flex justify-center flex-wrap gap-2">
                {users.map((user, index) => {
                    return(
                    <li key={`chat#${index}`}>
                        <Link href={`/chat/${user.name}`} className='flex justify-between gap-4 p-4'>
                            <Avatar src={user.avatar} size={30} />
                            {user.name}
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}