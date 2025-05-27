import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    getMe,
    getSavedPostImage,
    getSavedPostTitle,
    getSavedPostTag,
    getSavedPostChecklist,
    deleteSavedPost,
    updateCheck
} from "./API";

const OutfitChecklist = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);
    const [checklist, setChecklist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { success: authSuccess, data: userData } = await getMe();
            if (!authSuccess) {
                navigate('/login');
                return;
            }
            setUser(userData);

            try {
                const [imageRes, titleRes, tagRes, checklistRes] = await Promise.all([
                    getSavedPostImage(id),
                    getSavedPostTitle(id),
                    getSavedPostTag(id),
                    getSavedPostChecklist(id)
                ]);

                // This console.log is very important for debugging!
                // It will show what the frontend actually received from the API.
                console.log("API responses (from frontend):", { imageRes, titleRes, tagRes, checklistRes });

                // Check if all primary data fetches were successful
                if (imageRes.success && titleRes.success && tagRes.success) {
                    setPost({
                        savedPostId: id,
                        // FIX APPLIED HERE: Directly access data as backend sends strings/arrays directly
                        // If imageRes.data is null/undefined, it will fallback to an empty string.
                        image: imageRes.data || "",
                        title: titleRes.data || "",
                        tag: tagRes.data || "",
                        userId: userData.id // Assuming userId is part of the savedPost model, or from user data
                    });

                    if (checklistRes.success) {
                        // FIX APPLIED HERE: checklistRes.data is already the array of items.
                        // Ensure it's an array, otherwise default to empty array.
                        setChecklist(Array.isArray(checklistRes.data) ? checklistRes.data : []);
                    } else {
                        console.error("Failed to fetch checklist data:", checklistRes.error);
                        setChecklist([]); // Ensure checklist is an empty array on failure
                    }
                } else {
                    // If any of the main fetches fail, set post to null and display error message.
                    setPost(null);
                    console.error("Failed to fetch all saved post details (image, title, tag):", { imageRes, titleRes, tagRes });
                }
            } catch (error) {
                console.error("Error fetching saved post:", error);
                setPost(null);
            }

            setLoading(false);
        };

        fetchData();
    }, [id, navigate]);

    const toggleCheckItem = async (item) => {
        try {
            const { success } = await updateCheck({
                savedCheckId: item.savedCheckId,
                completed: !item.completed
            });

            if (success) {
                setChecklist(prev =>
                    prev.map(it =>
                        it.savedCheckId === item.savedCheckId
                            ? { ...it, completed: !it.completed }
                            : it
                    )
                );
            }
        } catch (error) {
            console.error("Error updating check item:", error);
        }
    };

    const removeSavedPost = async () => {
        // IMPORTANT: Replace window.confirm with a custom modal UI as alert/confirm are not supported in Canvas.
        if (!window.confirm("Are you sure you want to remove this post from your collection?")) return;

        try {
            const { success } = await deleteSavedPost({ savedPostId: id });
            if (success) {
                navigate('/mycollection');
            } else {
                // IMPORTANT: Replace alert with a custom message box UI.
                alert("Failed to remove post from collection");
            }
        } catch (error) {
            console.error("Error removing saved post:", error);
            // IMPORTANT: Replace alert with a custom message box UI.
            alert("An error occurred while removing the post");
        }
    };

    if (loading) {
        return (
            <div className="text-center py-10">
                <p>Loading outfit details...</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="text-center text-gray-500 my-10">
                <p>Invalid outfit ID or this outfit is no longer available.</p>
                <button
                    onClick={() => navigate('/mycollection')}
                    className="mt-4 px-4 py-2 bg-black text-white rounded text-sm"
                >
                    Return to My Collection
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-[1200px] mx-auto px-5 my-10 grid gap-12 grid-cols-1 lg:grid-cols-2">
            <div className="w-full rounded-lg overflow-hidden">
                {/* Ensure post.image is a string (URL) */}
                <img src={post.image} alt={post.title} className="w-full h-auto object-cover rounded-lg" />
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                    <img
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                        src={user?.profilePicture || "https://via.placeholder.com/100"}
                        alt="User Avatar"
                    />
                    <div>
                        {/* Ensure user?.username is a string */}
                        <span className="font-medium text-base tracking-wide">{user?.username}</span>
                    </div>
                </div>

                {/* Ensure post.title is a string */}
                <h1 className="font-bodoni text-3xl font-normal tracking-wide mb-4">
                    {post.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-6">
                    {/* Ensure post.tag is a string */}
                    <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">{post.tag}</span>
                </div>

                <div className="mb-6">
                    <button
                        onClick={removeSavedPost}
                        className="px-6 py-3 rounded text-sm uppercase tracking-widest font-normal transition-all duration-300 bg-red-500 text-white hover:bg-red-600"
                    >
                        Remove from Collection
                    </button>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <h2 className="font-bodoni text-2xl font-normal mb-4">Items in this Look</h2>
                    {checklist.length > 0 ? (
                        <ul className="flex flex-col gap-4">
                            {/* Ensure checklist is an array of objects with expected properties */}
                            {checklist.map((item) => (
                                <li
                                    key={item.savedCheckId}
                                    className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg transition-all duration-200 hover:border-gray-300"
                                >
                                    <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onChange={() => toggleCheckItem(item)}
                                        className="w-4 h-4 mt-3 accent-black"
                                    />
                                    <div className={item.completed ? "line-through text-gray-400" : ""}>
                                        <div className="font-medium text-base">{item.brand}</div>
                                        <div className="text-gray-600 text-sm">{item.clothe}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-sm">No items in this checklist.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OutfitChecklist;
