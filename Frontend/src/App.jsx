import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getMe } from "./pages/API.js";

function App() {
    const [droppedDown, setDroppedDown] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    // Check authentication on app load and route changes
    useEffect(() => {
        const checkAuth = async () => {
            // Skip auth check for public routes
            const publicRoutes = ['/login', '/register'];
            if (publicRoutes.includes(location.pathname)) {
                setLoading(false);
                return;
            }

            const { success, data } = await getMe();
            if (success) {
                setUser(data);
            } else if (!publicRoutes.includes(location.pathname)) {
                // If not authenticated and not on a public route, redirect to login
                navigate('/login');
            }
            setLoading(false);
        };

        checkAuth();
    }, [location.pathname, navigate]);

    // Auto close dropdown on route change
    useEffect(() => {
        const dropdown = document.getElementById("dropDown");
        if (dropdown) dropdown.style.display = "none";
        setDroppedDown(false);
    }, [location.pathname]);

    const toggleDropdown = () => {
        const dropdown = document.getElementById("dropDown");
        if (!droppedDown) {
            dropdown.style.display = "flex";
            setDroppedDown(true);
        } else {
            dropdown.style.display = "none";
            setDroppedDown(false);
        }
    };

    // Don't render nav for login/register pages
    const isAuthPage = ['/login', '/register'].includes(location.pathname);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            {!isAuthPage && (
                <nav className="flex justify-center lg:justify-between items-center px-[5%] py-5 border-b border-[#eee] sticky top-0 bg-white z-[100] shadow-[0_2px_10px_rgba(0,0,0,0.03)] gap-10">
                    <div className="w-[content-max]">
                        <NavLink to="/" className="font-serif text-2xl uppercase">
                            steal his look
                        </NavLink>
                    </div>

                    <div className="flex flex-row items-center justify-between ml-[1em] lg:hidden">
                        <div className="text-white text-xl flex flex-col content-evenly" onClick={toggleDropdown}>
                            <div className="w-10 h-[0.1em] my-1 bg-black" />
                            <div className="w-10 h-[0.1em] my-1 bg-black" />
                            <div className="w-10 h-[0.1em] my-1 bg-black" />
                        </div>
                    </div>
                    <div className="hidden lg:flex gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `uppercase my-[1em] text-sm hover:underline transition-all duration-200 ${
                                    isActive ? "text-lg font-bold" : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/MyCollection"
                            className={({ isActive }) =>
                                `uppercase my-[1em] text-sm hover:underline transition-all duration-200 ${
                                    isActive ? "text-lg font-bold" : ""
                                }`
                            }
                        >
                            My Collection
                        </NavLink>
                        <NavLink
                            to="/CreatePost"
                            className={({ isActive }) =>
                                `uppercase my-[1em] text-sm hover:underline transition-all duration-200 ${
                                    isActive ? "text-lg font-bold" : ""
                                }`
                            }
                        >
                            Create Post
                        </NavLink>
                    </div>

                    <div
                        id="dropDown"
                        className="flex flex-col bg-white shadow-lg pl-[2em] mt-[216px] absolute w-screen left-0"
                        style={{ display: "none" }}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `uppercase my-[1em] text-sm hover:underline transition-all duration-200 ${
                                    isActive ? "text-lg font-bold" : ""
                                }`
                            }
                            onClick={toggleDropdown}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/MyCollection"
                            className={({ isActive }) =>
                                `uppercase my-[1em] text-sm hover:underline transition-all duration-200 ${
                                    isActive ? "text-lg font-bold" : ""
                                }`
                            }
                            onClick={toggleDropdown}
                        >
                            My Collection
                        </NavLink>
                        <NavLink
                            to="/CreatePost"
                            className={({ isActive }) =>
                                `uppercase my-[1em] text-sm hover:underline transition-all duration-200 ${
                                    isActive ? "text-lg font-bold" : ""
                                }`
                            }
                            onClick={toggleDropdown}
                        >
                            Create Post
                        </NavLink>
                    </div>

                    <div className="flex items-center">
                        <NavLink to="/profile" className="flex items-center group relative">
                            {user?.profilePicture ? (
                                <img
                                    src={user.profilePicture}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full object-cover border border-gray-200"
                                />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="transition-all group-hover:scale-110"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            )}
                            <span className="hidden group-hover:block absolute top-full right-0 mt-1 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                {user?.displayName || user?.username || "Profile"}
                            </span>
                        </NavLink>
                    </div>
                </nav>
            )}

            {/* Renders nested routes from index.jsx */}
            <main className={isAuthPage ? "" : "min-h-screen p-6"}>
                <Outlet context={{ user }} />
            </main>

            {!isAuthPage && (
                <footer className="p-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Steal His Look
                </footer>
            )}
        </>
    );
}

export default App;