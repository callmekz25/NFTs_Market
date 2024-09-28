import image from "../Assets/Subscribe/Photo.webp";
import email from "../Assets/Subscribe/EnvelopeSimple.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HandleEmail = () => {
    const email = document.querySelector("#email");
    const form = document.querySelector("#form");
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
const Sub = () => {
    return (
        <div className="lg:py-[80px] py-[40px]">
            <div className="lg:p-[60px] md:p-[40px] lg:bg-[#3B3B3B] md:bg-[#3B3B3B] rounded-[20px] flex lg:flex-row md:flex-row flex-col lg:gap-[80px] gap-[30px]">
                <div
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <img
                        src={image}
                        alt=""
                        className="lg:size-auto md:w-[250px] md:h-[300px] object-cover rounded-[20px] h-[255px]"
                    />
                </div>
                <div className="flex flex-col justify-between lg:py-[10px]  md:pt-0 ">
                    <div className="flex flex-col gap-[10px] ">
                        <h1
                            className="lg:text-[38px] font-semibold lg:leading-[120%] capitalize text-[28px]"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                        >
                            Join our weekly digest
                        </h1>
                        <p
                            className="lg:text-[22px] font-normal lg:leading-[160%] capitalize text-[16px]"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                        >
                            Get exclusive promotions & updates straight to your
                            inbox.
                        </p>
                    </div>
                    <form
                        action=""
                        id="form"
                        className="flex flex-col pt-[40px]"
                        data-aos="fade-left"
                        data-aos-duration="1500"
                    >
                        <div className="lg:relative ">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter your email here"
                                className=" placeholder:text-[#2b2b2b] lg:placeholder:text-[16px] placeholder:font-normal placeholder:leading-[140%] lg:py-[18px] lg:px-[20px] py-[12px] px-[20px] rounded-[20px] text-black outline-none w-full placeholder:text-[16px] md:py-4"
                            />
                            <button
                                id="btnSubmit"
                                type="submit"
                                form="form"
                                onClick={HandleEmail}
                                className="absolute rounded-[20px]  items-center gap-3 top-0 right-0 bg-[#A259FF] px-[80px] py-3 h-full lg:flex hidden md:py-4"
                            >
                                <img
                                    src={email}
                                    alt=""
                                />
                                <span className="text-[16px] font-semibold leading-[140%]">
                                    Subscribe
                                </span>
                            </button>
                        </div>
                        <button
                            id="btnSubmit"
                            type="submit"
                            form="form"
                            onClick={HandleEmail}
                            className=" rounded-[20px] mt-4 flex items-center justify-center gap-3 md:py-4  bg-[#A259FF] h-full lg:hidden py-3 px-[20px]"
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
        </div>
    );
};
export default Sub;
