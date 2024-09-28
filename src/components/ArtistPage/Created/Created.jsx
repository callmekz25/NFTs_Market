import thum1 from "../../../Assets/Discover/dis1.webp";
import { Link } from "react-router-dom";
// Component Card để render ở page artist lưu ý nhận data là avatar và name của card khi click ở ListTopArtist
const Created = ({ styleAos, duration, hidden, data, path }) => {
    return (
        <Link
            to={{
                pathname: path,
                state: {
                    name: data.name,
                    avatar: data.avatar,
                },
            }}
            className={`rounded-[20px] bg-[#2B2B2B] hover:cursor-pointer ${hidden} `}
            data-aos={styleAos}
            data-aos-duration={duration}
        >
            <img
                src={thum1}
                alt=""
                className="w-full object-cover"
            />
            <div className="px-[30px] py-[20px]">
                <h1 className="text-[22px] font-semibold leading-[140%] capitalize">
                    Distant Galaxy
                </h1>
                <div className="flex items-center gap-3 pt-[10px]">
                    <img
                        src={data.avatar}
                        alt=""
                        className="size-[25px] object-cover rounded-full"
                    />
                    <span className="text-[16px] font-normal leading-[140%]">
                        {data.name}
                    </span>
                </div>
                <div className="pt-[25px] flex items-center justify-between">
                    <div className="flex flex-col items-start gap-2">
                        <span className="text-[#858584] text-[12px] font-normal leading-[110%]">
                            Price
                        </span>
                        <span className="text-[16px] font-normal leading-[140%]">
                            1.63 ETH
                        </span>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <span className="text-[#858584] text-[12px] font-normal leading-[110%]">
                            Highest Bid
                        </span>
                        <span className="text-[16px] font-normal leading-[140%]">
                            0.33 wETH
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Created;
