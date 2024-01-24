"use client";
import React, { useEffect, useState } from "react";
import GradientBtn from "./GradientBtn";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
// import logoImg from "@/public/images/logo.png"
// import Image from "next/image";
const Navbar = ({ bgcolor }) => {
    // setting mobile nav
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // close menu on click
    const closeMenu = () => setClick(false);

    // change nav color when scrolling
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <div
            className={`header bg-black shadow-md z-50  ${scrolled ? "bg-black" : ""}`}
        >
            <nav className="navbar container ">
                <div className="flex md:justify-between items-center w-full md:space-x-12 ">
                    <Link href="/" className="logo">
                        {scrolled ? (
                            // <img
                            //     src="/home/logo-party-white.png"
                            //     alt="logo"
                            //     className="cursor-pointer w-32"
                            // />
                            <p className="font-bold text-xl text-white">
                                Diego Club
                            </p>
                        ) : (
                            // <img
                            //     src="/home/logo-party-white.png"
                            //     alt="logo"
                            //     className="cursor-pointer w-32"
                            // />
                            <p className="font-bold text-xl text-white">
                                Diego Club
                            </p>
                        )}
                    </Link>

                    <ul
                        className={
                            click ? "nav-menu active md:space-y-0 space-y-0 py-5" : "nav-menu"
                        }
                    >
                        <Link href="/">
                            <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk text-white hover:text-secondary  group relative cursor-pointer">
                                Home
                            </li>
                        </Link>
                        {/* for mobile start */}
                        <li className="md:hidden block">
                            <Link
                                href="/"
                                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
                            >
                                <span className="w-2 h-2 bg-black"></span>
                                <p className="">Home</p>
                            </Link>
                        </li>
                        {/* for mobile end */}
                        <Link href="#about-us">
                            <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk text-white hover:text-secondary  group relative cursor-pointer">
                                About Us
                            </li>
                        </Link>
                        {/* for mobile start */}
                        <li className="md:hidden block">
                            <Link
                                href="/"
                                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
                            >
                                <span className="w-2 h-2 bg-black"></span>
                                <p className="">About Us</p>
                            </Link>
                        </li>
                        {/* for mobile end */}
                        {/* <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk  text-white hover:text-secondary group relative cursor-pointer">
                            Our Products
                            <span>
                                <FiChevronDown
                                    className="text-white group-hover:text-secondary mt-1"
                                    size={18}
                                />
                            </span>
                            <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-10 md:-left-10 ">
                                <div className="top-0 bg-white p-2 shadow-lg shadow-black/30 text-white w-60 flex flex-col ">
                                    <Link
                                        href="cables"
                                        className=" hover:bg-black hover:text-white   px-4 py-3"
                                    >
                                        Cables
                                    </Link>
                                    <Link
                                        href="blinkers"
                                        className=" hover:bg-black hover:text-white py-3    px-4"
                                    >
                                        Blinkers
                                    </Link>
                                    <Link
                                        href="filters"
                                        className=" hover:bg-black hover:text-white   px-4 py-3"
                                    >
                                        Filters
                                    </Link>
                                </div>
                            </div>
                        </li> */}
                        {/* for mobile start */}{" "}
                        {/* <li className="md:hidden block mx-4 border-b border-b-secondary">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className=" flex items-center py-4 px-2   font-semibold space-x-2 w-full">
                                            <span className="w-2 h-2 bg-black mr-2"></span>
                                            Our Products
                                            <MdKeyboardArrowDown
                                                className={
                                                    open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                                                }
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-500 px-10  bg-gradient-to-l from-secondary/10 to-secondary/50">
                                            <div className=" text-black space-y-4  rounded py-4 flex flex-col underline underline-offset-4">
                                                <Link
                                                    href="/cables"
                                                    className=" font-semibold hover:text-black text-sm  py-2 w-full"
                                                >
                                                    Cables
                                                </Link>
                                                <Link
                                                    href="/blinkers"
                                                    className=" font-semibold hover:text-black  py-2 text-sm w-full"
                                                >
                                                    Blinkers
                                                </Link>
                                                <Link
                                                    href="/filters"
                                                    className=" font-semibold hover:text-black text-sm  py-2 w-full"
                                                >
                                                    Filters
                                                </Link>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </li>{" "} */}
                        {/* for mobile end */}

                        <Link href="#our-services">
                            <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk text-white hover:text-secondary  group relative cursor-pointer">
                                Our Services
                            </li>
                        </Link>
                        {/* for mobile start */}
                        <li className="md:hidden block">
                            <Link
                                href="/"
                                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
                            >
                                <span className="w-2 h-2 bg-black"></span>
                                <p className="">Categories</p>
                            </Link>
                        </li>
                        {/* for mobile end */}


                        <Link href="#collaboration">
                            <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk text-white hover:text-secondary  group relative cursor-pointer">
                                Collaborations
                            </li>
                        </Link>
                        {/* for mobile start */}
                        <li className="md:hidden block">
                            <Link
                                href="/"
                                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
                            >
                                <span className="w-2 h-2 bg-black"></span>
                                <p className="">Collaborations</p>
                            </Link>
                        </li>
                        {/* for mobile end */}

                        <Link href="#gallery">
                            <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk text-white hover:text-secondary  group relative cursor-pointer">
                                Gallery
                            </li>
                        </Link>
                        {/* for mobile start */}
                        <li className="md:hidden block">
                            <Link
                                href="/"
                                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
                            >
                                <span className="w-2 h-2 bg-black"></span>
                                <p className="">Gallery</p>
                            </Link>
                        </li>
                        {/* for mobile end */}


                        <Link href="#contact-us">
                            <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk text-white hover:text-secondary  group relative cursor-pointer">
                                Contact Us
                            </li>
                        </Link>
                        {/* for mobile start */}
                        <li className="md:hidden block">
                            <Link
                                href="/"
                                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
                            >
                                <span className="w-2 h-2 bg-black"></span>
                                <p className="">Contact Us</p>
                            </Link>
                        </li>
                        {/* for mobile end */}

                    </ul>

                    <span className="md:block hidden">
                        {" "}
                        <Link
                            href="#"
                            className=" w-fit shadow-md flex space-x-2 px-3 py-1 rounded-full items-center justify-between bg-white"
                        >
                            <img src="/home/call.png" alt="" />
                            <span className="font-semibold"> +91-9876543219</span>
                        </Link>
                    </span>
                </div>
                <div className=" md:hidden block">
                    {" "}
                    <Link
                        href="#"
                        className=" shadow-md flex space-x-2 px-3 py-3 rounded-full items-center justify-between bg-white w-[180px]"
                    >
                        <img src="/home/call.png" alt="" className="w-6 h-6" />
                        <span className="font-semibold"> +91-9876543219</span>
                    </Link>
                </div>
                {/* <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: "#fff" }} />
                    ) : (
                        <FaBars size={30} style={{ color: "#fff" }} />
                    )}
                </div> */}
            </nav>
            {bgcolor ? (
                <hr
                    className={
                        scrolled ? "bg-black text-black" : "bg-black  w-[93%] mx-auto"
                    }
                />
            ) : null}
        </div>
    );
};

export default Navbar;
