import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <div>
            404 Not Found
            <Link
            className="text-blue-500" 
            to="/">
                Go Home</Link>
        </div>
    )
}
