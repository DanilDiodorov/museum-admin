import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from './MainPage'
import React from 'react'
import { ArtcilePage } from './ArticlePage'
import { AddArticlePage } from './AddArticlePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/article/add',
        element: <AddArticlePage />,
    },
    {
        path: '/article/:id',
        element: <ArtcilePage />,
    },
])

export const Pages: React.FC = () => {
    return <RouterProvider router={router} />
}
