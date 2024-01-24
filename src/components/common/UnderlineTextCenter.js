import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const UnderlineTextCenter = ({ title, widthSize }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const quote = {
        initial: {
            opacity: isInView ? 0 : 0,
            scale: isInView ? 0 : 2,
        },
        animate: {
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0,
            transition: {
                duration: isInView ? 0.5 : 0,
                delay: isInView ? 0.5 : 0,
            },
        },
    };
    return (
        <div className="space-y-2 flex items-center w-fit text-center justify-center md:mx-auto">
            <span className=" font-s-normal font-semibold md:text-2xl text-lg text-secondary md:text-center text-left w-full ">
                {title}
            </span>
            <motion.div
                ref={ref}
                variants={quote}
                initial="initial"
                animate="animate"
                className=" h-[3px] w-20 bg-gradient-to-r  from-secondary to-primary "
            />
        </div>
    );
};

export default UnderlineTextCenter;
