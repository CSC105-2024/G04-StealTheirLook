import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("James Anderson");
    const [username, setUsername] = useState("james_style");
    const [profilePic, setProfilePic] = useState("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-[800px] mx-auto p-[20px] bg-white rounded-[8px] shadow-[0_5px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-[30px] mb-[40px]">
                <div className="relative">
                    <img
                        src={profilePic}
                        alt={name}
                        className="w-[120px] h-[120px] rounded-full object-cover border-[5px] border-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] block"
                    />
                    {isEditing && (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute bottom-0 left-0 w-full opacity-0 cursor-pointer"
                            title="Change profile picture"
                        />
                    )}
                </div>

                <div className="flex flex-1 flex-col">
                    {isEditing ? (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="font-bodoni text-[32px] mb-2 font-normal tracking-[0.5px]"
                        />
                    ) : (
                        <h1 className="font-bodoni text-[32px] mb-2 font-normal tracking-[0.5px]">{name}</h1>
                    )}

                    <p className="text-[16px] text-[#666] mb-[15px] font-cormorant italic tracking-[0.5px]">@{username}</p>

                    <div className="flex flex-col gap-[15px] mt-[30px]">
                        {isEditing ? (
                            <button
                                className="inline-block px-[25px] py-[12px] rounded-[4px] cursor-pointer text-[13px] uppercase tracking-[1.5px] transition-all duration-300 ease font-normal bg-none border border-black text-black"
                                onClick={() => setIsEditing(false)}
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                className="inline-block px-[25px] py-[12px] rounded-[4px] cursor-pointer text-[13px] uppercase tracking-[1.5px] transition-all duration-300 ease font-normal bg-none border border-black text-black"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit Profile
                            </button>
                        )}

                        <button
                            className="inline-block px-[25px] py-[12px] rounded-[4px] cursor-pointer text-[13px] uppercase tracking-[1.5px] transition-all duration-300 ease font-normal bg-transparent border border-gray-400 text-gray-500 ml-auto"
                            onClick={() => navigate('/Login')}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-[1px] bg-gray-200 my-[30px]"></div>

            <div className="mt-7">
                <h2 className="font-bodoni text-[22px] mb-5 font-normal tracking-[0.5px]">Account Information</h2>
                <div className="mb-7">
                    <div className="flex mb-4 items-center">
                        <div className="w-[150px] text-[#777] font-normal text-sm tracking-[0.5px] uppercase">Username</div>
                        <div className="flex-1 text-[15px]">{username}</div>
                    </div>
                    <div className="flex mb-4 items-center">
                        <div className="w-[150px] text-[#777] font-normal text-sm tracking-[0.5px] uppercase">Member Since</div>
                        <div className="flex-1 text-[15px]">January 2023</div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="font-bodoni text-[22px] mb-5 font-normal tracking-[0.5px]">Quick Links</h2>
                <div className="flex-col">
                    <div className="flex flex-wrap gap-2 mt-4">
                        <button
                            className="no-underline text-[#333] text-sm px-4 py-2 border border-[#eee] rounded transition-all flex items-center gap-2"
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
                            className="no-underline text-[#333] text-sm px-4 py-2 border border-[#eee] rounded transition-all duration-200 flex items-center gap-2"
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
