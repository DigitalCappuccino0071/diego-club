import React, { useRef } from "react";
import GradientBtn from "../common/GradientBtn";
import Slider from "react-slick";
import { animate, motion, useInView } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import TitleText from "../common/TitleText";
const Services = () => {

    const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });
    const customeSlider = useRef();
    const quote = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5,
            },
        },
    };

    const data = [
        {
            id: 1,
            imgSrc: "../home/service-imagetwo.png",
            title:"Bachelors Party",
            subtxt:"Celebrate your transition to a new chapter of life with an unforgettable bachelor's party.  It's the perfect way to bid farewell to singlehood.",
        },
        {
            id: 2,
            imgSrc: "../home/service-imagethree.png",
            title:"Freshers Party",
            subtxt:"Celebrate the start of one’s journey for a new phase in life and create bonds that will last a lifetime.",
        },
        {
            id: 3,
            imgSrc: "../home/corporate.png",
            title:"Corporate Party",
            subtxt:"Build team bonding, achieve milestones and celebrate success together. We’re here for you to have memorable experiences.",

        },
        {
            id: 4,
            imgSrc: "../home/birthday.png",
            title:"Birthday Party",
            subtxt:"From kids parties to milestone birthdays, we offer the best to celebrate one’s birthday and make memories.",
        },
       
        {
            id: 5,
            imgSrc: "../home/service-imageone.png",
            title:"Anniversary Party",
            subtxt:"Create memorable moments with your partner and reflect on the journey of togetherness and commitment.",

        },
       
     

    ];
    const settings = {
        className: "center",
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        arrows: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 2000,
        lazyLoad: true,
        accessibility: true,
        cssEase: "ease-out",
        swipeToSlide: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <div className="" id="our-services">

            <div className="space-y-4 container">
                <div className="w-fit md:mx-auto">
                    <UnderlineTextCenter title="Our Services" />
                </div>
                <div className=" mx-auto md:text-center ">
                    <TitleText title="Raise Your Glass to Our Services" />
                </div>
            </div>
            <Slider {...settings} className="h-full relative px-0" ref={customeSlider}>
                {data.map((e, i) => (
                    <div key={i} className="relative pt-7 px-4 ">
                        <div
                            className="  relative rounded-xl md:h-[60vh] h-[45vh] bg-no-repeat bg-cover md:bg-center bg-bottom"
                            style={{
                                backgroundImage: `url(${e.imgSrc})`,
                            }}
                        >
                            <div className="text-white flex justify-end h-full flex-col pb-10 container ">
                                <div className=" space-y-2">
                                    <div className="space-y-2">
                                        <motion.h2
                                            className=" text-3xl md:leading-[3rem]  font-extrabold"
                                            variants={quote}
                                            initial="initial"
                                            animate="animate"
                                        >
                                            {e.title}
                                        </motion.h2>
                                        <h3 className=" ">
                                            {e.subtxt}
                                        </h3>
                                    </div>
                                    {/* <div className="space-y-6">
                                        <div className="pt-8">
                                            <GradientBtn
                                                title="Know More"
                                                linkUrl="#"
                                            />
                                        </div>

                                    </div> */}
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </Slider>
            {/* button start  */}
            <div className="space-x-2 z-40 flex justify-center pt-8">
                <button onClick={() => customeSlider.current.slickPrev()}>
                    <IoIosArrowBack
                        size={50}
                        className=" text-primary  p-3  border border-primary rounded-full cursor-pointer bg-white/30"
                    />
                </button>
                <button onClick={() => customeSlider.current.slickNext()}>
                    <IoIosArrowForward
                        size={50}
                        className=" text-primary rounded-full p-3 border border-primary cursor-pointer bg-white/30"
                    />
                </button>
            </div>
            {/* button end  */}
        </div>
    )
}

export default Services