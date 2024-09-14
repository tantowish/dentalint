"use client"

import { navLinks } from '@/data/nav'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ButtonAlert } from './button-alert'


export default function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const [activeLink, setActiveLink] = useState(-1)
  
    const handleHamburgerClick = ()=>{
      setIsActive(!isActive)
    }
  
    useEffect(() => {
      const handleScroll = () => {
    
        const sections = document.querySelectorAll('section');
    
        // Check for fully visible sections
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
    
          if (window.scrollY + window.innerHeight >= sectionTop && 
              window.scrollY <= sectionBottom - (section.offsetHeight * 0.2)) {
            setActiveLink(i);
            break;
          }
        }
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <nav className='navbar-fixed top-0 w-full z-[50] relative'>
        <div className='flex flex-wrap justify-between max-w-7xl mx-auto px-8 lg:px-24 md:px-16 py-4 items-center'>
            <div>
                <Link
                href="#"
                className='flex flex-wrap gap-2 items-center'
                >
                    <Image
                    className='w-8 lg:w-9'
                    src="/dentalint-logo.png"
                    alt='dentalint-logo'
                    width={288}
                    height={162}
                    />
                    <p className='text-[#394E85] font-bold text-xl lg:text-2xl'>Dentalint</p>
                </Link> 
            </div>
            <div className='hidden md:flex flex-wrap gap-12'>
                {navLinks.map((nav, index)=>(
                    <Link
                    key={nav.name}
                    className={`text-[#394E85] hover:font-semibold hover:underline hover:underline-offset-8 transition-all ease-in-out ${activeLink === index ? 'underline underline-offset-8 font-semibold' : ''}`} // Check if the path *includes* the link
                    href={`#${nav.link}`}>{nav.name}</Link>
                ))}
            </div>
            <div className='flex items-center px-4 md:hidden'>
                <button id='hamburger' name='hamburger' type='button' className={`block absolute right-4 ${isActive ?'hamburger-active' :''}`} onClick={handleHamburgerClick}>
                    <span className='w-[30px] h-[2px] my-2 block bg-[#394E85] transition duration-500 ease-out origin-top-left'></span>
                    <span className='w-[30px] h-[2px] my-2 block bg-[#394E85] transition duration-500 ease-out'></span>
                    <span className='w-[30px] h-[2px] my-2 block bg-[#394E85] transition duration-500 ease-out origin-bottom-left'></span>
                </button>
                <div className={`nav-menu absolute z-[10] py-5 rounded-b-3xl w-full right-0 top-full ${!isActive ? 'hidden' : ''}`}>
                    <div className='flex flex-col gap-3 px-8'>
                        {navLinks.map((nav, index)=>(
                        <Link
                        key={nav.name}
                        className={`text-[#394E85] hover:font-semibold hover:underline hover:underline-offset-4 transition-all ease-in-out ${activeLink === index ? 'underline underline-offset-8 font-semibold' : ''}`}
                        href={`#${nav.link}`}>{nav.name}</Link>
                        ))}
                        <ButtonAlert className="px-4 py-2 bg-[#394E85] hover:bg-[#4761a2] rounded-full text-white transition-all text-sm w-fit" value="Get App"/>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <ButtonAlert className='px-4 py-2 bg-[#394E85] rounded-full text-white hover:bg-[#4761a2] transition-all text-sm' value="Get App"/>
            </div>
        </div>
    </nav>
  )
}