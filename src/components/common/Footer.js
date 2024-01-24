import Link from "next/link";
import React from "react";
import { ImLocation } from "react-icons/im";
import { FaFacebookF, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const data = [
        {
            id: 1,
            icon: <FaFacebookF />,
            href: "#",
        },
        {
            id: 2,
            icon: <FaInstagram />,
            href: "#",
        },
        {
            id: 3,
            icon: <FaLinkedin />,
            href: "#",
        },
        {
            id: 4,
            icon: <FaXTwitter />,
            href: "#",
        },
    ];
    return (
        <div className="bg-third ">
            <div className="mt-6 relative  md:mt-12 bg-[#1E1E1E]">
                <div className="container ">
                    <div className="pt-12">
                        <div className=" md:grid grid-cols-4 md:gap-12 gap-4 md:px-0  pb-12">
                            <div className="  space-y-4  col-span-2">
                                <Link href="/">
                                    <div>
                                        {/* <img src="/home/logo-party-white.png" className="w-48" /> */}
                                        <p className="font-bold text-xl text-white">
                                            Diego Club
                                        </p>
                                    </div>
                                </Link>
                                <p className="text-white">Where Every Celebration Begins...</p>
                                <p className=" pt-1 text-base text-white text-justify  md:tracking-tight  tracking-tighter  leading-relaxed ">
                                    Each step of our adventure has mirrored the vivacious spirit of Gurugram, with every night out serving as a tribute to the vibrant tapestry of life in this remarkable city.

                                </p>
                                <div>
                                    {/* <ul className="flex space-x-4  pt-3">
                                        {data.map((e, i) => (
                                            <li key={i} className="flex space-x-5">
                                                <Link
                                                    href={e.href}
                                                    target="_blank"
                                                    className="hover:scale-110 duration-200 w-8  rounded-full bg-white p-2"
                                                >
                                                    {e.icon}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul> */}
                                    <p className="text-white font-semibold">
                                       <p className="font-bold  text-lg">Address :</p>  4th Floor, Park, Sco 16-17, near Leisure Valley Road, Sector 29, Gurugram, Haryana 122009
                                    </p>
                                </div>
                            </div>
                            <div className=" flex space-x-40 col-span-2 justify-left pt-10 md:pt-0">

                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-white capitalize underline underline-offset-8 decoration-secondary">
                                        Quick Links
                                    </h2>
                                    <ul className="">
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">Home
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">About Us
                                                </span>
                                            </li>
                                        </Link>

                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">Collaborations
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">Categories
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">Gallery
                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">Contact us
                                                </span>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-white capitalize underline underline-offset-8 decoration-secondary">
                                        Support
                                    </h2>
                                    <ul className="">
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className=""> Terms & Condition

                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">Privacy Policy

                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">Cookies

                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">Feedback

                                                </span>
                                            </li>
                                        </Link>
                                        <Link href="/">
                                            <li className="text-base text-white hover:text-secondary mt-2">
                                                <span className="">Refund Policy
                                                </span>
                                            </li>
                                        </Link>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="h-[1px] bg-primary text-primary" />
                        <div className="text-center py-3 text-white text-base md:px-0 px-5">
                            <p>
                                {" "}
                                Copyright © 2024 |
                                <span className="font-semibold px-2">
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
