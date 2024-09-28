import discord from "../Assets/Footer/DiscordLogo.svg";
import youtube from "../Assets/Footer/YoutubeLogo.svg";
import twitter from "../Assets/Footer/TwitterLogo.svg";
import instagram from "../Assets/Footer/InstagramLogo.svg";
import logo from "../Assets/Header/Logo.svg";
import email from "../Assets/Subscribe/EnvelopeSimple.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const HandleEmailFooter = () => {
    const email = document.querySelector("#email-footer");
    const form = document.querySelector("#form-footer");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (email.value) {
            const formData = new FormData();
            formData.append("entry.371306955", email.value);
            postGoogleForrm(formData);
        } else {
            toast.error("Please enter your email!");
        }
    });
    async function postGoogleForrm(data) {
        fetch(
            "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfs3C-XcxoGI0ZYiU_LT0NuqVsNPocctZMhXbvYBjQT1kB7qA/formResponse",

            {
                method: "POST",
                body: data,
                mode: "no-cors",
            }
        );
        toast.success("Thank for subcribe");
        email.value = "";
    }
};
const Footer = () => {
    return (
        <div className="bg-[#3b3b3b] py-[40px] grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-[30px]">
            <div
                className=""
                data-aos="fade-right"
                data-aos-duration="1500"
            >
                <div className="flex items-center gap-3">
                    <LazyLoadImage
                        src={logo}
                        alt=""
                        className="size-[35px] object-cover"
                    ></LazyLoadImage>

                    <span className="text-[22px] text-white font-semibold leading-[160%]">
                        NFT Marketplace
                    </span>
                </div>
                <p className="pt-[30px] text-[16px] font-normal leading-[140%] text-[#CCCCCC]">
                    NFT marketplace UI created with Anima for Figma.
                </p>
                <p className="text-[16px] font-normal leading-[140%] text-[#CCCCCC] pt-[20px]">
                    Join our community
                </p>

                <ul className="flex items-center gap-[10px] pt-[15px]">
                    <li>
                        <a href="/">
                            <LazyLoadImage
                                src={discord}
                                alt=""
                                className="size-[32px]"
                            ></LazyLoadImage>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <LazyLoadImage
                                src={youtube}
                                alt=""
                                className="size-[32px]"
                            ></LazyLoadImage>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <LazyLoadImage
                                src={twitter}
                                alt=""
                                className="size-[32px]"
                            ></LazyLoadImage>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <LazyLoadImage
                                src={instagram}
                                alt=""
                                className="size-[32px]"
                            ></LazyLoadImage>
                        </a>
                    </li>
                </ul>
            </div>
            <div
                className=""
                data-aos="fade-right"
                data-aos-duration="1500"
            >
                <h1 className="text-[22px] font-semibold leading-[160%] capitalize">
                    Explore
                </h1>
                <ul className="pt-[25px] text-[16px] font-normal leading-[140%] text-[#CCCCCC] gap-[20px] flex flex-col">
                    <li>
                        <Link
                            to="/market-place"
                            className="hover:opacity-50 transition-all duration-300"
                        >
                            Marketplace
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/rankings"
                            className="hover:opacity-50 transition-all duration-300"
                        >
                            Ranking
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/connect-wallet"
                            className="hover:opacity-50 transition-all duration-300"
                        >
                            Connect a wallet
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                className=""
                data-aos="fade-right"
                data-aos-duration="1500"
            >
                <h1 className="text-[22px] font-semibold leading-[160%] capitalize">
                    Join our weekly digest
                </h1>
                <p className="pt-[25px] text-[16px] font-normal leading-[140%] text-[#CCCCCC]">
                    Get exclusive promotions & updates straight to your inbox.
                </p>
                <form
                    action=""
                    id="form-footer"
                    className="flex flex-col pt-[40px]"
                >
                    <div className="relative md:w-[420px]">
                        <input
                            type="text"
                            name="email-footer"
                            id="email-footer"
                            placeholder="Enter your email here"
                            className=" placeholder:text-[#2b2b2b] lg:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[140%] lg:py-[18px] lg:px-[20px] py-[15px] px-[20px] rounded-[20px] text-black outline-none lg:w-full placeholder:text-[16px] md:py-4 md:w-[420px] w-full"
                        />
                        <button
                            id="btnSubmit"
                            type="submit"
                            form="form-footer"
                            onClick={HandleEmailFooter}
                            className="absolute rounded-[20px] items-center  top-0 right-0 md:py-4 bg-[#A259FF] px-[50px] h-full lg:flex md:flex hidden py-[14px]"
                        >
                            <span className="text-[16px] font-semibold leading-[140%]">
                                Subscribe
                            </span>
                        </button>
                    </div>
                    <button
                        id="btnSubmit"
                        type="submit"
                        form="form-footer"
                        onClick={HandleEmailFooter}
                        className=" rounded-[20px] mt-4 flex items-center justify-center gap-3 md:py-4 bg-[#A259FF]  h-full lg:hidden  px-[20px] md:hidden py-[15px]"
                    >
                        <img
                            src={email}
                            alt=""
                        />
                        <span className="text-[16px] font-semibold leading-[140%]">
                            Subscribe
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Footer;
