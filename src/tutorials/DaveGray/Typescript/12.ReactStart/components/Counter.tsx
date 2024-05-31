import { useState } from 'react'

export default function Counter() {


    const [count, setCount] = useState<number>(1)


    return (
        <>
            <h1>{count}</h1>

            <button
                onClick={() => setCount(prev => prev + 1)}>
                increment
            </button>
            <button
                onClick={() => setCount(prev => prev - 1)}>
                decrement
            </button>
        </>
    )
}
