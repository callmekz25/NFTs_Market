import rocket from "../Assets/TopArtists/RocketPurple.svg";
import ListTopArtists from "./ListTopArtists";
import { Link } from "react-router-dom";
function Top() {
    return (
        <div className="lg:py-[80px]">
            <div className="flex items-end justify-between md:gap-[50px]">
                <div className="">
                    <h1
                        className="lg:text-[38px] font-semibold lg:leading-[120%] capitalize text-[28px] leading-[140%]"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        Top Creators
                    </h1>
                    <p
                        className="lg:text-[22px] font-normal lg:leading-[160%] capitalize mt-[10px] text-[16px] leading-[140%]"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        Checkout Top Rated Creators on the NFT Marketplace
                    </p>
                </div>
                <Link to="/rankings">
                    <button
                        className="lg:flex md:flex items-center lg:gap-3 gap-2 lg:px-[40px] rounded-[20px] border-2 border-[#A259FF] lg:py-[23px] hover:scale-95 transition-all duration-500 py-[17px] px-[20px] hidden"
                        data-aos="fade-left"
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
            <ListTopArtists />
        </div>
    );
}
export default Top;
