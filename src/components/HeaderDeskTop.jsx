import user from "../Assets/Header/User.svg";
import logo from "../Assets/Header/Logo.svg";
import burgermenu from "../Assets/Header/BurgerMenu.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function HeaderDeskTop() {
    const [click, setClick] = useState(false);
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const value = JSON.parse(localStorage.getItem("user"));
        if (value) {
            setUserName(value.name);
        }
    }, []);
    // setUserName(value);
    const handleMenuClick = () => {
        setClick(!click);
    };

    return (
        <div className="py-[20px] px-[50px] flex items-center justify-between text-white flex-wrap transition-all ">
            <Link
                to="/"
                className="flex items-center gap-3"
            >
                <img
                    src={logo}
                    alt="NFT Marketplace Logo"
                    className="size-[35px] object-cover"
                />
                <h1 className="lg:text-[18px] font-medium">NFT Marketplace</h1>
            </Link>
            <LazyLoadImage
                src={burgermenu}
                alt="Menu"
                id="burgerMenu"
                className={`lg:hidden block hover:cursor-pointer`}
                onClick={() => handleMenuClick()}
                effect="blur"
            ></LazyLoadImage>
            <ul
                className={`lg:flex lg:items-center lg:gap-3  duration-300 transition-all ${
                    click ? "flex openHeader" : "hidden"
                } lg:flex-row lg:w-auto flex flex-col w-full gap-5 py-5`}
            >
                <li className="px-[20px]">
                    <Link
                        to="/market-place"
                        className="hover:opacity-40 transition-all duration-200 lg:text-[18px] text-[20px]"
                    >
                        Marketplace
                    </Link>
                </li>
                <li className="px-[20px]">
                    <Link
                        to="/rankings"
                        className="hover:opacity-40 transition-all duration-200 lg:text-[18px] text-[20px]"
                    >
                        Rankings
                    </Link>
                </li>
                <li className="px-[20px]">
                    <Link
                        to="/connect-wallet"
                        className="hover:opacity-40 transition-all duration-200 lg:text-[18px] text-[20px]"
                    >
                        Connect a wallet
                    </Link>
                </li>
                <li className="px-[20px]  ">
                    <Link
                        to={userName ? "" : "/signup"}
                        className=" inline-block hover:scale-95 transition-all duration-300"
                    >
                        <button className="px-[30px] bg-[#A259FF] rounded-[20px] flex items-center gap-3 py-[16px] ">
                            <img
                                src={user}
                                alt="User"
                            />
                            <span className="lg:text-[17px] lg:font-semibold lg:leading-[140%] text-[20px]">
                                {userName ? userName : "Sign Up"}
                            </span>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HeaderDeskTop;
