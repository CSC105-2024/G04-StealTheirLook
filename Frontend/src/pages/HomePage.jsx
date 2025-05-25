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
    const [posts, setPosts] = useState([
        {
            postId: 2,
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
        },
        {
            postId: 2,
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
        },
        {
            postId: 2,
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
        },
        {
            postId: 2,
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
        },
        {
            postId: 2,
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
        },
        {
            postId: 2,
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
        },
        {
            postId: 2,
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
        },
        {
            postId: 2,
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Classic Denim Look",
            tag: "Casual",
            userId: 1,
        },
    ]);

    const [selectedTag, setSelectedTag] = useState([]);

    const navigate = useNavigate();
    // Handle tag click: toggle filter on/off
    const onTagClick = (selectTag) => {
        // tag is already in the list
        if(selectedTag.indexOf(selectTag) > -1) {
            setSelectedTag(selectedTag.filter(tag => tag !== selectTag));
        }
        else {
            setSelectedTag([...selectedTag, selectTag]);
        }
        console.log(selectedTag);
    };

    return (
        <div>
            <div className="h-[30vh] lg:h-[60vh] bg-[url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&h=600&q=80')] bg-center bg-cover flex items-end p-[50px] mb-[15px] relative">
                <div className="bg-white/95 p-[40px] max-w-[520px] z-[1] shadow-[0_5px_25px_rgba(0,0,0,0.08)] rounded-[4px] hidden lg:inline-block lg:mb-0">
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
                            selectedTag.indexOf(tag) > -1
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
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mt-2">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="border rounded p-4 relative cursor-pointer"
                        onClick={() => {
                            navigate(`/OutfitDetail/${post.postId}`);
                        }}
                    >
                        <img
                            src={post.image}
                            alt="Post"
                            className="w-full h-[150px] object-cover rounded mb-3 lg:h-[250px]"
                        />
                        <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                        <p className="text-sm italic text-gray-600">{post.tag}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
