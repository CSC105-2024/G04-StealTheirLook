import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user] = useState({ username: "b1" });
    const [profile] = useState({
        profilePicture:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    });

    const [savedPosts, setSavedPosts] = useState([
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
        },
    ]);

    const [checklist, setChecklist] = useState([
        { savedCheckId: "U1C4", brand: "ehehe", clothe: "ahaha", savedPostId: "U3P2" },
        { savedCheckId: "U1C5", brand: "RRR", clothe: "TTT", savedPostId: "U3P2" },
        { savedCheckId: "U1C6", brand: "VVV", clothe: "BBB", savedPostId: "U3P2" },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({ brand: "", clothe: "" });
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleEditClick = (item) => {
        setEditingId(item.savedCheckId);
        setEditForm({ brand: item.brand, clothe: item.clothe });
    };

    const handleSaveEdit = () => {
        setChecklist((prev) =>
            prev.map((item) =>
                item.savedCheckId === editingId
                    ? { ...item, brand: editForm.brand, clothe: editForm.clothe }
                    : item
            )
        );
        setEditingId(null);
    };

    const post = savedPosts.find((p) => p.postId === id);
    const checklistItems = checklist.filter((item) => item.savedPostId === id);

    if (!id || !post) return <p className="text-center my-10 text-gray-500">Invalid outfit ID</p>;

    const confirmDeletePost = () => {
        setSavedPosts((prev) => prev.filter((p) => p.postId !== id));
        setChecklist((prev) => prev.filter((item) => item.savedPostId !== id));
        setShowDeleteModal(false);
        navigate("/mycollection");
    };

    return (
        <div className="max-w-[1200px] mx-auto px-5 my-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <span className="font-medium text-base tracking-wide">{user.username}</span>
                </div>

                <h1 className="font-bodoni text-3xl font-normal tracking-wide mb-4">{post.title}</h1>

                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">{post.tag}</span>
                </div>

                <div className="mb-6">
                    <button
                        onClick={() => setShowDeleteModal(true)}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded text-sm uppercase tracking-wider transition"
                    >
                        Delete this Post
                    </button>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <h2 className="font-bodoni text-2xl font-normal mb-4">Items in this Look</h2>
                    {checklistItems.length > 0 ? (
                        <ul className="flex flex-col gap-4">
                            {checklistItems.map((item) => (
                                <li
                                    key={item.savedCheckId}
                                    className="border border-gray-200 p-4 rounded-lg"
                                >
                                    {editingId === item.savedCheckId ? (
                                        <div className="flex flex-col gap-2">
                                            <input
                                                type="text"
                                                value={editForm.brand}
                                                onChange={(e) =>
                                                    setEditForm((prev) => ({
                                                        ...prev,
                                                        brand: e.target.value,
                                                    }))
                                                }
                                                className="border p-2 rounded"
                                            />
                                            <input
                                                type="text"
                                                value={editForm.clothe}
                                                onChange={(e) =>
                                                    setEditForm((prev) => ({
                                                        ...prev,
                                                        clothe: e.target.value,
                                                    }))
                                                }
                                                className="border p-2 rounded"
                                            />
                                            <button
                                                onClick={handleSaveEdit}
                                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded self-start"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="font-medium text-base">{item.brand}</div>
                                                <div className="text-sm text-gray-600">{item.clothe}</div>
                                            </div>
                                            <button
                                                onClick={() => handleEditClick(item)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-xs rounded uppercase tracking-widest"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-sm">No CheckList.</p>
                    )}
                </div>
            </div>

            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
                        <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
                        <p className="mb-6">Are you sure you want to delete this post?</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={confirmDeletePost}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditPage;
