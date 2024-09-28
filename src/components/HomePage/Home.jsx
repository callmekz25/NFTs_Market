import "../../App.css";
import { ToastContainer } from "react-toastify";
import Header from "../HeaderDeskTop.jsx";
import Section from "../Section/Section.jsx";
import Collection from "../Collection.jsx";
import Top from "../Top.jsx";
import Category from "../Category.jsx";
import Discover from "../Discover.jsx";
import Banner from "../Banner.jsx";
import How from "../How.jsx";
import Sub from "../Subcribe.jsx";
import Footer from "../Footer.jsx";
import { useEffect } from "react";
import useAOS from "../useAos/useAOS.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useAOS();
    useEffect(() => {
        window.scroll(0, 0);
        AOS.refresh();
    }, []);
    return (
        <div className="App bg-[#2B2B2B] text-white  overflow-hidden">
            <Header />
            <div className="lg:px-[150px] md:px-[70px] px-[30px]">
                <Section />
                <Collection />
                <Top />
                <Category />
                <Discover />
            </div>
            <Banner />
            <div className="lg:px-[150px] md:px-[70px] px-[30px]">
                <How />
                <Sub />
            </div>
            <div className="lg:px-[150px] md:px-[70px] px-[30px] bg-[#3b3b3b]">
                <Footer />
            </div>
            <ToastContainer />
        </div>
    );
}

export default Home;
