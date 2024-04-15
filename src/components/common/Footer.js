import Link from "next/link";
import React from "react";
import { ImLocation } from "react-icons/im";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const data = [
        {
            id: 2,
            icon: <FaInstagram />,
            href: "https://www.instagram.com/diegoclubgurgaon/",
        },
    ];
    return (
        <div className="bg-third ">
            <div className="mt-6 relative  md:mt-12 bg-[#1E1E1E]">
                <div className="container ">
                    <div className="pt-12">
                        <div className="grid-cols-4 gap-4 pb-12 md:grid md:gap-12 md:px-0">
                            <div className="col-span-2 space-y-4 ">
                                <Link href="/">
                                    <div>
                                        {/* <img src="/home/logo-party-white.png" className="w-48" /> */}
                                        <p className="text-xl font-bold text-white">
                                            Diego Club
                                        </p>
                                    </div>
                                </Link>
                                <p className="text-white">
                                    Where Every Celebration Begins...
                                </p>
                                <p className="pt-1 text-base leading-relaxed tracking-tighter text-justify text-white md:tracking-tight">
                                    Each step of our adventure has mirrored the
                                    vivacious spirit of Gurugram, with every
                                    night out serving as a tribute to the
                                    vibrant tapestry of life in this remarkable
                                    city.
                                </p>
                                <div>
                                    <ul className="flex pt-3 space-x-4">
                                        {data.map((e, i) => (
                                            <li
                                                key={i}
                                                className="flex space-x-5"
                                            >
                                                <Link
                                                    href={e.href}
                                                    target="_blank"
                                                    className="w-8 p-2 duration-200 bg-white rounded-full hover:scale-110"
                                                >
                                                    {e.icon}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="font-semibold text-white">
                                        <p className="text-lg font-bold">
                                            Address :
                                        </p>{" "}
                                        4th floor, South City I, Leisure Valley
                                        Rd, Sector 29, Gurugram, Haryana 122009
                                    </p>
                                    <p className="flex items-center pt-5 space-x-4 font-semibold text-white">
                                        <p className="text-lg font-bold">
                                            Contact Us :
                                        </p>{" "}
                                        <Link
                                            href="tel:9090353516"
                                            className="flex items-center justify-between px-3 py-1 space-x-2 bg-white rounded-full shadow-md w-fit"
                                        >
                                            <img src="/home/call.png" alt="" />
                                            <span className="font-semibold text-black">
                                                {" "}
                                                +91-9090353516
                                            </span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="flex col-span-2 pt-10 space-x-40 justify-left md:pt-0">
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-white underline capitalize underline-offset-8 decoration-secondary">
                                        Quick Links
                                    </h2>
                                    <ul className="">
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">Home</span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    About Us
                                                </span>
                                            </li>
                                        </Link>

                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    Collaborations
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    Categories
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    Gallery
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    Contact us
                                                </span>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-white underline capitalize underline-offset-8 decoration-secondary">
                                        Support
                                    </h2>
                                    <ul className="">
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    {" "}
                                                    Terms & Condition
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    Privacy Policy
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    Cookies
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    Feedback
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="mt-2 text-base text-white hover:text-secondary">
                                                <span className="">
                                                    Refund Policy
                                                </span>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="h-[1px] bg-primary text-primary" />
                        <div className="px-5 py-3 text-base text-center text-white md:px-0">
                            <p>
                                {" "}
                                Copyright © 2024 |
                                <span className="px-2 font-semibold">
                                    Diego Club
                                </span>
                                | All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
