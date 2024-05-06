import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProfilePage() {


    const { profileId } = useParams<{ profileId: string}>()



    return (
        <div
            className="flex flex-col gap-3"
        >
            <span>Profile Page</span>
            <span className="font-bold">{profileId}</span>
        </div>
    )
}
