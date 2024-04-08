'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import NavLink from './NavLink';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import MenuNavbar from './MenuNavbar';

const navLinks = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "Project",
        link: "/project"
    }
]
const Navbar = () => {
    const [isOpen, setOpen]=useState(false);
    return (
        <nav className='bg-[#121212] bg-opacity-100 fixed top-0 right-0 left-0 z-10'>
            <div className='flex flex-wrap w-full items-center
      justify-between mx-auto h-14 md:px-12 px-5 cursor-pointer'>
                <Link href={"/"}
                    className='text-lg md:text-3xl text-white font-semibold'>
                    Logo
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
                  {
                    !isOpen ? (
                        <button
                        onClick={() => setOpen(true)}><IoMdMenu /></button>
                    ) : (
                        <button
                        onClick={() => setOpen(false)}>< RxCross2 /> </button>
                    )
                  }                    
                </div>
            </div>
            {isOpen ? <MenuNavbar links={navLinks}/> : null} 
        </nav>
    )
}

export default Navbar