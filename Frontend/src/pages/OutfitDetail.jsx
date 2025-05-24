import {useParams, useSearchParams} from "react-router-dom";

const OutfitDetail = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const image = searchParams.get("image");
    const tag = searchParams.get("tag");
    const title = searchParams.get("title");
    const checkList = searchParams.get("checkList");
    const items = checkList ? JSON.parse(checkList) : [];



    if (!id) return <p>Invalid outfit ID</p>;

    return (
        <div>
            <div className="max-w-[1200px] mx-auto my-[10px] px-[20px] gap-[50px]">
                <div className="w-full rounded-[8px] overflow-hidden">
                    <img src={image} alt={title} />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center mt-5 gap-[15px] mb-[30px]">
                        <img
                            className="w-[40px] h-[40px] rounded-full object-cover border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                            alt="User Avatar"/>
                        <div className="flex flex-col">
                            <span className="font-medium text-[16px] tracking-[0.5px]">james_style</span>
                            <span className="text-[12px] text-[#777] font-cormorant italic">Posted 3 days ago</span>
                        </div>

                    </div>
                    <h1 className="font-bodoni text-[32px] mb-[15px] leading-[1.2] font-normal tracking-[0.5px]"> {title} </h1>

                    <div className="flex flex-wrap gap-[10px] mb-[30px]">
                        <span>{tag}</span>
                    </div>

                    <div className="flex gap-[15px] mb-[10px]">
                        <button
                            className="bg-black text-white border-none px-[25px] py-[12px] rounded cursor-pointer text-[13px] uppercase tracking-[2px] transition-all duration-300 font-normal">Save
                            to Collection
                        </button>
                    </div>
                    <div className="mt-5 border-t border-[#eee] pt-7.5">
                        <h2 className="font-bodoni text-2xl mb-5 font-normal">Items in this Look</h2>
                        {items.length > 0 ? (
                            <ul className="flex flex-col gap-5">
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex flex-col p-[15px] border border-[#eee] rounded-lg transition-transform duration-300 ease-in-out"
                                    >
                                        <div className="font-medium mb-[3px] text-[16px]">{item.brand}</div>
                                        <div className="text-[#777] text-sm">{item.clothe}</div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center w-full text-gray-500">No CheckList.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutfitDetail;