import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const TitleText = ({ title }) => {


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            if (window.innerWidth < 720) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
    <motion.h2
        ref={ref}
        initial={
            isMobile
                ? { scale: isInView ? 1 : 0, opacity: isInView ? 0 : 1 }
                : { scale: isInView ? 1 : 0, opacity: isInView ? 0 : 1 }
        }
        animate={
            isMobile
                ? { scale: isInView ? 1 : 0.7, opacity: isInView ? 1 : 0 }
                : { scale: isInView ? 1 : 0.7, opacity: isInView ? 1 : 0 }
        }
        transition={{ duration: 1 }}
        className="md:text-[2.5rem] text-3xl font-bold text-black">{title}</motion.h2>
        )
};

export default TitleText;
