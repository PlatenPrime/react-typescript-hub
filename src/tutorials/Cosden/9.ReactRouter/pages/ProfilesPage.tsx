import React from 'react'

import { NavLink, Outlet } from 'react-router-dom';

export default function ProfilesPage() {

    const profiles = [1, 2, 3, 4, 5];




    return (
        <div
            className="flex flex-col gap-3"
        >
            {profiles.map(profile =>
                <NavLink 
                className={({ isActive }) => isActive ? "font-bold" : ""}
                key={profile} to={`/profiles/${profile}`}>Profile {profile}</NavLink>
            )}
            <Outlet />
        </div>
    )
}
