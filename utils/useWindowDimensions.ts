import { useEffect, useState } from "react";

export default function useWindowDimensions() {
    const hasWindow = typeof window !== "undefined";

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            window.addEventListener("resize", () => setWindowDimensions(getWindowDimensions()));
            return () => window.removeEventListener("resize", () => setWindowDimensions(getWindowDimensions()));
        }
    }, [hasWindow]);

    return windowDimensions;
}
