import React, { useState } from 'react'




type User = {
    id: number
    name: string
}

const initialUsers: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Carla' },
    { id: 4, name: 'Dave' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Henry' },
    { id: 9, name: 'Ivy' },
    { id: 10, name: 'Jack' },

]











export default function KeysAndList() {

    const [users, setUsers] = useState<User[]>(initialUsers) // Array<User>(initialUsers)



    const handleRemoveUser = (id: number) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
    }






    return (
        <div
            className="flex flex-col gap-3"
        >
            {users.map(user => (
                <div
                    key={user.id}
                    className="flex gap-3 items-center"
                >
                    <button
                        className="text-xl bg-blue-500 text-white px-3 py-2 rounded-md"
                        onClick={() => handleRemoveUser(user.id)}
                    >
                        {user.name}
                    </button>


                </div>
            ))}

        </div >
    )
}
