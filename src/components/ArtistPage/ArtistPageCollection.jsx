import { useState, useEffect } from "react";
import Header from "../HeaderDeskTop";
import Thumnail from "../../Assets/ArtistPage/ArtistPage.webp";
import Plus from "../../Assets/ArtistPage/Plus.svg";
import Copy from "../../Assets/ArtistPage/Copy.svg";
import global from "../../Assets/ArtistPage/Globe.svg";
import discord from "../../Assets/Footer/DiscordLogo.svg";
import youtube from "../../Assets/Footer/YoutubeLogo.svg";
import twitter from "../../Assets/Footer/TwitterLogo.svg";
import instagram from "../../Assets/Footer/InstagramLogo.svg";
import Created from "./Created/Created";
import Footer from "../Footer";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import { useParams } from "react-router-dom";
import ListTrendingCollection from "../ListTrendingCollection";
const ArtistPageCollection = () => {
    // Chuyen page luon scoll len dau trang
    // Animation scroll AOS
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: false });
        AOS.refresh();
    }, []);
    // Lấy dữ liệu từ URL

    const { artistNameCollection } = useParams();

    const [artist, setArtist] = useState(null);

    useEffect(() => {
        const foundArtist = ListTrendingCollection.find(
            (artist) => artist.name === artistNameCollection
        );
        setArtist(foundArtist);
    }, [artistNameCollection]);

    if (!artist) {
        return <div className="text-[20px]">cccc...</div>;
    }

    return (
        <div className="bg-[#2B2B2B] text-white overflow-hidden">
            <Header />
            <div className="">
                <div
                    className="relative"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <img
                        src={Thumnail}
                        alt=""
                        className="w-full object-cover lg:h-[320px] md:h-[280px] h-[250px]"
                    />
                    <img
                        src={artist.avatar}
                        alt=""
                        className="size-[120px] object-cover rounded-[20px] absolute bottom-0 translate-y-[50%] lg:translate-x-[150px] md:translate-x-[70px] translate-x-[-50%] left-[50%] lg:left-0 md:left-0"
                    />
                </div>
                <div className="lg:px-[150px] md:px-[70px] px-[30px] py-[80px]">
                    <div className="flex lg:flex-row lg:items-center lg:justify-between flex-col gap-[30px]">
                        <h1
                            className="lg:text-[51px] font-semibold lg:leading-[110%] capitalize md:text-[38px] md:leading-[120%] text-[28px] leading-[140%]"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            {artist.name}
                        </h1>
                        <div
                            className="flex lg:items-center md:items-center gap-[20px] lg:flex-row md:flex-row flex-col items-start"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <button className="flex items-center gap-2 text-white bg-[#A259FF] rounded-[20px] justify-center py-5 px-4 w-full lg:w-auto md:w-auto">
                                <img
                                    src={Copy}
                                    alt=""
                                />
                                <span className="text-[16px] font-semibold leading-[140%]">
                                    0xc0E3...B79C
                                </span>
                            </button>
                            <button className="flex items-center gap-2   rounded-[20px] justify-center py-5 px-6 border-2 border-[#A259FF] w-full lg:w-auto md:w-auto">
                                <img
                                    src={Plus}
                                    alt=""
                                    className="text-[#A259FF]"
                                />
                                <span className="text-[16px] font-semibold leading-[140%] text-white">
                                    Follow
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between lg:justify-start md:justify-start lg:gap-[70px] md:gap-[50px] pt-[30px]">
                        <div
                            className="flex flex-col items-start"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <span className="lg:text-[28px] font-bold lg:leading-[140%] capitalize text-[22px] leading-[160%]">
                                250k+
                            </span>
                            <span className="lg:text-[22px] font-normal lg:leading-[160%] capitalize text-[16px] leading-[140%]">
                                Volume+
                            </span>
                        </div>
                        <div
                            className="flex flex-col items-start"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <span className="lg:text-[28px] font-bold lg:leading-[140%] capitalize text-[22px] leading-[160%]">
                                50+
                            </span>
                            <span className="lg:text-[22px] font-normal lg:leading-[160%] capitalize text-[16px] leading-[140%]">
                                NFTs Sold+
                            </span>
                        </div>
                        <div
                            className="flex flex-col items-start"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <span className="lg:text-[28px] font-bold lg:leading-[140%] capitalize text-[22px] leading-[160%]">
                                3000+
                            </span>
                            <span className="lg:text-[22px] font-normal lg:leading-[160%] capitalize text-[16px] leading-[140%]">
                                Followers
                            </span>
                        </div>
                    </div>
                    <div
                        className="pt-[30px] "
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h1 className="text-[#858584] lg:text-[22px] font-bold lg:leading-[160%] capitalize text-[16px] leading-[140%]">
                            Bio
                        </h1>
                        <span className="lg:text-[22px] font-normal lg:leading-[160%] capitalize pt-[10px] inline-block text-[16px] leading-[140%]">
                            The internet's friendliest designer kid.
                        </span>
                    </div>
                    <div
                        className="pt-[30px]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h1 className="text-[#858584] lg:text-[22px] font-bold lg:leading-[160%] capitalize text-[16px] leading-[140%]">
                            Links
                        </h1>
                        <div className="flex items-center gap-[10px] pt-[10px]">
                            <img
                                src={global}
                                alt=""
                            />
                            <img
                                src={discord}
                                alt=""
                            />
                            <img
                                src={youtube}
                                alt=""
                            />
                            <img
                                src={twitter}
                                alt=""
                            />
                            <img
                                src={instagram}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:px-[150px] md:px-[70px] px-[30px] grid grid-cols-3 border-t border-[#858584] text-[#858584]">
                    <div className="p-[30px] flex items-center justify-center ">
                        <span className="lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px] ">
                            Created
                        </span>
                    </div>
                    <div className="p-[30px] flex items-center justify-center">
                        <span className="lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px]">
                            Owned
                        </span>
                    </div>
                    <div className="p-[30px] flex items-center justify-center">
                        <span className="lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px]">
                            Collection
                        </span>
                    </div>
                </div>
                <div className="py-[80px] bg-[#3B3B3B] lg:px-[150px] md:px-[70px] px-[30px] ">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <Created
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                            path={`/artist-collection/${artist.name}/nft/${artist.name}`}
                        />
                        <Created
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                            path={`/artist-collection/${artist.name}/nft/${artist.name}`}
                        />
                        <Created
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                            path={`/artist-collection/${artist.name}/nft/${artist.name}`}
                        />
                        <Created
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                            path={`/artist-collection/${artist.name}/nft/${artist.name}`}
                        />
                        <Created
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                            path={`/artist-collection/${artist.name}/nft/${artist.name}`}
                        />
                        <Created
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                            path={`/artist-collection/${artist.name}/nft/${artist.name}`}
                        />
                        <Created
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                            path={`/artist-collection/${artist.name}/nft/${artist.name}`}
                        />
                        <Created
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                            path={`/artist-collection/${artist.name}/nft/${artist.name}`}
                        />

                        <Created
                            styleAos="zoom-in"
                            duration="1500"
                            data={artist}
                            path={`/artist-collection/${artist.name}/nft/${artist.name}`}
                            hidden="md:hidden lg:block block"
                        />
                    </div>
                </div>
            </div>
            <div className="lg:px-[150px] md:px-[70px] px-[30px] bg-[#3b3b3b]  border-t-2 border-[#2B2B2B]">
                <Footer />
            </div>
            <ToastContainer />
        </div>
    );
};

export default ArtistPageCollection;
