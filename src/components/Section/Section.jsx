import rocket from "../../Assets/Header/Section/RocketLaunch.svg";
import imageSection from "../../Assets/Header/Section/Image Placeholder.webp";
import avatar from "../../Assets/Collection/PrimaryAvatar.webp";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
function Section() {
    return (
        <div className="lg:py-[80px] md:py-[80px] py-[40px] lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[100px] md:gap-[70px] gap-[50px] flex flex-col justify-center items-center">
            <div className="">
                <h1
                    className="lg:text-[67px] font-semibold lg:leading-[110%] capitalize lg:w-[510px] md:w-[330px] md:text-[38px] md:leading-[120%] text-[28px] leading-[140%]"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    Discover digital art & Collect NFTs
                </h1>
                <p
                    className="lg:text-[22px] lg:font-normal lg:leading-[160%] capitalize mt-[20px] text-[16px] leading-[140%]"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    NFT marketplace UI created with Anima for Figma. Collect,
                    buy and sell art from more than 20k NFT artists.
                </p>
                <Link to="/signup">
                    <button
                        className="bg-[#A259FF] rounded-[20px] flex items-center gap-[12px] px-[30px] py-[18px] mt-[30px] hover:scale-95 transition-all duration-300"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <img
                            src={rocket}
                            alt=""
                        />
                        <span className="text-[16px] font-semibold leading-[140%]">
                            Get Started
                        </span>
                    </button>
                </Link>
                <div className="grid grid-cols-3 gap-[30px] mt-[30px]">
                    <div
                        className="flex flex-col"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <span className="lg:text-[28px] font-bold capitalize lg:leading-[140%] text-[22px] leading-[160%]">
                            240k+
                        </span>
                        <span className="lg:text-[24px] font-normal lg:leading-[160%] capitalize text-[16px] leading-[140%]">
                            Total Sale
                        </span>
                    </div>
                    <div
                        className="flex flex-col"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <span className="lg:text-[28px] font-bold capitalize lg:leading-[140%] text-[22px] leading-[160%]">
                            100k+
                        </span>
                        <span className="lg:text-[24px] font-normal lg:leading-[160%] capitalize text-[16px] leading-[140%]">
                            Actions
                        </span>
                    </div>
                    <div
                        className="flex flex-col"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <span className="lg:text-[28px] font-bold capitalize lg:leading-[140%] text-[22px] leading-[160%]">
                            240k+
                        </span>
                        <span className="lg:text-[24px] font-normal lg:leading-[160%] capitalize text-[16px] leading-[140%]">
                            Artists
                        </span>
                    </div>
                </div>
            </div>

            <Link to="/artist">
                <div
                    className=""
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <img
                        src={imageSection}
                        alt=""
                        className="object-cover w-full h-full"
                    />

                    <div className="bg-[#3B3B3B] rounded-b-[20px] flex flex-col p-[20px] ">
                        <h1 className="text-[22px] font-semibold leading-[140%] capitalize">
                            Space Walking
                        </h1>
                        <div className="flex items-center gap-[12px] mt-[10px]">
                            <img
                                src={avatar}
                                alt=""
                                className="size-[24px] rounded-full object-cover"
                            />

                            <span className="text-[16px] font-normal leading-[140%]">
                                Animakid
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
export default Section;
