import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import UnderlineText from "../common/UnderlineText";
import TitleText from "../common/TitleText";

const ServiceText = () => {

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
        <div className="py-12" id="">
            <div className="grid md:grid-cols-2 md:gap-16 items-center justify-between container space-y-8">
            <motion.img
                    ref={ref}
                    initial={
                        isMobile
                            ? { scale: isInView ? 1 : 0, opacity: isInView ? 0 : 1 }
                            : { scale: isInView ? 1 : 0, opacity: isInView ? 0 : 1 }
                    }
                    animate={
                        isMobile
                            ? { scale: isInView ? 1 : 0.5, opacity: isInView ? 1 : 0 }
                            : { scale: isInView ? 1 : 0.5, opacity: isInView ? 1 : 0 }
                    }
                    transition={{ duration: 1 }}
                    src="/home/collaborationimage.png"
                    alt=""
                    className="rounded-xl md:h-[420px] h-[300px]  w-full object-cover md:order-2"
                />
                <div className="">
                    <UnderlineText title="Our Services" />
                    <TitleText title="Cheers to Our Exceptional Service Excellence!" />
                    <div className="py-8">
                        <p className=" w-full text-[1.1rem] text-textcolor text-justify  tracking-tighter font-text pb-2">
                        Gurugram Party Offers is dedicated to creating unforgettable moments for all your celebrations. We take pride in providing exclusive party spaces where you and your guests can relax and have a great time. Whether it&apos;s a birthday bash or a corporate get-together, we custom-tailor our parties to meet your specific requirements, ensuring a fantastic experience for everyone involved.

What sets us apart is our commitment to ensuring you have a full 3 hours of non-stop enjoyment. We believe in making your celebration memorable and hassle-free. You won&apos;t need to worry about the logistics, decorations, or entertainment; we take care of it all. Our goal is to let you and your guests focus on having a blast while we handle the rest.                        </p>

                        {/* <SectionButton 
                        title="Know More !" 
                        linkUrl="#"
                        /> */}
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default ServiceText