import React from 'react'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilesPage from './pages/ProfilesPage'
import Page404 from './pages/Page404'
import ProfilePage from './pages/ProfilePage'




const router = createBrowserRouter([

    {
        path: "/",
        element: <HomePage />,
        errorElement: <Page404 />,

    },
    {
        path: "/profiles",
        element: <ProfilesPage />,
        children: [
            {
                path: "/profiles/:profileId", 
                element: <ProfilePage />
             }
         
        ]
    },
   
])


export default function ReactRouter() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
