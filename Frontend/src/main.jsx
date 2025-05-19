import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import NotFound from "./pages/NotFound.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Register from "./pages/Register.jsx";
import HomePage from "./pages/HomePage.jsx";
import MyCollection from "./pages/MyCollection.jsx";
import OutfitChecklist from "./pages/OutfitChecklist.jsx";
import OutfitDetail from "./pages/OutfitDetail.jsx";
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },

            {
                path: '/MyCollection',
                element: <MyCollection/>,
            },

            {
                path: '/OutfitChecklist',
                element: <OutfitChecklist/>,
            },

            {
                path: '/OutfitDetail',
                element: <OutfitDetail/>,
            },

            {
                path: '/profile',
                element: <ProfilePage/>,
            },

            {
                path: '/OutfitDetail/:id',
                element: <OutfitDetail/>,
            }
        ]
    },

    {
        path: '/register',
        element: <Register />,
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
)
