"use client";

import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from "react-icons/hi2";

// define props type
type Props = {
    openNav: () => void;
};

const Nav = ({openNav}:Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 90) {
                setNavBg(true);
            } 
            if (window.scrollY <= 90) {
                setNavBg(false);
            }
        };

        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        };
        
    });

  return (
    <div className={`${
        navBg ? 'bg-indigo-800':'fixed'
        } fixed w-full transition duration-200 h-[12vh] z-[1000] `}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* logo */}
            <div className="flex gap-1 items-center">
            <Image src='/images/logo.png' alt='Logo' width={120} height={120} />
            <p className="relative text-xl w-fit block after:block after:content-[''] font-semibold after:absolute after:h-[3px] text-white">Smart Learning Hub</p>
            </div>
            {/* NavLinks */}
            <div className="hidden lg:flex items-center space-x-10">
                {navLinks.map((link) => {
                    return (
                        <Link key={link.id} href={link.url}>
                            <p className="nav_link">{link.label}</p>
                        </Link>
                    );

                })}
            </div>
            {/* Buttons */}
            <div className="flex items-center space-x-4" >
                <button className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg">
                    <Link href="/Login">Login</Link>
                </button>
                {/* Burger menu */}
                <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white"/>
            </div>
        </div>
    </div>
  )
}

export default Nav; 