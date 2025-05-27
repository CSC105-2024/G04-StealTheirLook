import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMe, getUserPost, getSavedPost } from "./API";

const MyCollection = () => {
    const [activeTab, setActiveTab] = useState("saved");
    const [myPosts, setMyPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const { success, data } = await getMe();
            if (!success) {
                navigate('/login');
                return;
            }
            setUser(data);
            await fetchUserContent(data.id);
        };

        fetchUserData();
    }, [navigate]);

    const fetchUserContent = async (userId) => {
        setLoading(true);

        // Fetch user's posts
        const { success: postsSuccess, data: postsData } = await getUserPost(userId);
        if (postsSuccess && postsData) {
            setMyPosts(postsData);
        }

        // Fetch saved posts
        const { success: savedSuccess, data: savedData } = await getSavedPost(userId);
        if (savedSuccess && savedData) {
            setSavedPosts(savedData);
            console.log(savedData);
        }

        setLoading(false);
    };

    const renderPosts = (posts, isSaved = false) => {
        if (posts.length === 0) {
            return (
                <div className="text-center py-10 text-gray-500">
                    <p>{isSaved ? "You haven't saved any outfits yet." : "You haven't created any posts yet."}</p>
                    {!isSaved && (
                        <button
                            onClick={() => navigate('/createpost')}
                            className="mt-4 px-6 py-2 bg-black text-white rounded"
                        >
                            Create Your First Post
                        </button>
                    )}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {posts.map((post) => (
                    <div
                        key={isSaved ? post.savedPostId : post.postId}
                        className="border rounded p-4 cursor-pointer hover:shadow-lg transition-shadow"
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
    };

    if (loading) {
        return (
            <div className="max-w-[1200px] mx-auto mt-6 mb-[40px] px-5 text-center">
                <h1 className="font-bodoni text-[36px] mb-[12px] tracking-[0.5px] font-normal">
                    My Collection
                </h1>
                <div className="py-10">
                    <p>Loading your collection...</p>
                </div>
            </div>
        );
    }

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
                        className={`px-[30px] py-[14px] text-[14px] uppercase tracking-[1.5px] cursor-pointer transition-colors ${
                            activeTab === "saved"
                                ? "font-bold border-b-2 border-black"
                                : "font-normal hover:text-gray-600"
                        }`}
                    >
                        Saved Outfits
                    </button>

                    <button
                        onClick={() => setActiveTab("posts")}
                        className={`px-[30px] py-[14px] text-[14px] uppercase tracking-[1.5px] cursor-pointer transition-colors ${
                            activeTab === "posts"
                                ? "font-bold border-b-2 border-black"
                                : "font-normal hover:text-gray-600"
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