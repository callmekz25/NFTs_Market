import wallet from "../Assets/How/how1.webp";
import collection from "../Assets/How/how2.webp";
import earning from "../Assets/How/how3.webp";
const FAQ = [
    {
        image: wallet,
        title: "Setup Your wallet",
        explain:
            "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
        image: collection,
        title: "Create Collection",
        explain:
            "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
        image: earning,
        title: "Start Earning",
        explain:
            "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
];
const How = () => {
    return (
        <div className="bg-[#2b2b2b] lg:py-[80px] py-[40px]">
            <div className="">
                <h1
                    className="lg:text-[38px] font-semibold lg:leading-[120%] capitalize text-[28px] leading-[140%]"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    How It Works
                </h1>
                <p
                    className="lg:text-[22px] font-normal lg:leading-[160%] capitalize pt-[10px] text-[16px] leading-[140%]"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    Find Out How To Get Started
                </p>
            </div>
            <div className="lg:pt-[48px] pt-[40px] grid lg:grid-cols-3 gap-[30px] md:grid-cols-3 grid-cols-1">
                {FAQ.map((item, index) => {
                    return (
                        <div
                            className="bg-[#3B3B3B] rounded-[20px] lg:px-[30px]  lg:pt-[10px] lg:pb-[30px] md:px-[30px] md:pt-[10px] md:pb-[30px] flex lg:flex-col items-center md:flex-col flex-row  p-[20px] gap-[20px] lg:gap-0 md:gap-0"
                            key={index}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <div
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="lg:size-auto md:size-autosize-[100px]  object-cover"
                                />
                            </div>

                            <div className="flex flex-col lg:items-center md:items-center items-start justify-center ">
                                <span
                                    className="lg:pt-[20px] md:pt-[20px] pt-0 lg:text-[22px] font-semibold leading-[140%] capitalize text-[16px]"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                >
                                    {item.title}
                                </span>
                                <p
                                    className="lg:text-center md:text-center text-start lg:text-[16px] font-normal leading-[140%] pt-[10px] text-[12px]"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                >
                                    {item.explain}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default How;
