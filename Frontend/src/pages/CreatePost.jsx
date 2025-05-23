import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [currentTag, setCurrentTag] = useState("");
    const [items, setItems] = useState([]);
    const [itemForm, setItemForm] = useState({ id: "", name: "", brand: "" });
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(""); // New: title state
    const navigate = useNavigate();

    const tags = [
        "Sporty",
        "Minimalist",
        "Vintage",
        "Casual",
        "Formal",
        "Streetwear",
        "Luxury",
        "Retro",
        "Artsy"
    ];

    const handleChange = async (e) => {
        const file = e.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        data.append("cloud_name", "drwqidr6o");

        const result = await fetch(
            "https://api.cloudinary.com/v1_1/drwqidr6o/image/upload",
            {
                method: "POST",
                body: data
            }
        );

        const img = await result.json();
        setFile(img.url);
    };

    const handleSelectChange = (e) => {
        setCurrentTag(e.target.value);
    };

    const handleItemChange = (e) => {
        const { name, value } = e.target;
        setItemForm((prev) => ({
            ...prev,
            [name]: value,
            id: Date.now().toString()
        }));
    };

    const addItem = (e) => {
        e.preventDefault();
        if (!itemForm.name || !itemForm.brand) return;
        setItems((prev) => [...prev, itemForm]);
        setItemForm({ id: "", name: "", brand: "" });
    };

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            alert("You must be logged in to create a post.");
            return;
        }

        if (!file || !title || !currentTag) {
            alert("Please provide a title, image, and tag.");
            return;
        }

        const newPost = {
            image: file,
            tag: currentTag,
            title: title,
            items: items,
            userEmail: currentUser.email // 🔑 Link post to user
        };

        const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
        existingPosts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(existingPosts));

        navigate("/mycollection");
    };

    return (
        <div>
            <div className="max-w-[800px] mx-auto mt-[30px] mb-[40px] px-[20px] text-center">
                <h1 className="font-[400] text-[36px] mb-[12px] tracking-[0.5px] font-bodoni">
                    Create a New Post
                </h1>
                <p className="text-[#555] italic font-cormorant text-[18px] tracking-[0.5px]">
                    Share fashion inspiration with the community.
                </p>
            </div>

            <form onSubmit={onSubmit} className="max-w-[800px] mx-auto px-[20px]">
                {/* Post Title */}
                <div className="mb-[30px]">
                    <label className="block mb-[10px] text-[13px] uppercase tracking-[1px] text-[#333] font-medium">
                        POST TITLE
                    </label>
                    <input
                        className="w-full px-[15px] py-[12px] border border-[#ddd] rounded text-[15px]"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Minimalist Streetwear"
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-[30px]">
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleChange}
                        style={{ display: "none" }}
                    />
                    <div
                        onClick={() => document.getElementById("fileInput").click()}
                        className="cursor-pointer border border-dashed border-[#ccc] p-[14px] text-center text-[#777] text-[13px] tracking-[1px] rounded"
                    >
                        {file ? "Change Image" : "Upload Image"}
                    </div>
                    {file && (
                        <img
                            src={file}
                            alt="Uploaded"
                            className="w-[500px] h-[500px] mt-4 border border-dotted object-cover"
                        />
                    )}
                </div>

                {/* Tag Selection */}
                <div className="mb-[30px]">
                    <label className="block mb-[10px] text-[13px] uppercase tracking-[1px] text-[#333] font-medium">
                        TAG
                    </label>
                    <select
                        id="post-tag"
                        className="w-full border px-[12px] py-[10px] rounded"
                        value={currentTag}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select a tag</option>
                        {tags.map((tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Clothing Items */}
                <div className="mb-[30px]">
                    <label className="block mb-[10px] text-[13px] uppercase tracking-[1px] text-[#333] font-medium">
                        CLOTHING ITEMS
                    </label>
                    <div className="border border-[#eee] rounded p-[25px] mb-[20px]">
                        <div className="mb-[20px]">
                            <label className="block mb-[8px] text-[13px] uppercase tracking-[1px] text-[#333] font-medium">
                                ITEM NAME
                            </label>
                            <input
                                className="w-full px-[15px] py-[12px] border border-[#ddd] rounded text-[15px]"
                                type="text"
                                name="name"
                                value={itemForm.name}
                                onChange={handleItemChange}
                            />
                        </div>
                        <div className="mb-[20px]">
                            <label className="block mb-[8px] text-[13px] uppercase tracking-[1px] text-[#333] font-medium">
                                ITEM BRAND
                            </label>
                            <input
                                className="w-full px-[15px] py-[12px] border border-[#ddd] rounded text-[15px]"
                                type="text"
                                name="brand"
                                value={itemForm.brand}
                                onChange={handleItemChange}
                            />
                        </div>
                        <button
                            onClick={addItem}
                            className="bg-black text-white px-[20px] py-[10px] text-sm rounded uppercase tracking-wider"
                        >
                            Add Item
                        </button>
                    </div>

                    {/* Render Added Items */}
                    <ul>
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between items-center mb-2 p-2 border rounded"
                            >
                                <span>
                                    <strong>{item.name}</strong> — {item.brand}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 text-sm"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-[14px] bg-black text-white rounded text-[14px] uppercase tracking-[2px] transition-all duration-300"
                >
                    Submit Post
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
