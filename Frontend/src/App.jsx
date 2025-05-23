import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage.jsx";
import Register from "./pages/Register.jsx";
import HomePage from "./pages/HomePage.jsx";
import MyCollection from "./pages/MyCollection.jsx";
import OutfitChecklist from "./pages/OutfitChecklist.jsx";
import OutfitDetail from "./pages/OutfitDetail.jsx";
import CreatePost from "./pages/CreatePost.jsx";

function App() {
    const [droppedDown, setDroppedDown] = React.useState(false);

    const drop = () => {
        if(!droppedDown) {
            document.getElementById("dropDown").style.display = "flex";
            setDroppedDown(true);
        }
        else {
            document.getElementById("dropDown").style.display = "none";
            setDroppedDown(false);
        }
    }

    return (
    <>
        <nav className="flex justify-center items-center px-[5%] py-5 border-b border-[#eee] sticky top-0 bg-white z-[100] shadow-[0_2px_10px_rgba(0,0,0,0.03)] gap-10">
            <div className="w-[content-max]">
                <a className="font-serif text-2xl uppercase">Steal His Look</a>
            </div>

            <div className="flex flex-row items-center justify-between ml-[1em] lg:hidden">
                <div className={"text-white text-xl flex flex-col content-evenly "}
                     onClick={() => {drop()}}
                >
                    <div className="w-10 h-[0.1em] my-1 bg-black"/>
                    <div className="w-10 h-[0.1em] my-1 bg-black"/>
                    <div className="w-10 h-[0.1em] my-1 bg-black"/>
                </div>

            </div>

            <div id="dropDown"
                 className="flex flex-col bg-white  shadow-lg pl-[2em] mt-[216px] absolute w-screen"
                 style={{display: "none"}}>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `uppercase my-[1em] text-sm hover:underline transition-all duration-200 ${
                            isActive ? 'text-lg font-bold' : ''
                        }`
                    }
                    onClick={() => {drop()}}

                >
                    Home
                </NavLink>
                <NavLink to="/MyCollection" className={({ isActive }) =>
                    `uppercase my-[1em] text-sm hover:underline transition-all duration-200 ${
                        isActive ? 'text-lg font-bold' : ''
                        }`
                    }
                         onClick={() => {drop()}}
                >
                    My Collection</NavLink>
                <NavLink to="/CreatePost" className={({ isActive }) =>
                    `uppercase my-[1em] text-sm hover:underline transition-all duration-200 ${
                        isActive ? 'text-lg font-bold' : ''
                        }`
                    }
                         onClick={() => {drop()}}
                >
                    Create Post</NavLink>
            </div>
            <div>
                <NavLink to="/profile" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </NavLink>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/MyCollection" element={<MyCollection/>} />
            <Route path="/CreatePost" element={<CreatePost/>} />
            <Route path="/Profile" element={<ProfilePage/>} />
        </Routes>
    </>
  )
}

export default App
