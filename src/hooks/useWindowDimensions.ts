import { useEffect, useState } from "react";

const useWindowDimensions = () => {
    const getWindowDimensions = () => ({ width: window.innerWidth, height: window.innerHeight });
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const handleResize = () => setWindowDimensions(getWindowDimensions());

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
