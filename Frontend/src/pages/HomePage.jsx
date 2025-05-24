import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TAGS = [
    "Sporty",
    "Minimalist",
    "Vintage",
    "Casual",
    "Formal",
    "Streetwear",
    "Luxury",
    "Retro",
    "Artsy",
];

const HomePage = () => {
    const [myPosts, setMyPosts] = useState([
        {
            postId: 2,
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
            checkList: [
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
            ],
        },
        {
            postId: 3,
            image: "img2",
            title: "G",
            tag: "Vintage",
            userId: 1,
            checkList: [
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
            ],
        },
    ]);

    const [selectedTag, setSelectedTag] = useState(null);

    const navigate = useNavigate();

    // Filter posts by selectedTag if set
    const filteredPosts = selectedTag
        ? myPosts.filter((post) => post.tag === selectedTag)
        : myPosts;

    // Handle tag click: toggle filter on/off
    const onTagClick = (tag) => {
        setSelectedTag((prev) => (prev === tag ? null : tag));
    };

    return (
        <div>
            <div className="h-[30vh] bg-[url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&h=600&q=80')] bg-center bg-cover flex items-end p-[50px] mb-[15px] relative">
                <div className="bg-white/95 p-[40px] max-w-[520px] relative z-[1] shadow-[0_5px_25px_rgba(0,0,0,0.08)] rounded-[4px]" style={{display: "none"}}>
                    <h1 className="font-serif text-[38px] mb-[15px] tracking-[0.5px] font-normal leading-[1.2]">Discover Men's Style Inspiration</h1>
                    <p className="font-serif text-[18px] leading-[1.5] italic text-[#333]">Explore curated looks from fashion enthusiasts around the world. Get inspired and share your own personal style.</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mb-7.5">
                {TAGS.map((tag) => (
                    <div
                        key={tag}
                        onClick={() => onTagClick(tag)}
                        className={`px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border tracking-[0.5px]
              ${
                            selectedTag === tag
                                ? "bg-black text-white border-black"
                                : "bg-[#f2f2f2] border-transparent text-black"
                        }
            `}
                    >
                        {tag}
                    </div>
                ))}
            </div>

            {/* Posts grid */}
            <div className="grid grid-cols-2 gap-6 mt-2">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                        <div
                            key={index}
                            className="border rounded p-4 relative cursor-pointer"
                            onClick={() => {
                                const query = new URLSearchParams({
                                    image: post.image,
                                    title: post.title,
                                    tag: post.tag,
                                    checkList: JSON.stringify(post.checkList ?? []),
                                }).toString();
                                navigate(`/OutfitDetail/${post.postId}?${query}`);
                            }}
                        >
                            <img
                                src={post.image}
                                alt="Post"
                                className="w-full h-[150px] object-cover rounded mb-3"
                            />
                            <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                            <p className="text-sm italic text-gray-600">{post.tag}</p>
                        </div>
                    ))
                ) : (
                    <p className="flex-justtify-center text-center w-full text-gray-500">No posts yet.</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
