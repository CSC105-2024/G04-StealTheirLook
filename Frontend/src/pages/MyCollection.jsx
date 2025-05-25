import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyCollection = () => {
    const [activeTab, setActiveTab] = useState("saved");

    const [myPosts, setMyPosts] = useState([
        {
            postId: "U3P2",
            image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
        },
        {
            postId: "U4P2",
            image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Streetwear Style",
            tag: "Urban",
            userId: 1,
        }
    ]);

    const [savedPosts, setSavedPosts] = useState([
        {
            savedPostId: "U1P2",
            image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Saved Denim Look",
            tag: "Casual",
            userId: 2,
        },
        {
            savedPostId: "U2P2",
            image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Evening Elegance",
            tag: "Formal",
            userId: 3,
        }
    ]);

    const navigate = useNavigate();

    const renderPosts = (posts, isSaved = false) => (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {posts.map((post, index) => (
                <div
                    key={index}
                    className="border rounded p-4 cursor-pointer"
                    onClick={() => {
                        if (isSaved) {
                            navigate(`/OutfitChecklist/${post.savedPostId}`);
                        } else {
                            navigate(`/EditPage/${post.postId}`);
                        }
                    }}
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-[120px] object-cover rounded mb-3 lg:h-[300px]"
                    />
                    <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                    <p className="text-sm italic text-gray-600">{post.tag}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <div className="max-w-[1200px] mx-auto mt-6 mb-[40px] px-5 text-center">
                <h1 className="font-bodoni text-[36px] mb-[12px] tracking-[0.5px] font-normal">
                    My Collection
                </h1>
                <p className="font-cormorant text-[18px] italic text-[#555] tracking-[0.5px]">
                    Your saved outfits and created posts in one place.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto mb-[40px] px-5">
                {/* Tabs */}
                <div className="flex justify-center border-b border-[#eee] gap-4">
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`px-[30px] py-[14px] text-[14px] uppercase tracking-[1.5px] cursor-pointer ${
                            activeTab === "saved" ? "font-bold" : "font-normal"
                        }`}
                    >
                        Saved Outfits
                    </button>

                    <button
                        onClick={() => setActiveTab("posts")}
                        className={`px-[30px] py-[14px] text-[14px] uppercase tracking-[1.5px] cursor-pointer ${
                            activeTab === "posts" ? "font-bold" : "font-normal"
                        }`}
                    >
                        My Posts
                    </button>
                </div>

                {/* Content */}
                {activeTab === "saved"
                    ? renderPosts(savedPosts, true)
                    : renderPosts(myPosts)}
            </div>
        </div>
    );
};

export default MyCollection;
