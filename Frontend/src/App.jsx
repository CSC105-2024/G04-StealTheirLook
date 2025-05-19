import {NavLink, Route, Routes} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage.jsx";
import Register from "./pages/Register.jsx";
import HomePage from "./pages/HomePage.jsx";
import MyCollection from "./pages/MyCollection.jsx";
import OutfitChecklist from "./pages/OutfitChecklist.jsx";
import OutfitDetail from "./pages/OutfitDetail.jsx";
import './App.css'

function App() {

  return (
    <>
        <nav className = "flex justify-center items-center px-[5%] py-5 border-b border-[#eee] sticky top-0 bg-white z-[100] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-center w-full max-w-[1200px]">
                <a className="font-bold text-[28px] tracking-[2px] uppercase no-underline text-black font-[Bodoni_Moda,serif]">Steal
                    His Look</a>
                <div className="flex justify-center gap-[30px]">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className="user-actions">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default App
