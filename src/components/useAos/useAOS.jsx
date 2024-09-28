import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function useAOS() {
    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh();
    }, []);
}

export default useAOS;
