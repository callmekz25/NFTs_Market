import React, { useState, useEffect } from "react";
import Header from "../HeaderDeskTop";
import Footer from "../Footer";
import ListMarketPlace from "./ListMarketPlace";
import { ToastContainer } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from "aos";
import "aos/dist/aos.css";

const MarketPlace = () => {
    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    const [isTypeInput, setIsTypeInput] = useState(false);
    const [valueSearch, setValueSearch] = useState("");
    const [cards, setCards] = useState([]);

    const handleInputSearch = (value) => {
        setValueSearch(value);
    };

    useEffect(() => {
        if (valueSearch.trim() !== "") {
            setIsTypeInput(true);
        } else {
            setIsTypeInput(false);
        }

        const cardFind = ListMarketPlace.filter((card) =>
            card.title
                .replace(/\s+/g, "")
                .toLowerCase()
                .includes(valueSearch.replace(/\s+/g, "").toLowerCase())
        );

        setCards(cardFind);
    }, [valueSearch]);

    return (
        <div className="bg-[#2B2B2B] text-white">
            <Header />
            <div className="lg:px-[150px] md:px-[70px] px-[30px]">
                <div
                    className="lg:py-[80px] md:py-[60px] py-[40px]"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <h1 className="lg:text-[51px] font-semibold lg:leading-[110%] capitalize md:text-[38px] md:leading-[120%] text-[28px] leading-[140%]">
                        Browse Marketplace
                    </h1>
                    <p className="lg:text-[22px] font-normal lg:leading-[160%] pt-[10px] text-[16px] leading-[140%]">
                        Browse through more than 50k NFTs on the NFT
                        Marketplace.
                    </p>
                    <div className=" mt-[30px]">
                        <input
                            type="text"
                            placeholder="Search your favourite NFTs"
                            className="py-4 px-[20px] rounded-[20px] outline-none border border-[#858584] placeholder:text-[#858584] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[140%] bg-[#2B2B2B] w-full"
                            onChange={(e) => handleInputSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="grid grid-cols-2 border-t border-[#858584] text-[#858584] lg:px-[150px] md:px-[70px] px-[30px]"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <div className="p-[30px] flex items-center justify-center">
                        <span className="lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px]">
                            NFTs
                        </span>
                    </div>
                    <div className="p-[30px] flex items-center justify-center">
                        <span className="lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px]">
                            Collections
                        </span>
                    </div>
                </div>
                {cards.length > 0 ? (
                    <div className="py-[40px] lg:py-[60px] md:py-[60px] lg:px-[150px] md:px-[70px] px-[30px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] bg-[#3B3B3B] ">
                        {cards.map((card, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-[#2B2B2B] hover:cursor-pointer rounded-[20px] overflow-hidden"
                                >
                                    <LazyLoadImage
                                        src={card.thumnail}
                                        alt=""
                                        className="w-full object-cover lg:h-auto h-[250px]"
                                        effect="blur"
                                        width="100%"
                                    ></LazyLoadImage>

                                    <div className="px-[30px] py-[20px]">
                                        <h1 className="text-[22px] font-semibold leading-[140%] capitalize">
                                            {card.title}
                                        </h1>
                                        <div className="flex items-center gap-3 pt-[10px]">
                                            <LazyLoadImage
                                                src={card.avatar}
                                                alt=""
                                                className="size-[25px] object-cover rounded-full"
                                                effect="blur"
                                            ></LazyLoadImage>

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
                                                    {card.highestBid}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    isTypeInput && (
                        <div className="py-[40px] lg:py-[60px] md:py-[60px] lg:px-[150px] md:px-[70px] px-[30px] bg-[#3B3B3B] text-center text-[#858584] text-[20px]">
                            NFT not found.
                        </div>
                    )
                )}
            </div>
            <div className="lg:px-[150px] md:px-[70px] px-[30px] bg-[#3b3b3b] border-t-2 border-[#2b2b2b]">
                <Footer />
            </div>
            <ToastContainer />
        </div>
    );
};

export default MarketPlace;
