import { useEffect, useState } from "react";

const MyCollection = () => {
    const [activeTab, setActiveTab] = useState("saved");
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const allPosts = JSON.parse(localStorage.getItem("posts")) || [];

        if (currentUser) {
            const userPosts = allPosts.filter(post => post.userEmail === currentUser.email);
            setMyPosts(userPosts);
        }
    }, []);

    return (
        <div>
            <div className="max-w-[1200px] mx-auto mt-[60px] mb-[40px] px-5 text-center">
                <h1 className="font-bodoni text-[36px] mb-[12px] tracking-[0.5px] font-normal">
                    My Collection
                </h1>
                <p className="font-cormorant text-[18px] italic text-[#555] tracking-[0.5px]">
                    Your saved outfits and created posts in one place.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto mb-[40px] px-5">
                <div className="flex justify-center border-b border-[#eee] gap-4">
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`px-[30px] py-[14px] text-[14px] uppercase tracking-[1.5px] cursor-pointer relative ${
                            activeTab === "saved" ? "font-bold" : "font-normal"
                        }`}
                    >
                        Saved outfits
                    </button>

                    <button
                        onClick={() => setActiveTab("posts")}
                        className={`px-[30px] py-[14px] text-[14px] uppercase tracking-[1.5px] cursor-pointer relative ${
                            activeTab === "posts" ? "font-bold" : "font-normal"
                        }`}
                    >
                        My Posts
                    </button>
                </div>

                {/* Show user posts */}
                {activeTab === "posts" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                        {myPosts.length > 0 ? (
                            myPosts.map((post, index) => (
                                <div key={index} className="border rounded p-4">
                                    <img src={post.image} alt="Post" className="w-full h-[300px] object-cover rounded mb-3" />
                                    <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                                    <p className="text-sm italic text-gray-600">{post.tag}</p>
                                    <ul className="mt-2 text-sm text-gray-800">
                                        {post.items.map((item, idx) => (
                                            <li key={idx}>• {item.name} — {item.brand}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p className="text-center w-full text-gray-500">No posts yet.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCollection;
