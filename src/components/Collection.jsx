import { Link } from "react-router-dom";
import ListTrendingCollection from "./ListTrendingCollection";
function Collection() {
    return (
        <div className="lg:py-[80px] py-[40px]">
            <div className="">
                <h1
                    className="lg:text-[38px] font-semibold lg:leading-[120%] capitalize text-[28px] leading-[140%]"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    Trending Collection
                </h1>
                <p
                    className="lg:text-[22px] font-normal lg:leading-[160%] capitalize mt-[10px] text-[16px] leading-[140%]"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    Checkout our weekly updated trending collection.
                </p>
            </div>

            <div className="lg:pt-[60px] pt-[40px] grid lg:grid-cols-3 lg:gap-[30px] md:gap-[30px] md:grid-cols-2 grid-cols-1">
                {ListTrendingCollection.map((artist, index) => {
                    return (
                        <div
                            className={`${
                                index === 2 ? "md:hidden hidden" : "lg:block"
                            } ${index === 2 ? "lg:block" : ""} ${
                                index === 1 ? "hidden lg:block md:block" : ""
                            }`}
                            key={index}
                        >
                            <Link to={`/nft/${artist.name}`}>
                                <img
                                    src={artist.first}
                                    alt="artist"
                                    className="object-cover w-full  hover:cursor-pointer rounded-[20px]"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                />
                            </Link>

                            <div className="grid grid-cols-3 gap-[15px] mt-[15px]">
                                <Link to={`/nft/${artist.name}`}>
                                    <img
                                        src={artist.secondary}
                                        alt="artist"
                                        className="object-cover w-full  hover:cursor-pointer"
                                        data-aos="zoom-in"
                                        data-aos-duration="1000"
                                    />
                                </Link>

                                <Link to={`/nft/${artist.name}`}>
                                    <img
                                        src={artist.third}
                                        alt="artist"
                                        className="object-cover w-full  hover:cursor-pointer"
                                        data-aos="zoom-in"
                                        data-aos-duration="1000"
                                    />
                                </Link>

                                <Link
                                    to={`/nft/${artist.name}`}
                                    className="bg-[#A259FF] rounded-[20px] flex items-center justify-center hover:scale-95 transition-all duration-500 hover:cursor-pointer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                >
                                    <span className="lg:text-[22px] md:text-[22px] text-[16px] font-semibold leading-[160%] capitalize ">
                                        {artist.number}
                                    </span>
                                </Link>
                            </div>
                            <div className="mt-[15px]">
                                <h3
                                    className="text-[22px] font-semibold leading-[140%] capitalize"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    {artist.title}
                                </h3>
                                <div
                                    className="flex items-center gap-[12px] mt-[15px]"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                >
                                    <img
                                        src={artist.avatar}
                                        alt="avatar"
                                        className="size-[24px] object-cover rounded-full"
                                    />

                                    <span className="lg:text-[16px] font-normal lg:leading-[140%]">
                                        {artist.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Collection;
