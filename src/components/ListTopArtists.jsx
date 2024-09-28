import rocket from "../Assets/TopArtists/RocketPurple.svg";
import { Link } from "react-router-dom";
import TopArtists from "./TopArtist";
function ListTopArtists() {
    return (
        <div className="">
            <div className="lg:pt-[60px] grid lg:grid-cols-4 lg:gap-[30px] md:grid-cols-2 md:gap-[30px] pt-[40px] grid-cols-1 gap-[20px]">
                {TopArtists.map((artist, index) => {
                    return (
                        <Link
                            to={`/artist/${artist.name}`}
                            key={index}
                            className={`bg-[#3B3B3B] p-[20px] flex lg:flex-col items-center justify-center rounded-[20px] hover:scale-95 transition-all duration-300 hover:cursor-pointer md:flex-row flex-row ${
                                index + 1 > 6 ? "md:hidden lg:block" : ""
                            } ${
                                index + 1 > 5 ? "hidden lg:flex md:flex" : ""
                            } `}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <div className="relative">
                                <img
                                    src={artist.avatar}
                                    alt={artist.name}
                                    className=" lg:size-auto size-16"
                                />

                                <div className="absolute lg:top-[-5%] lg:left-[-40%] flex items-center justify-center lg:size-[30px] md:size-[25px] md:top-0 md:left-[-5%] rounded-full bg-[#2B2B2B] size-[27px] top-[-5%] left-[-10%]">
                                    <span className="lg:text-[16px] font-normal leading-[140%] text-[#858584] md:text-[13px]">
                                        {artist.ranking}
                                    </span>
                                </div>
                            </div>
                            <div className="flex lg:flex-col lg:items-center flex-col pl-[20px] lg:pl-0">
                                <h1 className="text-[22px] leading-[140%] capitalize font-semibold lg:mt-[20px] ">
                                    {artist.name}
                                </h1>
                                <div className="flex items-center gap-[10px] mt-[5px]">
                                    <span className="text-[16px] leading-[140%] font-normal text-[#858584]">
                                        {artist.total}
                                    </span>
                                    <span className="text-[16px] font-normal leading-[140%]">
                                        {artist.number}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <Link to="/rankings">
                <button
                    className="flex items-center lg:gap-3 gap-3 lg:px-[40px] rounded-[20px] border-2 border-[#A259FF] lg:py-[23px] hover:scale-95 transition-all duration-500 py-[20px] lg:hidden md:hidden mt-[40px] w-full justify-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <img
                        src={rocket}
                        alt=""
                    />

                    <p className="lg:text-[16px] text-[16px] font-semibold leading-[140%] md:w-[150px]">
                        View Rankings
                    </p>
                </button>
            </Link>
        </div>
    );
}
export default ListTopArtists;
