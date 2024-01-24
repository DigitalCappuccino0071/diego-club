import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import UnderlineText from "../common/UnderlineText";
import TitleText from "../common/TitleText";
import SectionButton from "../common/SectionButton";

const AboutUs = () => {

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
        <div className="md:py-16 py-8" id="about-us">
            <div className="md:grid grid-cols-2 md:gap-12 items-start justify-between container space-y-8">
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
                    src="/home/aboutimage.png"
                    alt=""
                    className="rounded-md md:h-[470px] h-[300px] w-full object-cover"
                />
                <div className="">
                    <UnderlineText title="About Us" />
                    <TitleText title="" />
                    <div className="py-4">
                        <p className=" w-full text-[1.1rem] text-textcolor text-justify  tracking-tighter font-text pb-2">
                        Greetings, party enthusiasts! Welcome to Diego Club for all things fun in Gurugram.  Diego Club in Gurgaon is the ultimate guide to the best in entertainment. Immerse yourself in the best social scene of our city. Join us on this thrilling journey as we continue to present the most sensational gatherings or vibrant nightlife in Gurgaon. Whether you&apos;re a seasoned partygoer or someone looking to dip their toes into the city&apos;s vibrant social scene, Diego Club is your passport to the very best. Stay tuned for updates on the latest events and the most exclusive party offers.

                            


                        </p>

                        <p className=" w-full text-[1.1rem] text-textcolor text-justify tracking-tighter  font-text pb-10">

                        Book your table for the most exciting parties and events in town and let the celebration begin!



                        </p>

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

export default AboutUs