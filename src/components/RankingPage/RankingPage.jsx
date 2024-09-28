import Header from "../HeaderDeskTop";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import TopToDay from "./RenderTopToday/TopToDay";
import TopWeek from "./RenderTopWeek/TopWeek";
import TopMonth from "./RenderTopMonth/TopMonth";
import TopAllTime from "./RenderAllTime/TopAllTime";
import ListRankToDay from "./ListRanking/RankToday";
import ListRankWeek from "./ListRanking/RankWeek";
import ListRankMonth from "./ListRanking/RankMonth";
import ListRankAllTime from "./ListRanking/RankAllTime";
import AOS from "aos";
import "aos/dist/aos.css";
const RankingPage = () => {
    // Xử lí animation lines
    const tabs = document.querySelectorAll(".tab-item");
    const line = document.querySelector(".line");
    const tabsMobile = document.querySelectorAll(".tab-item-mobile");
    const lineMobile = document.querySelector(".line-mobile");

    tabs.forEach((tab, index) => {
        tab.onclick = function () {
            line.style.left = this.offsetLeft + "px";
            line.style.width = this.offsetWidth + "px";
        };
    });
    tabsMobile.forEach((tab, index) => {
        tab.onclick = function () {
            lineMobile.style.left = this.offsetLeft + "px";
            lineMobile.style.width = this.offsetWidth + "px";
        };
    });
    // State xử lí chọn tab ranking
    const [isToday, setIsToday] = useState(true);
    const [isWeek, setIsWeek] = useState(false);
    const [isMonth, setIsMonth] = useState(false);
    const [isAllTime, setIsAllTime] = useState(false);
    // State xử lí sort theo tên artists
    const [sortedArtists, setSortedArtists] = useState([]);
    const [isSortedArtist, setIsSortArtist] = useState(false);
    // State xử lí sort theo chỉ số của change
    const [sortedChange, setSortedChange] = useState([]);
    const [isSortedChange, setIsSortedChange] = useState(false);
    // State xử lí sort theo số nft đã bán
    const [sortedNft, setSortedNft] = useState([]);
    const [isSortedNft, setIsSortedNft] = useState();
    // State xử lí sort theo số volume
    const [sortedVolume, setSortedVolume] = useState([]);
    const [isSortedVolume, setIsSortedVolume] = useState(false);
    // Các hàm xử lí khi chọn tab ranking để set state, useEffect xử lí thay đổi state và set artist để truyển props cho render
    const clickToday = () => {
        setIsToday(true);
        setIsWeek(false);
        setIsMonth(false);
        setIsAllTime(false);
    };
    const clickWeek = () => {
        setIsWeek(true);
        setIsToday(false);
        setIsMonth(false);
        setIsAllTime(false);
    };
    const clickMonth = () => {
        setIsMonth(true);
        setIsWeek(false);
        setIsToday(false);
        setIsAllTime(false);
    };
    const clickAllTime = () => {
        setIsAllTime(true);
        setIsWeek(false);
        setIsMonth(false);
        setIsToday(false);
    };

    // Hàm xử lí sort theo tên artists
    const sortArtists = () => {
        // Nếu chọn sort theo tên artists thì cho state sort Change false để render

        setIsSortArtist(true);
        setIsSortedChange(false);
        setIsSortedNft(false);
        setIsSortedVolume(false);
    };
    // Hàm xử lí sort theo chỉ số change của artists
    const sortChange = () => {
        // Nếu chọn sort chỉ số change thì cho state sort Artists false để render

        setIsSortedChange(true);
        setIsSortArtist(false);
        setIsSortedNft(false);
        setIsSortedVolume(false);
    };
    // Hàm xử lí sort theo số NFT đã bán
    const sortNft = () => {
        setIsSortedNft(true);
        setIsSortArtist(false);
        setIsSortedChange(false);
        setIsSortedVolume(false);
    };
    // Hàm xử lí sort theo số volume
    const sortVolume = () => {
        setIsSortedVolume(true);
        setIsSortedNft(false);
        setIsSortArtist(false);
        setIsSortedChange(false);
    };
    // Xử lí khi component thay đổi click vào tab nào thì render lại từ đầu khi chưa sort
    useEffect(() => {
        // Thực hiện các hàm sort và set lại state cho sortedArtists,sortedChange, sortedNft, sortedVolume
        let artists = [];
        if (isToday) {
            artists = [...ListRankToDay];
        } else if (isWeek) {
            artists = [...ListRankWeek];
        } else if (isMonth) {
            artists = [...ListRankMonth];
        } else if (isAllTime) {
            artists = [...ListRankAllTime];
        }
        // Chọn sort theo tên artist
        if (isSortedArtist) {
            artists.sort((a, b) => a.name.localeCompare(b.name));
        }
        // Chọn sort theo chỉ số change
        if (isSortedChange) {
            artists.forEach((artist) => {
                let splitChange = artist.change.split("%");
                artist.change = Number(splitChange[0]);
            });
            artists.sort((a, b) => b.change - a.change);
            artists.forEach((artist) => {
                artist.change = `${artist.change}%`;
            });
        }
        // Chọn sort theo số NFT đã bán
        if (isSortedNft) {
            artists.sort((a, b) => b.nftSold - a.nftSold);
        }
        // Chọn sort theo số volume
        if (isSortedVolume) {
            artists.forEach((artist) => {
                let splitVolume = artist.volume.split(" ");
                artist.volume = Number(splitVolume[0]);
            });
            artists.sort((a, b) => b.volume - a.volume);
            artists.forEach((artist) => {
                artist.volume = `${artist.volume} ETH`;
            });
        }
        // Tùy theo chọn sort theo gì để set list đã sort theo lựa chọn vào state
        setSortedArtists(artists);
        setSortedChange(artists);
        setSortedNft(artists);
        setSortedVolume(artists);
    }, [
        isToday,
        isWeek,
        isMonth,
        isAllTime,
        isSortedArtist,
        isSortedChange,
        isSortedNft,
        isSortedVolume,
    ]);
    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#2B2B2B] text-white">
            <Header />
            <div className="lg:px-[150px] md:px-[70px] px-[30px]">
                <div className="lg:py-[80px] md:py-[40px] py-[30px]">
                    <h1
                        className="lg:text-[51px] font-semibold lg:leading-[110%] capitalize md:text-[38px] md:leading-[120%] text-[28px] leading-[140%] mb-[20px]"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Top Creators
                    </h1>
                    <p
                        className="lg:text-[22px] font-normal lg:leading-[160%] text-[16px] leading-[140%]"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Check out top ranking NFT artists on the NFT
                        Marketplace.
                    </p>
                </div>
                <div className="">
                    <div
                        className="grid-cols-4 text-[#858584] lg:grid md:grid hidden tabs relative"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div
                            className={`p-[30px] flex items-center justify-center tab-item  `}
                        >
                            <span
                                className={`lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px] hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                    isToday ? "text-white" : ""
                                }`}
                                onClick={() => clickToday()}
                            >
                                Today
                            </span>
                        </div>
                        <div
                            className={`p-[30px] flex items-center justify-center tab-item `}
                        >
                            <span
                                className={`lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px] hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                    isWeek ? "text-white" : ""
                                }`}
                                onClick={() => clickWeek()}
                            >
                                This Week
                            </span>
                        </div>
                        <div
                            className={`p-[30px] flex items-center justify-center tab-item  `}
                        >
                            <span
                                className={`lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px] hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                    isMonth ? "text-white" : ""
                                }`}
                                onClick={() => clickMonth()}
                            >
                                This Month
                            </span>
                        </div>
                        <div
                            className={`p-[30px] flex items-center justify-center tab-item `}
                        >
                            <span
                                className={`lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px] hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                    isAllTime ? "text-white" : ""
                                }`}
                                onClick={() => clickAllTime()}
                            >
                                All Time
                            </span>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div
                        className="grid grid-cols-4 text-[#858584] lg:hidden md:hidden tabs-mobile relative"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div
                            className={`flex items-center justify-center p-[20px] tab-item-mobile  `}
                        >
                            <span
                                className={`lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px] hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                    isToday ? "text-white" : ""
                                }  `}
                                onClick={() => clickToday()}
                            >
                                1d
                            </span>
                        </div>
                        <div
                            className={`flex items-center justify-center p-[20px] tab-item-mobile `}
                        >
                            <span
                                className={`lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px] hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                    isWeek ? "text-white" : ""
                                }`}
                                onClick={() => clickWeek()}
                            >
                                7d
                            </span>
                        </div>
                        <div
                            className={`flex items-center justify-center p-[20px] tab-item-mobile  `}
                        >
                            <span
                                className={`lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px] hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                    isMonth ? "text-white" : ""
                                }`}
                                onClick={() => clickMonth()}
                            >
                                30d
                            </span>
                        </div>
                        <div
                            className={`flex items-center justify-center   tab-item-mobile `}
                        >
                            <span
                                className={`lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px] hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                    isAllTime ? "text-white" : ""
                                }`}
                                onClick={() => clickAllTime()}
                            >
                                All Time
                            </span>
                        </div>
                        <div className="line-mobile"></div>
                    </div>
                    <div className="py-[40px]">
                        <div className="rounded-lg overflow-hidden">
                            <div
                                className="flex justify-between items-center px-[20px] py-4 rounded-[20px] border border-[#3B3B3B] text-[16px] font-normal leading-[140%] text-[#858584]"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center gap-[20px] lg:w-[430px] md:w-[410px]">
                                    <p className="font-bold">#</p>
                                    <p
                                        className={`font-bold w-48 hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                            isSortedArtist ? "text-white" : ""
                                        }`}
                                        onClick={() => sortArtists()}
                                    >
                                        Artist
                                    </p>
                                </div>
                                <p
                                    className={`font-bold w-24 lg:block md:block hidden hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                        isSortedChange ? "text-white" : ""
                                    }`}
                                    onClick={() => sortChange()}
                                >
                                    Change
                                </p>
                                <p
                                    className={`font-bold w-24 lg:block md:hidden hidden hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                        isSortedNft ? "text-white" : ""
                                    }`}
                                    onClick={() => sortNft()}
                                >
                                    NFTs Sold
                                </p>
                                <p
                                    className={`font-bold w-24 hover:cursor-pointer hover:text-white transition-all duration-300 ${
                                        isSortedVolume ? "text-white" : ""
                                    }`}
                                    onClick={() => sortVolume()}
                                >
                                    Volume
                                </p>
                            </div>
                            {/* Render Top Ranking */}
                            {isToday ? (
                                // Truyền các props để xử lí render list theo kiểu chọn sort
                                <TopToDay
                                    sortedArtists={sortedArtists}
                                    sortedChange={sortedChange}
                                    sortedNft={sortedNft}
                                    sortedVolume={sortedVolume}
                                    isSortedArtist={isSortedArtist}
                                    isSortedChange={isSortedChange}
                                    isSortedNft={isSortedNft}
                                    isSortedVolume={isSortedVolume}
                                />
                            ) : (
                                ""
                            )}
                            {isWeek ? (
                                <TopWeek
                                    sortedArtists={sortedArtists}
                                    sortedChange={sortedChange}
                                    sortedNft={sortedNft}
                                    sortedVolume={sortedVolume}
                                    isSortedArtist={isSortedArtist}
                                    isSortedChange={isSortedChange}
                                    isSortedNft={isSortedNft}
                                    isSortedVolume={isSortedVolume}
                                />
                            ) : (
                                ""
                            )}
                            {isMonth ? (
                                <TopMonth
                                    sortedArtists={sortedArtists}
                                    sortedChange={sortedChange}
                                    sortedNft={sortedNft}
                                    sortedVolume={sortedVolume}
                                    isSortedArtist={isSortedArtist}
                                    isSortedChange={isSortedChange}
                                    isSortedNft={isSortedNft}
                                    isSortedVolume={isSortedVolume}
                                />
                            ) : (
                                ""
                            )}
                            {isAllTime ? (
                                <TopAllTime
                                    sortedArtists={sortedArtists}
                                    sortedChange={sortedChange}
                                    sortedNft={sortedNft}
                                    sortedVolume={sortedVolume}
                                    isSortedArtist={isSortedArtist}
                                    isSortedChange={isSortedChange}
                                    isSortedNft={isSortedNft}
                                    isSortedVolume={isSortedVolume}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:px-[150px] md:px-[70px] px-[30px] bg-[#3b3b3b]">
                <Footer />
            </div>
            <ToastContainer />
        </div>
    );
};
export default RankingPage;
