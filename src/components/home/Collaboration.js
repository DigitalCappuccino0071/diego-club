import React, { useRef } from "react";
import GradientBtn from "../common/GradientBtn";
import Slider from "react-slick";
import { animate, motion, useInView } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import TitleText from "../common/TitleText";

const Collaboration = () => {
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
            imgSrc: "../home/clubone.png",
            title:"Zorro - The Luxury Night Club",
        },
        {
            id: 2,
            imgSrc: "../home/clubtwo.png",
            title:"Walking Street",
        },
        {
            id: 3,
            imgSrc: "../home/clubthree.png",
            title:"Lost Lemons",

        },
        {
            id: 4,
            imgSrc: "../home/clubfour.png",
            title:"Big Boyz Lounge Air Bar",
        },
        {
            id: 5,
            imgSrc: "../home/clubfive.png",
            title:"Friction The Drinkery",
        },
        {
            id: 6,
            imgSrc: "../home/clubsix.png",
            title:"Feel Alive",

        },
        {
            id: 7,
            imgSrc: "../home/clubseven.png",
            title:"Decode Air Bar",
        },
        {
            id: 8,
            imgSrc: "../home/clubeight.png",
            title:"Michigan Taps",
        },
     

    ];
    const settings = {
        centerMode: true,
        slidesToShow: 4,
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
    <div className="md:pt-16 pt-8" id="our-services">

    <div className="space-y-4 container">
        <div className="w-fit md:mx-auto">
            <UnderlineTextCenter title="Our Collaborations" />
        </div>
        <div className=" mx-auto md:text-center ">
            <TitleText title="Partnering for a Toast-worthy Experience" />
        </div>
        <p className="md:w-[90%] md:mx-auto text-lg text-textcolor md:text-center  text-justify tracking-tighter font-text pb-2 ">
        Partying is all about coming together, and we love making connections that matter. Our journey has been fueled by incredible collaborations with top-notch bars, entertainment venues, and event experts in town. These partnerships infuse our events with energy, creativity, and a whole lot of fun. Join us in creating unforgettable memories as we celebrate together. Cheers to the good times!

        </p>
    </div>
    <Slider {...settings} className="h-full relative px-0 container" ref={customeSlider}>
        {data.map((e, i) => (
            <div key={i} className="relative pt-7 px-3 ">
                <div
                    className="  relative md:rounded-xl  rounded-2xl md:h-[60vh] h-[40vh] bg-no-repeat bg-cover md:bg-center bg-bottom"
                    style={{
                        backgroundImage: `url(${e.imgSrc})`,
                    }}
                >
                    <div className="text-white flex justify-end pb-10 h-full flex-col  container ">
                        <div className=" space-y-2">
                            <div className="space-y-2">
                                <motion.h2
                                    className=" text-2xl font-extrabold"
                                    variants={quote}
                                    initial="initial"
                                    animate="animate"
                                >
                                    {e.title}
                                </motion.h2>
                               
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

export default Collaboration