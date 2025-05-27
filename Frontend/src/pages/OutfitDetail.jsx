import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    getMe,
    getPostImage,
    getPostTitle,
    getPostTag,
    getPostChecklist,
    createSavedPost,
    deleteSavedPost,
    isSaved
} from "./API";

const OutfitDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);
    const [postOwner, setPostOwner] = useState(null);
    const [checklist, setChecklist] = useState([]);
    const [postIsSaved, setPostIsSaved] = useState(false);
    const [savedPostId, setSavedPostId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Check authentication
            const { success: authSuccess, data: userData } = await getMe();
            if (!authSuccess) {
                navigate('/login');
                return;
            }
            setUser(userData);

            // Fetch post data
            try {
                const [imageRes, titleRes, tagRes, checklistRes] = await Promise.all([
                    getPostImage(id),
                    getPostTitle(id),
                    getPostTag(id),
                    getPostChecklist(id)
                ]);

                // Log API responses to debug if needed
                console.log("OutfitDetail API responses:", { imageRes, titleRes, tagRes, checklistRes });

                if (imageRes.success && titleRes.success && tagRes.success) {
                    // Set post data
                    setPost({
                        postId: id,
                        // imageRes.data is an object containing image, userId, username, profilePicture
                        image: imageRes.data.image || "",
                        // titleRes.data is directly the title string
                        title: titleRes.data || "",
                        // tagRes.data is directly the tag string
                        tag: tagRes.data || "",
                    });

                    // Set post owner
                    setPostOwner({
                        id: imageRes.data.userId,
                        username: imageRes.data.username,
                        profilePicture: imageRes.data.profilePicture || "https://via.placeholder.com/100"
                    });

                    // Set checklist
                    if (checklistRes.success) {
                        // checklistRes.data is already an array of checklist items
                        setChecklist(Array.isArray(checklistRes.data) ? checklistRes.data : []);
                    } else {
                        console.error("Failed to fetch checklist data:", checklistRes.error);
                        setChecklist([]);
                    }

                    // Check if post is saved
                    const { success: savedSuccess, data: savedData } = await isSaved(userData.id, id);
                    if (savedSuccess) {
                        setPostIsSaved(savedData.isSaved);
                        setSavedPostId(savedData.savedPostId);
                    } else {
                        console.error("Failed to check if post is saved:", savedData?.error);
                        setPostIsSaved(false);
                        setSavedPostId(null);
                    }
                } else {
                    // Post not found or error
                    setPost(null);
                    console.error("Failed to fetch all post details (image, title, tag):", { imageRes, titleRes, tagRes });
                }
            } catch (error) {
                console.error("Error fetching post details:", error);
                setPost(null);
            }

            setLoading(false);
        };

        fetchData();
    }, [id, navigate]);

    const toggleSavePost = async () => {
        if (!user || !user.id) {
            // IMPORTANT: Replace alert with a custom modal UI.
            alert("You must be logged in to save posts.");
            navigate('/login');
            return;
        }

        if (postIsSaved) {
            // Remove from saved
            try {
                const { success } = await deleteSavedPost({ savedPostId });
                if (success) {
                    setPostIsSaved(false);
                    setSavedPostId(null);
                } else {
                    // IMPORTANT: Replace alert with a custom modal UI.
                    alert("Failed to remove from collection");
                }
            } catch (error) {
                console.error("Error removing saved post:", error);
                // IMPORTANT: Replace alert with a custom modal UI.
                alert("An error occurred while removing the post.");
            }
        } else {
            // Add to saved
            try {
                const { success, data } = await createSavedPost({
                    postId: id,
                    userId: user.id
                });

                if (success && data) {
                    setPostIsSaved(true);
                    setSavedPostId(data.savedPostId);
                    console.log(data)
                } else {
                    // IMPORTANT: Replace alert with a custom modal UI.
                    alert("Failed to save to collection");
                }
            } catch (error) {
                console.error("Error saving post:", error);
                // IMPORTANT: Replace alert with a custom modal UI.
                alert("An error occurred while saving the post.");
            }
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
                <p>This outfit is no longer available or could not be found.</p>
                <button
                    onClick={() => navigate('/')}
                    className="mt-4 px-4 py-2 bg-black text-white rounded text-sm"
                >
                    Return to Home
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="max-w-[1200px] mx-auto my-10 px-5 gap-12 lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center mt-5 gap-4 mb-8">
                        {postOwner && (
                            <>
                                <img
                                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                                    src={postOwner.profilePicture}
                                    alt="User Avatar"
                                />
                                <div>
                                    <span className="font-medium text-lg tracking-wide">
                                        {postOwner.username}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>

                    <h1 className="font-bodoni text-3xl mb-4 leading-tight tracking-wide">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                            {post.tag}
                        </span>
                    </div>

                    <div className="flex gap-4 mb-4">
                        <button
                            onClick={toggleSavePost}
                            className={`px-6 py-3 rounded uppercase tracking-widest font-normal transition-colors duration-300 cursor-pointer text-white ${
                                postIsSaved ? "bg-red-500 hover:bg-red-600" : "bg-black hover:bg-gray-800"
                            }`}
                        >
                            {postIsSaved ? "Remove from Collection" : "Save to Collection"}
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
                                        key={item.checkId}
                                        className="flex flex-col p-4 border border-gray-200 rounded-lg transition-transform duration-300 ease-in-out hover:border-gray-300"
                                    >
                                        <div className="font-medium mb-1 text-lg">{item.clothe}</div>
                                        <div className="text-gray-600 text-sm">{item.brand}</div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center w-full text-gray-500">No items in this look.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutfitDetail;
