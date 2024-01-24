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
                    <TitleText title="Sip Back and Learn About Us" />
                    <div className="py-4">
                        <p className=" w-full text-[1.1rem] text-textcolor text-justify  tracking-tighter font-text pb-2">
                            Hey there, partygoers and event enthusiasts! Welcome to the ultimate hub for all things fun in Gurugram. We are your go-to source for discovering, celebrating, and experiencing the hottest parties and events in town.

                            Party enthusiasts and event seekers! We&apos;re thrilled to introduce you to the premier destination for all things entertainment in Gurugram. You&apos;ve just discovered your ultimate resource for uncovering, indulging in, and immersing yourself in the hottest parties and events in our city.


                        </p>

                        <p className=" w-full text-[1.1rem] text-textcolor text-justify tracking-tighter  font-text pb-10">

                            Our story is one marked by an unwavering commitment to Gurugram&apos;s bustling nightlife and amazing social scene. We are a collective of like-minded individuals who share your fervor for seizing every opportunity for joy. [Gurgaon Party Offers] was born as a spark of inspiration among friends determined to unite people through the shared delight of celebration. It has since blossomed into the pulsating heart of Gurugram&apos;s social milieu.


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