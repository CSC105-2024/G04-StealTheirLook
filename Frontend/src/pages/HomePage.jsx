import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div>
            <div className="h-[30vh] bg-[url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&h=600&q=80')] bg-center bg-cover flex items-end p-[50px] mb-[15px] relative">
                <div className="bg-white/95 p-[40px] max-w-[520px] relative z-[1] shadow-[0_5px_25px_rgba(0,0,0,0.08)] rounded-[4px]" style={{display: "none"}}>
                    <h1 className="font-serif text-[38px] mb-[15px] tracking-[0.5px] font-normal leading-[1.2]">Discover Men's Style Inspiration</h1>
                    <p className="font-serif text-[18px] leading-[1.5] italic text-[#333]">Explore curated looks from fashion enthusiasts around the world. Get inspired and share your own personal style.</p>
                </div>
            </div>
            <div className="flex flex-wrap mx-auto px-3 text-center">
                <div className="flex flex-wrap justify-center mb-7.5">
                    <div className="bg-[#f2f2f2] px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border border-transparent tracking-[0.5px]">Sporty</div>
                    <div className="bg-[#f2f2f2] px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border border-transparent tracking-[0.5px]">Minimalist</div>
                    <div className="bg-[#f2f2f2] px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border border-transparent tracking-[0.5px]">Vintage</div>
                    <div className="bg-[#f2f2f2] px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border border-transparent tracking-[0.5px]">Casual</div>
                    <div className="bg-[#f2f2f2] px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border border-transparent tracking-[0.5px]">Formal</div>
                    <div className="bg-[#f2f2f2] px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border border-transparent tracking-[0.5px]">Streetwear</div>
                    <div className="bg-[#f2f2f2] px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border border-transparent tracking-[0.5px]">Luxury</div>
                    <div className="bg-[#f2f2f2] px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border border-transparent tracking-[0.5px]">Retro</div>
                    <div className="bg-[#f2f2f2] px-4.5 py-2.5 rounded-[25px] m-1 text-[12px] cursor-pointer transition-all duration-200 ease-in-out border border-transparent tracking-[0.5px]">Artsy</div>
                </div>
            </div>
        </div>

    );
}
export default HomePage;