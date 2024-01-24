import React, { useRef, useState, useEffect } from "react";
import GradientBtn from "../common/GradientBtn";
import Slider from "react-slick";
import { animate, motion, useInView } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const BannerSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitText, setSubmitText] = useState("Submit!");
    const [errorMessage, setErrorMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //send data using api
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("data after submit:", e);

        if (!name) {
            setErrorMessage("Please enter Name");
        } else if (!email) {
            setErrorMessage("Please enter Email Address");
        } else if (!number) {
            setErrorMessage("Please enter Number");
        } else if (!subject) {
            setErrorMessage("Please enter Subject");
        } else if (!message) {
            setErrorMessage("Please enter Message");
        } else {
            setSubmitText("...");

            let data = {
                name,
                email,
                number,
                subject,
                message,
            };

            fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((res) => {
                console.log("Response received:", res);
                console.log("data:", data);

                if (res.status === 200) {
                    console.log("Response succeeded!");
                    setName("");
                    setEmail("");
                    setNumber("");
                    setSubject("");
                    setMessage("");
                    setSubmitText("Submitted");
                    setIsModalOpen(true);
                }
            });
        }
    };


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
            id: 3,
            imgSrc: "../home/banner-imageone.png",

        },
        {
            id: 4,
            imgSrc: "../home/banner-imagetwo.png",
        },
        {
            id: 5,
            imgSrc: "../home/banner-imagethree.png",
        },

    ];
    const settings = {
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="relative overflow-hidden">
            <Slider {...settings} className=" " ref={customeSlider}>
                {data.map((e, i) => (
                    <div key={i} className=" ">
                        <div
                            className="   md:h-screen h-[123vh] bg-no-repeat bg-cover md:bg-center bg-left-bottom"
                            style={{
                                backgroundImage: `url(${e.imgSrc})`,
                            }}
                        >
                        </div>

                    </div>
                ))}
            </Slider>
            {/* content and form start  */}
            <div className="absolute container top-0 w-full min-w-full md:grid grid-cols-5 gap-3 items-center justify-between  pt-36 md:px-16 px-5 mx-auto">
                <div className="text-white flex justify-center h-full flex-col  col-span-3 ">
                    <div className=" space-y-2">
                        <div className="space-y-2">
                            <motion.h2
                                className="text-[2.5rem] md:leading-[3rem]  font-extrabold"
                                variants={quote}
                                initial="initial"
                                animate="animate"
                            >
                                Step into a World of Celebration
                            </motion.h2>
                            <h3 className=" text-base pt-6 pb-0">
                                Welcome to Gurgaon Party offers , where we take pride in offering you the finest party venues in Gurugram. Whether you&apos;re planning an intimate gathering or a grand gala, our carefully selected venues guarantee a celebration that&apos;s nothing short of spectacular.<br /> Our mission is to ensure that your event is a memorable experience, regardless of its size or scope. We&apos;ve scoured Gurugram to handpick venues that not only meet but exceed your expectations.</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="pt-8">
                                <GradientBtn
                                    title="Contact Us Now"
                                    linkUrl="#contact-us"
                                />
                            </div>

                        </div>
                    </div>

                    {/* button start  */}
                    <div className="space-x-2 z-0 md:flex justify-start pt-10 pr-5  hidden ">
                        <button onClick={() => customeSlider.current.slickPrev()}>
                            <IoIosArrowBack
                                size={50}
                                className=" text-white  p-3  border rounded-full cursor-pointer bg-white/30"
                            />
                        </button>
                        <button onClick={() => customeSlider.current.slickNext()}>
                            <IoIosArrowForward
                                size={50}
                                className=" text-white rounded-full p-3 border cursor-pointer bg-white/30"
                            />
                        </button>
                    </div>
                    {/* button end  */}
                </div>
                <div className="col-span-2 md:pt-0 pt-10">
                    <div className="  p-3  md:py-0  bg-white/10 backdrop-blur-sm rounded-xl shadow">
                        <form>
                            <div className="pt-4 pb-4">

                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="outline-0 focus:text-[black] bg-transparent focus:bg-gray-10 w-[100%] border-b-[1px] py-3 px-2 border-white placeholder:text-white  text-white"
                                    placeholder="Your Name"
                                ></input>
                            </div>
                            <div className="pb-4">
                                <input
                                    type="text"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="outline-0 focus:text-[black] bg-transparent focus:bg-gray-10 w-[100%] border-b-[1px] py-3 px-2 border-white placeholder:text-white  text-white"
                                    placeholder="Email Address"
                                ></input>
                            </div>

                            <div className="">
                                <input
                                    type="text"
                                    name="Number"
                                    onChange={(e) => setNumber(e.target.value)}
                                    className="outline-0 focus:text-[black] bg-transparent focus:bg-gray-10 w-[100%] border-b-[1px] py-3 px-2 border-white placeholder:text-white  text-white"
                                    placeholder="Phone Number"
                                ></input>
                            </div>
                            <div className="pt-4 pb-2">
                                <input
                                    type="text"
                                    name="subject"
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="outline-0 focus:text-[black] bg-transparent focus:bg-gray-10 w-[100%] border-b-[1px] py-3 px-2 border-white placeholder:text-white  text-white"
                                    placeholder="Subject"
                                ></input>
                            </div>

                            <div className="pt-4 pb-2">
                                <input
                                    type="textarea"
                                    name="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="outline-0 focus:text-[black] bg-transparent focus:bg-gray-10 w-[100%] border-b-[1px] py-3 px-2 border-white placeholder:text-white  text-white"
                                    placeholder="Message"
                                ></input>
                            </div>


                            <div className="text-left pt-5 pb-5">
                                {errorMessage ? (
                                    <p className="text-sm text-red-500">{errorMessage}</p>
                                ) : (
                                    ""
                                )}
                                <button
                                    type="submit"
                                    onClick={(e) => {
                                        handleSubmit(e);
                                    }}
                                    className="border-2 border-primary bg-white rounded-full text-primary py-3 px-10 w-fit"
                                >
                                    {submitText}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* content and form end  */}
        </div>
    )
}

export default BannerSection