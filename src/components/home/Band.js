import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from "framer-motion";
const Band = () => {

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

    const data = [
        {
            id: 1,

            icon: "/home/icon1.png",
            title: "Corporate Party",
            des: "Celebrate success and foster team bonding with our corporate party packages. Whether it's a year-end bash or a milestone achievement, we've got you covered.",
        },
        {
            id: 2,

            icon: "/home/icon2.png",
            title: "Birthday Party",
            des: "Make memories that last a lifetime with a birthday celebration at our venue. From kids' parties to milestone birthdays, we create the perfect setting for your special day.",
        },
        {
            id: 3,

            icon: "/home/icon3.png",
            title: "Fresher Party",
            des: "Welcome new faces and build friendships with a freshers' party. It's the perfect way to kickstart the academic year or a new phase in life.",
        },
        {
            id: 4,

            icon: "/home/icon4.png",
            title: "Bachelorette Party",
            des: "Bid farewell to the single life with an epic bachelor's party. Our venue ensures a night of fun and camaraderie with your closest friends.",
        },
    ];

    return (
        <div className=' '>
            <div className="relative  bg-no-repeat bg-cover md:bg-center bg-bottom"
                style={{
                    backgroundImage: ' url("/home/band.png")',
                }}>
                <div className="container md:px-0 px-3">
                    <div className=" md:grid grid-cols-4 justify-start gap-10 md:space-y-0 space-y-4">
                        {data.map((e, i) => (
                            <motion.div
                                ref={ref}
                                initial={
                                    isMobile
                                        ? { y: 0, opacity: 1 }
                                        : { y: isInView ? 150 : 0, opacity: isInView ? 0 : 1 }
                                }
                                animate={
                                    isMobile
                                        ? { y: 0, opacity: 1 }
                                        : { y: isInView ? 0 : 150, opacity: isInView ? 1 : 0 }
                                }
                                transition={{ duration: 1 }}
                                key={i}
                                className=" md:py-12 py-8 "
                            >
                                <div>
                                    <img src={e.icon} alt="" className="w-16" />
                                </div>
                                <div className="pt-2">
                                    <span className="text-white font-bold text-lg text-center">
                                        {e.title}
                                    </span>
                                    {/* <hr className="h-[3px] w-[30%] bg-gradient-to-t from-primary to-secondary" /> */}
                                    <p className="pt-2 text-[15px] text-justify text-white tracking-tighter">{e.des}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Band