import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    getMe,
    getPostById, // Changed from getPost to getPostById
    getPostChecklist,
    deletePost,
    editCheckBrand,
    editCheckClothe
} from "./API";

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);
    const [checklist, setChecklist] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({ brand: "", clothe: "" });
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            // Get current user
            const { success: userSuccess, data: userData } = await getMe();
            if (!userSuccess) {
                navigate('/login');
                return;
            }
            setUser(userData);

            // Get post data using the new getPostById
            const { success: postSuccess, data: postData } = await getPostById(id); // Changed to getPostById
            if (!postSuccess || !postData) {
                setLoading(false);
                return;
            }
            setPost(postData);

            // Get checklist items
            const { success: checklistSuccess, data: checklistData } = await getPostChecklist(id);
            if (checklistSuccess && checklistData) {
                setChecklist(checklistData);
            }

            setLoading(false);
        };

        fetchData();
    }, [id, navigate]);

    const handleEditClick = (item) => {
        setEditingId(item.checkId);
        setEditForm({ brand: item.brand, clothe: item.clothe });
    };

    const handleSaveEdit = async () => {
        if (editingId) {
            // Update brand
            const brandResult = await editCheckBrand({
                checkId: editingId,
                brand: editForm.brand
            });

            // Update clothes
            const clotheResult = await editCheckClothe({
                checkId: editingId,
                clothe: editForm.clothe
            });

            if (brandResult.success && clotheResult.success) {
                // Update local state
                setChecklist(prev =>
                    prev.map(item =>
                        item.checkId === editingId
                            ? { ...item, brand: editForm.brand, clothe: editForm.clothe }
                            : item
                    )
                );
                setEditingId(null);
            } else {
                // IMPORTANT: Replace alert with a custom modal UI.
                alert("Failed to update item");
            }
        }
    };

    const confirmDeletePost = async () => {
        const { success } = await deletePost({ postId: id });
        if (success) {
            setShowDeleteModal(false);
            navigate("/mycollection");
        } else {
            // IMPORTANT: Replace alert with a custom modal UI.
            alert("Failed to delete post");
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (!post) {
        return <p className="text-center my-10 text-gray-500">Invalid outfit ID</p>;
    }

    return (
        <div className="max-w-[1200px] mx-auto px-5 my-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="w-full rounded-lg overflow-hidden">
                <img
                    src={post.image} // This should now correctly receive a string URL
                    alt={post.title}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                    <img
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                        src={user?.profilePicture || "https://via.placeholder.com/100"} // Added optional chaining
                        alt="User Avatar"
                    />
                    <span className="font-medium text-base tracking-wide">{user?.username}</span> {/* Added optional chaining */}
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
                    {checklist.length > 0 ? (
                        <ul className="flex flex-col gap-4">
                            {checklist.map((item) => (
                                <li
                                    key={item.checkId}
                                    className="border border-gray-200 p-4 rounded-lg"
                                >
                                    {editingId === item.checkId ? (
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
                                                <div className="font-medium text-base">{item.clothe}</div>
                                                <div className="text-sm text-gray-600">{item.brand}</div>
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
