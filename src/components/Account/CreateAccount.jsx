import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "../HeaderDeskTop";
import userIcon from "../../Assets/CreateAccount/User.svg";
import emailIcon from "../../Assets/CreateAccount/Mail.svg";
import passIcon from "../../Assets/CreateAccount/LockKey.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const CreateAccount = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullnameError, setFullnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    // Hàm xử lí submit và thông tin người dùng
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fullname
        if (fullname.length === 0) {
            setFullnameError("Full name cannot be empty");
        } else if (fullname.length < 5) {
            setFullnameError("Full name must be at least 5 characters long");
        } else {
            setFullnameError("");
        }

        // Validate email
        if (email.length === 0) {
            setEmailError("Email cannot be empty");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }

        // Validate password
        if (password.length === 0) {
            setPasswordError("Password cannot be empty");
        } else if (password.length < 5) {
            setPasswordError("Password must be at least 6 characters long");
        } else {
            setPasswordError("");
        }

        // Validate confirm password
        if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }

        // If all fields are valid, submit the form
        if (
            fullname.length >= 5 &&
            /\S+@\S+\.\S+/.test(email) &&
            password.length > 0 &&
            confirmPassword === password
        ) {
            const account = new FormData();
            account.append("entry.1900352762", fullname);
            account.append("entry.71494126", email);
            account.append("entry.648113495", password);
            postGoogleForrm(account);
            async function postGoogleForrm(data) {
                fetch(
                    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScn-ZPVNTvUjpBMsENQc7KUncc7dO4C2suf3TTF3_LrxeQqJA/formResponse",
                    {
                        method: "POST",
                        body: data,
                        mode: "no-cors",
                    }
                );
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        name: fullname,
                        email: email,
                        password: password,
                    })
                );

                setFullname("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                toast.success("Create account successfully!");

                setTimeout(() => {
                    navigate("/log-in");
                }, 2000);
            }
        }
    };
    useEffect(() => {
        window.scrollTo(50, 120);
        AOS.init({ once: false });
        AOS.refresh();
    }, []);

    return (
        <div className="bg-[#171719]">
            <Header />
            <div className="flex items-center justify-center bg-[#171719] py-[80px]">
                <div className="flex flex-col items-center p-[50px] bg-[#1e1e21] rounded-[15px] border border-[#3e3b3b]">
                    <h1
                        className="lg:text-[30px] font-medium lg:leading-[110%] capitalize text-[38px] leading-[120%] text-white"
                        data-aos="fade-left"
                        data-aos-duration="1200"
                    >
                        Create Account
                    </h1>
                    <p
                        className="lg:text-[18px] font-normal lg:leading-[160%] capitalize text-[16px] leading-[140%] pt-[20px] text-center text-[#454549] lg:text-start md:text-start"
                        data-aos="fade-left"
                        data-aos-duration="1200"
                    >
                        Welcome! Start creating, collecting, and selling NFTs.
                    </p>
                    <form
                        id="register-form"
                        onSubmit={handleSubmit}
                        className="form lg:py-[30px] md:py-[30px] pt-[30px]"
                        data-aos="fade-left"
                        data-aos-duration="1200"
                    >
                        <div className="relative form-group h-[80px]">
                            <input
                                type="text"
                                placeholder="Full Name"
                                id="fullname"
                                name="fullname"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                className={`px-[50px] lg:py-[14px] md:py-[14px] py-[16px] rounded-[15px] text-[#c5c5cf] w-[350px] outline-none border border-[#222222] shadow-md form-control bg-[#18181b]`}
                            />
                            <img
                                src={userIcon}
                                alt="User Icon"
                                className="absolute left-[20px] top-[33%] translate-y-[-50%]"
                            />
                            <p className="p-2 text-[12px] form-message text-[#f33a58]">
                                {fullnameError}
                            </p>
                        </div>
                        <div className="relative mt-1 form-group h-[80px]">
                            <input
                                type="text"
                                placeholder="Email Address"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`px-[50px] lg:py-[13px] md:py-[15px] py-[18px] rounded-[15px] text-[#c5c5cf] bg-[#18181b] w-[350px] outline-none form-control border border-[#222222] shadow-md`}
                            />
                            <img
                                src={emailIcon}
                                alt="Email Icon"
                                className="absolute left-[20px] top-[33%] translate-y-[-50%]"
                            />
                            <p className="text-[12px] p-2 form-message text-[#f33a58]">
                                {emailError}
                            </p>
                        </div>
                        <div className="relative mt-1 form-group h-[80px]">
                            <input
                                type={`${showPass ? "text" : "password"}`}
                                placeholder="Password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`px-[50px] lg:py-[13px] md:py-[15px] py-[18px] rounded-[15px] text-[#c5c5cf] bg-[#18181b] w-[350px] outline-none form-control border border-[#222222] shadow-md`}
                            />
                            <EyeSlashIcon
                                className={`size-[20px] text-gray-500 absolute right-[5%] top-[50%] translate-y-[-100%] hover:cursor-pointer ${
                                    showPass ? "hidden" : "block"
                                }`}
                                onClick={() => setShowPass(true)}
                            />
                            <EyeIcon
                                className={`size-[20px] text-gray-500 absolute right-[5%] top-[50%] translate-y-[-100%] hover:cursor-pointer ${
                                    showPass ? "block" : "hidden"
                                }`}
                                onClick={() => setShowPass(false)}
                            />
                            <img
                                src={passIcon}
                                alt="Password Icon"
                                className="absolute left-[20px] top-[33%] translate-y-[-50%]"
                            />
                            <p className="text-[12px] p-2 form-message text-[#f33a58]">
                                {passwordError}
                            </p>
                        </div>
                        <div className="relative mt-1 form-group h-[80px]">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                id="confirm-password"
                                name="confirm-password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                className={`px-[50px] lg:py-[13px] md:py-[15px] py-[18px] rounded-[15px] text-[#c5c5cf] bg-[#18181b] w-[350px] outline-none form-control border border-[#222222] shadow-md`}
                            />
                            <img
                                src={passIcon}
                                alt="Password Icon"
                                className="absolute left-[20px] top-[33%] translate-y-[-50%]"
                            />
                            <p className=" p-2 form-message text-[#f33a58]">
                                {confirmPasswordError}
                            </p>
                        </div>
                        <button
                            type="submit"
                            id="create-account"
                            className="flex items-center justify-center text-[16px] font-semibold leading-[140%] lg:py-[13px] md:py-[15px] py-[18px] rounded-[15px] bg-[#375dfb] w-[350px]  form-submit text-white"
                        >
                            Create Account
                        </button>
                        <Link to="/log-in">
                            <button className="flex items-center justify-center text-[16px] font-semibold leading-[140%] lg:py-[13px] md:py-[15px] py-[18px] rounded-[15px] bg-gray-600 w-[350px]  form-submit text-white mt-6">
                                Log in
                            </button>
                        </Link>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default CreateAccount;
