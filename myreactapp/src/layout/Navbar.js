import React from 'react'
import { AiOutlineMenu, AiOutlineClose, } from 'react-icons/ai'
import { IoIosMail, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin, IoIosHome } from "react-icons/io";

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const pathname = useLocation()
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    return (
            <nav className="sticky w-full py-4 top-0 bg-white text-blue-900 z-10">
                <div className='flex justify-between items-center h-full w-full px-4 2xl:px:16'>
                    <div className=''>
                        <h1 className='text-3xl font-bold'>AduitForm</h1>
                    </div>
                    <div className='hidden lg:flex'>
                        <ul className='hidden lg:flex'>
                            <Link to={'/'}>
                                <li className={`ml-10 ${pathname === '/' ? 'text-blue-500' : 'hover:text-blue-500'}`}> <IoIosHome size={2}/> </li>
                            </Link>
                            <Link to={'/industries'}>
                                <li className={`ml-10 ${pathname === '/industries' ? 'text-blue-500' : 'hover:text-blue-500'}`}>INDUSTRIES</li>
                            </Link>
                            <Link to={'/services'}>
                                <li className={`ml-10 ${pathname === '/services' ? 'text-blue-500' : 'hover:text-blue-500'}`}>SERVICES</li>
                            </Link>
                            <Link to={'/about'}>
                                <li className={`ml-10 ${pathname === '/about' ? 'text-blue-500' : 'hover:text-blue-500'}`}>ABOUT</li>
                            </Link>
                            <Link to={'/international'}>
                                <li className={`ml-10 ${pathname === '/international' ? 'text-blue-500' : 'hover:text-blue-500'}`}>INTERNATIONAL</li>
                            </Link>
                            <Link to={'/resources'}>
                                <li className={`ml-10 ${pathname === '/resources' ? 'text-blue-500' : 'hover:text-blue-500'}`}>RESOURCES</li>
                            </Link>
                            <Link to={'/contact'}>
                                <li className={`ml-10 ${pathname === '/contact' ? 'text-blue-500' : 'hover:text-blue-500'}`}>CONTACT US</li>
                            </Link>
                        </ul>
                    </div>
                    <div onClick={handleNav} className='lg:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className={
                    menuOpen ? "fixed right-0 top-0 w-[65%] md:hidden h-screen bg-black text-white p-10 ease-in duration-100"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-100"
                }>
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleNav} className='md:hidden cursor-pointer'>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className='flex-col py-4'>
                        <ul>
                            <Link to={'/'}>
                                <li className={`py-4 cursor-pointer ${pathname === '/' ? 'text-white' : 'hover:text-white'}`}>Home</li>
                            </Link>
                            <Link to={'/industries'}>
                                <li className={`py-4 cursor-pointer ${pathname === '/industries' ? 'text-white' : 'hover:text-white'}`}>INDUSTRIES</li>
                            </Link>
                            <Link to={'/services'}>
                                <li className={`py-4 cursor-pointer ${pathname === '/services' ? 'text-white' : 'hover:text-white'}`}>SERVICES</li>
                            </Link>
                            <Link to={'/about'}>
                                <li className={`py-4 cursor-pointer ${pathname === '/about' ? 'text-white' : 'hover:text-white'}`}>ABOUT</li>
                            </Link>
                            <Link to={'/international'}>
                                <li className={`py-4 cursor-pointer ${pathname === '/international' ? 'text-white' : 'hover:text-white'}`}>INTERNATIONAL</li>
                            </Link>
                            <Link to={'/resources'}>
                                <li className={`py-4 cursor-pointer ${pathname === '/resorces' ? 'text-white' : 'hover:text-white'}`}>RESOURCES</li>
                            </Link>
                            <Link to={'/contact'}>
                                <li className={`py-4 cursor-pointer ${pathname === '/contact' ? 'text-white' : 'hover:text-white'}`}>CONTACT US</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='flex flex-row, justify-around pt-7 item-center'>
                        <IoLogoInstagram size={35} className='cursor-pointer hover:text-white'/>
                        <IoLogoFacebook size={35} className='cursor-pointer hover:text-white'/>
                        <IoLogoTwitter size={35} className='cursor-pointer hover:text-white'/>
                        <IoIosMail  size={35} className='cursor-pointer hover:text-white'/>
                        <IoLogoLinkedin size={35} className='cursor-pointer hover:text-white'/>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar