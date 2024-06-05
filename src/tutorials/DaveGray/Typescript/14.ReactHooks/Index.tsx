import { useState, useEffect } from 'react'



interface User {
    id: number,
    username: string
}






export default function Index() {


    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<User[] | null>(null)

    console.log(users);
    



    useEffect(() => {
        console.log('mounting')
        console.log(users);
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(data => setUsers(data))


            return () => {
                console.log('unmounting')
            }
    }, [users])









    return (
        <div>Index</div>
    )
}
