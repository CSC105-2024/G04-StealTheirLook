import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMe, updateProfilePicture, updateDisplayName, logoutUser } from "./API";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [joinDate, setJoinDate] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            const { success, data } = await getMe();
            if (!success) {
                navigate('/login');
                return;
            }

            setUsername(data.username);
            setDisplayName(data.displayName || data.username);
            setProfilePic(data.profilePicture || "https://via.placeholder.com/300");

            // Format join date
            if (data.createdAt) {
                const date = new Date(data.createdAt);
                setJoinDate(date.toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                }));
            } else {
                setJoinDate("Unknown");
            }

            setLoading(false);
        };

        fetchUserData();
    }, [navigate]);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        data.append("cloud_name", "drwqidr6o");

        try {
            setLoading(true);
            const result = await fetch(
                "https://api.cloudinary.com/v1_1/drwqidr6o/image/upload",
                {
                    method: "POST",
                    body: data
                }
            );

            const img = await result.json();

            if (img.url) {
                const { success } = await updateProfilePicture({ profilePicture: img.url });
                if (success) {
                    setProfilePic(img.url);
                } else {
                    alert("Failed to update profile picture");
                }
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Error uploading image");
        } finally {
            setLoading(false);
        }
    };

    const handleSaveProfile = async () => {
        try {
            setLoading(true);
            const { success } = await updateDisplayName({ displayName });

            if (success) {
                setIsEditing(false);
            } else {
                alert("Failed to update profile");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Error updating profile");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logoutUser();
            navigate('/login');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    if (loading && !isEditing) {
        return (
            <div className="text-center py-10">
                <p>Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="max-w-[800px] mx-auto p-[20px] bg-white rounded-[8px] shadow-[0_5px_30px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col md:flex-row items-center gap-[30px] mb-[40px]">
                <div className="relative">
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                        accept="image/*"
                    />
                    {!loading && (
                        <>
                            <img
                                src={profilePic}
                                alt={username}
                                className="w-[120px] h-[120px] rounded-full object-cover border-[5px] border-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] block"
                                onClick={() => document.getElementById("fileInput").click()}
                            />
                            {isEditing && (
                                <div
                                    className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full cursor-pointer"
                                    onClick={() => document.getElementById("fileInput").click()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="flex flex-1 flex-col">
                    {isEditing ? (
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="font-bodoni text-[32px] mb-2 tracking-[0.5px] w-full px-[15px] py-[12px] border border-[#ddd] rounded font-light transition duration-200 ease-in-out focus:border-black focus:shadow"
                        />
                    ) : (
                        <h1 className="font-bodoni text-[32px] mb-2 font-normal tracking-[0.5px] text-center md:text-left">{displayName}</h1>
                    )}

                    <p className="text-[16px] text-[#666] mb-[15px] font-cormorant italic tracking-[0.5px] text-center md:text-left">@{username}</p>

                    <div className="flex flex-col gap-[15px] mt-[30px] justify-start">
                        {isEditing ? (
                            <button
                                className="inline-block px-[25px] py-[12px] w-full md:w-[200px] rounded-[4px] cursor-pointer text-[13px] uppercase tracking-[1.5px] transition-all duration-300 ease font-normal bg-none border border-black text-black hover:bg-black hover:text-white"
                                onClick={handleSaveProfile}
                                disabled={loading}
                            >
                                {loading ? "Saving..." : "Save"}
                            </button>
                        ) : (
                            <div className="flex flex-col md:flex-row gap-3 w-full">
                                <button
                                    className="inline-block px-[25px] py-[12px] rounded-[4px] cursor-pointer text-[13px] uppercase tracking-[1.5px] transition-all duration-300 ease font-normal bg-none border border-black text-black hover:bg-black hover:text-white"
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit Profile
                                </button>
                                <button
                                    className="inline-block px-[25px] py-[12px] rounded-[4px] cursor-pointer text-[13px] uppercase tracking-[1.5px] transition-all duration-300 ease font-normal bg-transparent border border-gray-400 text-gray-500 hover:bg-gray-100 md:ml-auto"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="h-[1px] bg-gray-200 my-[30px]"></div>

            <div className="mt-7">
                <h2 className="font-bodoni text-[22px] mb-5 font-normal tracking-[0.5px]">Account Information</h2>
                <div className="mb-7">
                    <div className="flex flex-col md:flex-row mb-4 items-start md:items-center">
                        <div className="w-full md:w-[150px] text-[#777] font-normal text-sm tracking-[0.5px] uppercase mb-2 md:mb-0">Username</div>
                        <div className="flex-1 text-[15px]">{username}</div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-4 items-start md:items-center">
                        <div className="w-full md:w-[150px] text-[#777] font-normal text-sm tracking-[0.5px] uppercase mb-2 md:mb-0">Member Since</div>
                        <div className="flex-1 text-[15px]">{joinDate}</div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="font-bodoni text-[22px] mb-5 font-normal tracking-[0.5px]">Quick Links</h2>
                <div className="flex-col">
                    <div className="flex flex-wrap gap-2 mt-4">
                        <button
                            className="no-underline text-[#333] text-sm px-4 py-2 border border-[#eee] rounded transition-all hover:border-black hover:shadow flex items-center gap-2"
                            onClick={() => navigate('/CreatePost')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" className="w-4 h-4">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                            Create Post
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <button
                            className="no-underline text-[#333] text-sm px-4 py-2 border border-[#eee] rounded transition-all hover:border-black hover:shadow flex items-center gap-2"
                            onClick={() => navigate('/MyCollection')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                            My Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;