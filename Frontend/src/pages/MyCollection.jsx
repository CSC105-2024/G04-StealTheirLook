import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import OutfitDetail from "./OutfitDetail.jsx";

const MyCollection = () => {
    const [activeTab, setActiveTab] = useState("saved");
    const [myPosts, setMyPosts] = useState([
        {
            "postId": 2,
            "image": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "title": "Classic Denim Look",
            "tag": "Casual",
            "userId": 1,
            "checkList": [
                {
                    "savedCheckId": "U1C4",
                    "originalCheck": 4,
                    "brand": "ehehe",
                    "clothe": "ahaha",
                    "completed": false,
                    "savedPostId": "U1P2"
                },
                {
                    "savedCheckId": "U1C5",
                    "originalCheck": 5,
                    "brand": "RRR",
                    "clothe": "TTT",
                    "completed": false,
                    "savedPostId": "U1P2"
                },
                {
                    "savedCheckId": "U1C6",
                    "originalCheck": 6,
                    "brand": "VVV",
                    "clothe": "BBB",
                    "completed": false,
                    "savedPostId": "U1P2"
                }
            ]
        },
        {
            "postId": 3,
            "image": "img2",
            "title": "G",
            "tag": "F",
            "userId": 1,
            "checkList": [
                {
                    "savedCheckId": "U1C4",
                    "originalCheck": 4,
                    "brand": "ehehe",
                    "clothe": "ahaha",
                    "completed": false,
                    "savedPostId": "U1P2"
                },
                {
                    "savedCheckId": "U1C5",
                    "originalCheck": 5,
                    "brand": "RRR",
                    "clothe": "TTT",
                    "completed": false,
                    "savedPostId": "U1P2"
                },
                {
                    "savedCheckId": "U1C6",
                    "originalCheck": 6,
                    "brand": "VVV",
                    "clothe": "BBB",
                    "completed": false,
                    "savedPostId": "U1P2"
                }
            ]
        }
    ]);


    const navigate = useNavigate();

    const getUsers = async () => {

    }

    useEffect(() => {
        // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        // const allPosts = JSON.parse(localStorage.getItem("posts")) || [];
        //
        // if (currentUser) {
        //     const userPosts = allPosts.filter(post => post.userEmail === currentUser.email);
        //     setMyPosts(userPosts);
        // }
    }, []);

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
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                        {myPosts.map((post, index) => (
                            <div key={index} className="border rounded p-4" onClick={() => {
                                const query = new URLSearchParams({
                                    image: post.image,
                                    title: post.title,
                                    tag: post.tag,
                                    checkList: JSON.stringify(post.checkList ?? [])
                                }).toString();
                                navigate(`/OutfitChecklist/${post.postId}?${query}`);
                            }}>
                                <img src={post.image} alt="Post" className="w-full h-[300px] object-cover rounded mb-3" />
                                <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                                <p className="text-sm italic text-gray-600">{post.tag}</p>
                                {/*make function get username and return it*/}
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default MyCollection;
