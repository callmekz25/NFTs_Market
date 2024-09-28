import Bg from "../../Assets/NftPage/bg-nft-page.webp";
import Arrow from "../../Assets/NftPage/ArrowRight.svg";
import Header from "../HeaderDeskTop";
import Global from "../../Assets/ArtistPage/Globe.svg";
import CardThisArtist from "./ThisArtist/ThisArtist";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import { useParams, Link } from "react-router-dom";
import "aos/dist/aos.css";
import LinkRankWeek from "../RankingPage/ListRanking/RankWeek";
const NFTPageRanksWeek = () => {
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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh();
    }, []);

    const { artistNameRankingsWeek } = useParams();

    const [artist, setArtist] = useState(null);

    useEffect(() => {
        const foundArtist = LinkRankWeek.find(
            (artist) => artist.name === artistNameRankingsWeek
        );
        setArtist(foundArtist);
    }, [artistNameRankingsWeek]);

    if (!artist) {
        return <div className="mx-auto">Error !</div>;
    }
    return (
        <div className="bg-[#2B2B2B] text-white overflow-hidden">
            <Header />
            <div
                className=""
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                <img
                    src={Bg}
                    alt=""
                    className="w-full object-cover lg:h-[550px] md:h-[412px] h-[320px]"
                />
            </div>
            <div className="lg:px-[150px] md:px-[70px] px-[30px] bg-[#2b2b2b] py-[40px]">
                <div className="flex lg:flex-row md:flex-row flex-col lg:items-center lg:justify-between md:items-center md:justify-between gap-[20px]">
                    <div className="">
                        <h1
                            className="lg:text-[51px] font-semibold lg:leading-[110%] capitalize pb-[10px] md:text-[38px] md:leading-[120%] text-[28px] leading-[140%]"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            The Orbitians
                        </h1>
                        <span
                            className="text-[#858584] lg:text-[22px] font-normal lg:leading-[160%] capitalize text-[16px]leading-[140%]"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Minted on Sep 30, 2022
                        </span>
                    </div>
                    <div
                        className="p-[30px] block-clock lg:w-[295px] md:w-[295px] w-full flex items-center justify-center"
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
                            <button className="flex items-center justify-center bg-[#A259FF] rounded-[20px] py-4 w-full mt-[30px] hover:scale-95 transition-all duration-300">
                                <span
                                    className="text-[16px] font-semibold leading-[140%]
                                "
                                >
                                    Place Bid
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-[20px] lg:pt-0 md:pt-0">
                    <span
                        className="text-[#858584] text-[16px] font-bold leading-[140%] lg:text-[22px] lg:leading-[160%] capitalize"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Created By
                    </span>
                    <div
                        className="flex items-center gap-3 pt-[10px]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <img
                            src={artist.avatar}
                            alt=""
                            className="size-[24px] object-cover rounded-full"
                        />
                        <span className="lg:text-[22px] font-normal leading-[140%] capitalize text-[16px]">
                            {artist.name}
                        </span>
                    </div>
                </div>
                <div className="pt-[30px]">
                    <span
                        className="text-[#858584] text-[16px] font-bold leading-[140%] lg:text-[22px] lg:leading-[160%] capitalize"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Description
                    </span>
                    <div className="text-[16px] font-normal leading-[140%] pt-[10px]">
                        <p
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            The Orbitians is a collection of 10,000 unique NFTs
                            on the Ethereum blockchain,
                        </p>
                        <p
                            className="pt-[20px]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            There are all sorts of beings in the NFT Universe.
                            The most advanced and friendly of the bunch are
                            Orbitians.
                        </p>
                        <p
                            className="pt-[20px]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            They live in a metal space machines, high up in the
                            sky and only have one foot on Earth. These Orbitians
                            are a peaceful race, but they have been at war with
                            a group of invaders for many generations. The
                            invaders are called Upside-Downs, because of their
                            inverted bodies that live on the ground, yet do not
                            know any other way to be. Upside-Downs believe that
                            they will be able to win this war if they could only
                            get an eye into Orbitian territory, so they've taken
                            to make human beings their target.
                        </p>
                    </div>
                </div>
                <div className="pt-[30px]">
                    <span
                        className="text-[#858584] text-[16px] font-bold leading-[140%] lg:text-[22px] lg:leading-[160%] capitalize"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Detail
                    </span>
                    <div
                        className="pt-[10px] text-[16px] font-normal leading-[140%]"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div className="flex items-center gap-[10px]">
                            <img
                                src={Global}
                                alt=""
                            />
                            <span>View on Etherscan</span>
                        </div>
                        <div className="flex items-center gap-[10px] pt-4">
                            <img
                                src={Global}
                                alt=""
                            />
                            <span>View Original</span>
                        </div>
                    </div>
                </div>
                <div className="pt-[30px]">
                    <span
                        className="text-[#858584] text-[16px] font-bold leading-[140%] lg:text-[22px] lg:leading-[160%] capitalize"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Tags
                    </span>
                    <div className="pt-[20px] text-[16px] font-semibold leading-[140%] flex flex-col gap-[20px]">
                        <button
                            className="flex items-center justify-center py-3 rounded-[20px] bg-[#3B3B3B] w-fit px-[30px] hover:scale-95 duration-300 transition-all uppercase"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <span>animation</span>
                        </button>
                        <button
                            className="flex items-center justify-center py-3 rounded-[20px] bg-[#3B3B3B] w-fit px-[30px] hover:scale-95 duration-300 transition-all uppercase"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <span>illustration</span>
                        </button>
                        <button
                            className="flex items-center justify-center py-3 rounded-[20px] bg-[#3B3B3B] w-fit px-[30px] hover:scale-95 duration-300 transition-all uppercase"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <span>moon</span>
                        </button>
                        <button
                            className="flex items-center justify-center py-3 rounded-[20px] bg-[#3B3B3B] w-fit px-[30px] hover:scale-95 duration-300 transition-all uppercase"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <span>moon</span>
                        </button>
                    </div>
                </div>
                <div className="py-[40px] lg:py-[80px]">
                    <div className="flex items-center justify-between">
                        <h1
                            className="lg:text-[38px] font-semibold lg:leading-[120%] capitalize text-[28px] leading-[140%]"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            More from this artist
                        </h1>
                        <Link to={`/artist-week/${artist.name}`}>
                            <button
                                className=" items-center gap-4 justify-between px-[50px] lg:py-5 md:py-5 rounded-[20px] border-2 border-[#A259FF] lg:flex md:flex hidden"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <img
                                    src={Arrow}
                                    alt=""
                                />
                                <span className="text-[16px] leading-[140%] font-semibold">
                                    Go To Artist Page
                                </span>
                            </button>
                        </Link>
                    </div>
                    <div className="lg:pt-[60px] md:pt-[60px] pt-[30px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <CardThisArtist
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                        />
                        <CardThisArtist
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                        />
                        <CardThisArtist
                            styleAos="zoom-in"
                            duration="1500"
                            hidden="lg:block md:block hidden"
                            data={artist}
                        />
                        <CardThisArtist
                            styleAos="zoom-in"
                            duration="1500"
                            hidden="lg:block md:block hidden"
                            data={artist}
                        />
                        <CardThisArtist
                            styleAos="zoom-in"
                            duration="1500"
                            hidden="lg:block md:block hidden"
                            data={artist}
                        />
                        <CardThisArtist
                            styleAos="zoom-in"
                            duration="1500"
                            hidden="lg:block md:block hidden"
                            data={artist}
                        />
                        <CardThisArtist
                            styleAos="zoom-in"
                            duration="1500"
                            hidden="lg:block md:block hidden"
                            data={artist}
                        />
                        <CardThisArtist
                            styleAos="zoom-in"
                            duration="1500"
                            hidden="lg:block md:block hidden"
                            data={artist}
                        />
                        <CardThisArtist
                            styleAos="zoom-in"
                            duration="1500"
                            hidden="hidden lg:block"
                            data={artist}
                        />
                    </div>
                    <Link to={`/artist-week/${artist.name}`}>
                        <button
                            className="flex items-center gap-4 justify-center lg:py-4 md:py-4 py-6 rounded-[20px] border-2 border-[#A259FF] lg:hidden md:hidden w-full mt-[50px]"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src={Arrow}
                                alt=""
                            />
                            <span className="text-[16px] leading-[140%] font-semibold">
                                Go To Artist Page
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="lg:px-[150px] md:px-[70px] px-[30px] bg-[#3b3b3b]">
                <Footer />
            </div>
            <ToastContainer />
        </div>
    );
};
export default NFTPageRanksWeek;
