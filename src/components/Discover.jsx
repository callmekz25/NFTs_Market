import ListCard from "./ListDiscover";
import eye from "../Assets/Discover/Eye.svg";
import { Link } from "react-router-dom";

function Discover() {
    return (
        <div className="lg:py-[80px] py-[40px]">
            <div className="flex justify-between items-end">
                <div className="">
                    <h1
                        className="lg:text-[38px] font-semibold lg:leading-[120%] capitalize text-[28px] leading-[140%]"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        Discover More NFTs
                    </h1>
                    <p
                        className="mt-[10px] lg:text-[22px] font-normal lg:leading-[160%] capitalize text-[16px] leading-[140%]"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        Explore New Trending NFTs
                    </p>
                </div>
                <Link
                    to="/market-place"
                    className="lg:block md:block hidden"
                >
                    <button
                        className="flex items-center gap-3 lg:px-[50px] md:px-[30px] border-2 border-[#A259FF] rounded-[20px] py-5 hover:scale-95 transition-all duration-300"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <img
                            src={eye}
                            alt=""
                        />

                        <span className="text-[16px] font-semibold leading-[140%]">
                            See All
                        </span>
                    </button>
                </Link>
            </div>
            <div className="lg:pt-[60px] pt-[40px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[30px] md:gap-[30px] gap-[20px]">
                {ListCard.map((card, index) => {
                    return (
                        <div
                            key={index}
                            className={`rounded-[20px] bg-[#3b3b3b] hover:cursor-pointer  ${
                                index > 1 ? "md:hidden lg:block block" : ""
                            }`}
                            data-aos="zoom-in-down"
                            data-aos-duration="1000"
                        >
                            <img
                                src={card.thumnail}
                                alt=""
                                className="w-full object-cover"
                            />

                            <div className="px-[30px] py-[20px]">
                                <h1 className="text-[22px] font-semibold leading-[140%] capitalize">
                                    {card.title}
                                </h1>
                                <div className="flex items-center gap-3 pt-[10px]">
                                    <img
                                        src={card.avatar}
                                        alt=""
                                        className="size-[24px] object-cover rounded-full"
                                    />

                                    <span className="text-[16px] font-normal leading-[140%]">
                                        {card.name}
                                    </span>
                                </div>
                                <div className="pt-[25px] flex items-center justify-between">
                                    <div className="flex flex-col items-start gap-2">
                                        <span className="text-[#858584] text-[12px] font-normal leading-[110%]">
                                            Price
                                        </span>
                                        <span className="text-[16px] font-normal leading-[140%]">
                                            {card.price}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="text-[#858584] text-[12px] font-normal leading-[110%]">
                                            Highest Bid
                                        </span>
                                        <span className="text-[16px] font-normal leading-[140%]">
                                            {card.bid}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="lg:hidden md:hidden block pt-[40px]">
                <Link to="/market-place">
                    <button
                        className="flex items-center gap-3  border-2 border-[#A259FF] rounded-[20px] justify-center py-4 hover:scale-95 transition-all duration-300 w-full"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <img
                            src={eye}
                            alt=""
                        />

                        <span className="text-[16px] font-semibold leading-[140%]">
                            See All
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Discover;
