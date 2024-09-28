import React, { useState, useEffect } from "react";
import banner from "../Assets/Banner/NFT Highlight.webp";
import ArtistBanner from "./ArtistBanner";
import eye from "../Assets/Discover/Eye.svg";
import { Link } from "react-router-dom";

function Banner() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-12-31") - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative">
            <img
                src={banner}
                alt=""
                className="w-full object-cover lg:h-full md:h-full h-[600px] -z-10"
            />

            <div className="absolute top-0 left-0 w-full h-full gradient-banner z-10">
                <div className="flex lg:py-[60px] md:py-[30px] lg:px-[195px] md:px-[150px] px-[70px] z-20 items-end w-full h-full py-[30px]">
                    <div className="flex lg:flex-row lg:items-end lg:justify-between md:flex-row md:items-end md:justify-between w-full h-full flex-col justify-end gap-[30px]">
                        {ArtistBanner.map((artist, index) => {
                            return (
                                <div
                                    className="flex flex-col gap-[30px]"
                                    key={index}
                                >
                                    <div
                                        className="flex items-center px-[20px] py-[10px] gap-3 rounded-[20px] bg-[#3B3B3B] hover:cursor-pointer  w-fit"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <img
                                            src={artist.avatar}
                                            alt=""
                                            className="size-[24px] object-cover"
                                        />

                                        <span className="text-[16px] font-normal leading-[140%]">
                                            {artist.name}
                                        </span>
                                    </div>
                                    <h1
                                        className="text-[38px] font-semibold leading-[120%] capitalize"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        {artist.title}
                                    </h1>
                                    <Link to={`/nft/${artist.name}`}>
                                        <button
                                            className="hidden items-center justify-center gap-3 w-fit px-[50px] py-[22px] bg-white rounded-[20px] lg:flex md:flex hover:scale-95 transition-all duration-300 "
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            <img
                                                src={eye}
                                                alt=""
                                            />

                                            <span className="text-[#2B2B2B] text-[16px] font-semibold leading-[140%]">
                                                See NFT
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            );
                        })}
                        <div
                            className="lg:px-[50px] lg:py-[30px] p-[30px] block-clock lg:w-[350px] md:w-[300px] w-auto flex items-center justify-center"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="">
                                <span className="text-[12px] lg:text-[15px] text-white font-normal leading-[110%]">
                                    Auction ends in:
                                </span>
                                <div className="flex items-start gap-3">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[38px] lg:text-[45px] font-bold leading-[120%] capitalize">
                                            {timeLeft.hours || "00"}
                                        </span>
                                        <span className="text-[12px] font-normal leading-[110%]">
                                            Hours
                                        </span>
                                    </div>
                                    <span className="text-[28px] font-bold leading-[140%] translate-y-2">
                                        :
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[38px] lg:text-[45px] font-bold leading-[120%] capitalize">
                                            {timeLeft.minutes || "00"}
                                        </span>
                                        <span className="text-[12px] font-normal leading-[110%]">
                                            Minutes
                                        </span>
                                    </div>
                                    <span className="text-[28px] font-bold leading-[140%] translate-y-2">
                                        :
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[38px] lg:text-[45px] font-bold leading-[120%] capitalize">
                                            {timeLeft.seconds || "00"}
                                        </span>
                                        <span className="text-[12px] font-normal leading-[110%]">
                                            Seconds
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="lg:hidden md:hidden  items-center justify-center gap-4 px-[50px] py-[22px] bg-white rounded-[20px] flex "
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src={eye}
                                alt=""
                            />

                            <span className="text-[#2B2B2B] text-[16px] font-semibold leading-[140%]">
                                See NFT
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
