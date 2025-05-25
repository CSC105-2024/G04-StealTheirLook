import React, { useState } from "react";
import { useParams } from "react-router-dom";

const OutfitChecklist = () => {
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
            image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Denim Style",
            tag: "Casual",
            userId: 1,
        },
        {
            savedPostId: "U2P2",
            image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Evening Elegance",
            tag: "Formal",
            userId: 3,
        },
    ]);

    const [checklist, setChecklist] = useState([
        {
            savedCheckId: "U1C4",
            brand: "ehehe",
            clothe: "ahaha",
            completed: false,
            savedPostId: "U1P2",
        },
        {
            savedCheckId: "U1C5",
            brand: "RRR",
            clothe: "TTT",
            completed: false,
            savedPostId: "U1P2",
        },
        {
            savedCheckId: "U1C6",
            brand: "VVV",
            clothe: "BBB",
            completed: false,
            savedPostId: "U1P2",
        },
    ]);

    const toggleSavePost = (postId) => {
        setSavedPosts((prev) => {
            const exists = prev.find((p) => p.savedPostId === postId);
            return exists
                ? prev.filter((p) => p.savedPostId !== postId)
                : [
                    ...prev,
                    {
                        savedPostId: postId,
                        originalPost: 0,
                        image: "https://via.placeholder.com/800x400",
                        title: "New Saved Post",
                        tag: "New",
                        userId: 1,
                    },
                ];
        });
    };

    const post = savedPosts.find((p) => p.savedPostId === id);
    const checklistItems = checklist.filter((item) => item.savedPostId === id);

    if (!id || !post) return <p className="text-center text-gray-500 my-10">Invalid outfit ID</p>;

    return (
        <div className="max-w-[1200px] mx-auto px-5 my-10 grid gap-12 grid-cols-1 lg:grid-cols-2">
            <div className="w-full rounded-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-auto object-cover rounded-lg" />
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                    <img
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                        src={profile.profilePicture}
                        alt="User Avatar"
                    />
                    <div>
                        <span className="font-medium text-base tracking-wide">{user.username}</span>
                    </div>
                </div>

                <h1 className="font-bodoni text-3xl font-normal tracking-wide mb-4">
                    {post.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">{post.tag}</span>
                </div>

                <div className="mb-6">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleSavePost(id);
                        }}
                        className={`px-6 py-3 rounded text-sm uppercase tracking-widest font-normal transition-all duration-300 ${
                            savedPosts.find((p) => p.savedPostId === id)
                                ? "bg-red-500 text-white"
                                : "bg-black text-white"
                        }`}
                    >
                        {savedPosts.find((p) => p.savedPostId === id)
                            ? "Remove from Collection"
                            : "Save to Collection"}
                    </button>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <h2 className="font-bodoni text-2xl font-normal mb-4">Items in this Look</h2>
                    {checklistItems.length > 0 ? (
                        <ul className="flex flex-col gap-4">
                            {checklistItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg"
                                >
                                    <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onChange={() =>
                                            setChecklist((prev) =>
                                                prev.map((it) =>
                                                    it.savedCheckId === item.savedCheckId
                                                        ? { ...it, completed: !it.completed }
                                                        : it
                                                )
                                            )
                                        }
                                        className="w-4 h-4 mt-3 accent-black"
                                    />
                                    <div>
                                        <div className="font-medium text-base">{item.brand}</div>
                                        <div className="text-gray-600 text-sm">{item.clothe}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-sm">No CheckList.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OutfitChecklist;
