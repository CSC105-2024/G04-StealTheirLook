import { useParams } from "react-router-dom";
import { useState } from "react";

const OutfitDetail = () => {
    const { id } = useParams();

    const [user] = useState({
        username: "b1",
    });

    const [profile] = useState({
        profilePicture:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    });

    const [savedPosts, setSavedPosts] = useState([
        {
            savedPostId: "U1P2",
            originalPost: "2",
            image:
                "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
            title: "Stylish Jacket",
            tag: "Casual",
            userId: 1,
        },
    ]);

    const [checklist, setChecklist] = useState([
        {
            savedCheckId: "U1C4",
            originalCheck: 4,
            brand: "ehehe",
            clothe: "ahaha",
            completed: false,
            savedPostId: "U1P2",
        },
        {
            savedCheckId: "U1C5",
            originalCheck: 5,
            brand: "RRR",
            clothe: "TTT",
            completed: false,
            savedPostId: "U1P2",
        },
        {
            savedCheckId: "U1C6",
            originalCheck: 6,
            brand: "VVV",
            clothe: "BBB",
            completed: false,
            savedPostId: "U1P2",
        },
    ]);

    // Find current post by id param (matching originalPost)
    const currentPost = savedPosts.find((post) => post.originalPost === id);

    if (!id || !currentPost) return <p>Invalid outfit ID</p>;

    const isSaved = savedPosts.some((post) => post.originalPost === id);

    const toggleSavePost = (postId) => {
        if (isSaved) {
            setSavedPosts((prev) =>
                prev.filter((post) => post.originalPost !== postId)
            );
        } else {
            // For demo, add a dummy post or handle your save logic here
            setSavedPosts((prev) => [
                ...prev,
                {
                    savedPostId: `U1P${prev.length + 1}`,
                    originalPost: postId,
                    image:
                        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
                    title: "New Saved Post",
                    tag: "NewTag",
                    userId: 1,
                },
            ]);
        }
    };

    return (
        <div>
            <div className="max-w-[1200px] mx-auto my-10 px-5 gap-12 lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="w-full rounded-lg overflow-hidden">
                    <img src={currentPost.image} alt={currentPost.title} />
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center mt-5 gap-4 mb-8">
                        <img
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                            src={profile.profilePicture}
                            alt="User Avatar"
                        />
                        <div>
              <span className="font-medium text-lg tracking-wide">
                {user.username}
              </span>
                        </div>
                    </div>

                    <h1 className="font-bodoni text-3xl mb-4 leading-tight tracking-wide">
                        {currentPost.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-gray-200 px-3 py-1 rounded text-sm">
              {currentPost.tag}
            </span>
                    </div>

                    <div className="flex gap-4 mb-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleSavePost(id);
                            }}
                            className={`px-6 py-3 rounded uppercase tracking-widest font-normal transition-colors duration-300 cursor-pointer text-white ${
                                isSaved ? "bg-red-500" : "bg-black"
                            }`}
                        >
                            {isSaved ? "Remove from Collection" : "Save to Collection"}
                        </button>
                    </div>

                    <div className="mt-5 border-t border-gray-200 pt-7">
                        <h2 className="font-bodoni text-2xl mb-5 font-normal">
                            Items in this Look
                        </h2>
                        {checklist.length > 0 ? (
                            <ul className="flex flex-col gap-5">
                                {checklist.map((item) => (
                                    <li
                                        key={item.savedCheckId}
                                        className="flex flex-col p-4 border border-gray-200 rounded-lg transition-transform duration-300 ease-in-out"
                                    >
                                        <div className="font-medium mb-1 text-lg">{item.brand}</div>
                                        <div className="text-gray-600 text-sm">{item.clothe}</div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center w-full text-gray-500">No CheckList.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutfitDetail;
