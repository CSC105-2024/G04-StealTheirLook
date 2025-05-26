import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage.jsx";
import MyCollection from "./pages/MyCollection.jsx";
import OutfitChecklist from "./pages/OutfitChecklist.jsx";
import OutfitDetail from "./pages/OutfitDetail.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import App from './App.jsx';
import EditPage from "./pages/EditPage.jsx";
import './index.css';

// Protected route wrapper component
const ProtectedRoute = () => {
    // The authentication check is now handled in the App component
    // This component just provides the outlet for child routes
    return <Outlet />;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                // Group protected routes
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/CreatePost',
                        element: <CreatePost />,
                    },
                    {
                        path: '/MyCollection',
                        element: <MyCollection />,
                    },
                    {
                        path: '/OutfitChecklist/:id',
                        element: <OutfitChecklist />,
                    },
                    {
                        path: '/OutfitDetail/:id',
                        element: <OutfitDetail />,
                    },
                    {
                        path: '/profile',
                        element: <ProfilePage />,
                    },
                    {
                        path: '/EditPage/:id',
                        element: <EditPage />,
                    }
                ]
            }
        ]
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);