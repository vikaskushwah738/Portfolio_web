'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import NavLink from './NavLink';
import { IoMdCloseCircleOutline, IoMdMenu } from "react-icons/io";
import MenuNavbar from './MenuNavbar';

const navLinks = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About",
        link: "#about"
    },
    {
        title: "Contact",
        link: "#contact"
    },
    {
        title: "Project",
        link: "#project"
    }
]
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='bg-opacity-100 fixed top-0 right-0 left-0 z-10'>
            <div className='flex flex-wrap w-full items-center bg-[#121212]
      justify-between mx-auto h-16 md:px-12 px-5 cursor-pointer'>
                <Link href={"/"}
                    className='text-lg md:text-xl text-white font-semibold '>
                    <i>Vikas</i>
                </Link>
                <div className="menu hidden md:w-auto md:block ">
                    <ul className='space-x-5 md:flex-row md:flex cursor-pointer'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink  {...link} />
                            </li>

                        ))}
                    </ul>
                </div>
                <div className='text-white text-3xl block md:hidden'>
                    <button onClick={toggleNavbar}>
                        <span className="sr-only">{isOpen ? 'Close navigation' : 'Open navigation'}</span>
                        {isOpen ? <IoMdCloseCircleOutline /> : <IoMdMenu />}
                    </button>
                </div>
            </div>
            {isOpen ? <MenuNavbar links={navLinks} onClick={toggleNavbar} /> : null}
        </nav>
    )
}

export default Navbar