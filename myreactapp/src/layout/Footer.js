import React, { useState } from 'react'
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="border border-t-4">
                    <h1 className="title-with-lines md:text-4xl text-3xl text-center font-bold md:p-10 py-10 p-1">How can we help you?</h1>
                    <div className='flex md:flex-row md:gap-0 flex-col gap-6 justify-center items-center pb-16 '>
                        <div>
                            <button className="lg:w-96  w-72 p-2 text-lg bg-blue-900 cursor-pointer mx-8 text-white hover:bg-blue-700 "><a href="/about" className="uppercase">Contact us</a></button>
                        </div>
                        <div>
                            <button className="lg:w-96 w-72 p-2 text-lg bg-blue-950 cursor-pointer text-white hover:bg-blue-700 "><a href="/about" className="uppercase">Request for proposal</a></button>
                        </div>
                    </div>
                </div>

                <div className='border border-t-4 border-t-blue-800 text-blue-900 flex lg:flex-row lg:gap-0 flex-col gap-5 justify-between p-8'>
                    <div>Logo</div>
                    <div className='flex justify-evenly gap-5'>
                        <a href="/about" className='ml-1 underline'>Tax Advisory</a>
                        <a href="/about" className='ml-1 underline'>Merger & Acquisitions</a>
                        <a href="/about" className='ml-1 underline'>Audit & Assurance</a>
                        <a href="/about" className='ml-1 underline'>Risk Advisory & Consulting</a>
                    </div>
                    <div>In Associated with</div>
                </div>

                <div className='bg-gray-100 text-blue-900'>
                    <div className='max-w-7xl mx-auto p-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                            <div className=' p-4' >
                                <ul>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/about" className='ml-1'>Home</a>
                                    </li>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/about" className='ml-1'>About Us</a>
                                    </li>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/about" className='ml-1'>Publication</a>
                                    </li>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/about" className='ml-1'>News & Events</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=' p-4'>
                                <ul >
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/about" className='ml-1 uppercase'>industries</a>
                                    </li>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/contact" className='ml-1 uppercase'>Services</a>
                                    </li>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/career" className='ml-1 uppercase'>international</a>
                                    </li>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/career" className='ml-1 uppercase'>contact us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=' p-4' >
                                <ul>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/about" className='ml-1'>Press Release</a>
                                    </li>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/about" className='ml-1'>Our Leaders</a>
                                    </li>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/about" className='ml-1'>Career</a>
                                    </li>
                                    <li className='flex pb-2 hover:text-blue-500'>
                                        <FaChevronRight size={15} className='m-1' />
                                        <a href="/about" className='ml-1'>Mission & Vision</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=' p-4'>
                                <h1 className='uppercase mb-3 text-xl'>Contact</h1>
                                <ul className='flex flex-col'>
                                    <li className='flex pb-2'>
                                        <FaMapMarkerAlt size={15} className='m-1' />
                                        <span className='ml-1'>Kathmandu, Nepal</span>
                                    </li>
                                    <li className='flex pb-2'>
                                        <IoIosMail size={17} className='m-1' />
                                        <span className='ml-1'>info@aduitform.com</span>
                                    </li>
                                    <li className='flex pb-2'>
                                        <FaPhoneAlt size={15} className='m-1' />
                                        <span className='ml-1'>977-9860345678</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className='flex justify-end space-x-2'>
                            <li className='hover:text-blue-500'>
                                <IoLogoInstagram size={30} />
                            </li>
                            <li className='hover:text-blue-500'>
                                <IoLogoFacebook size={30} />
                            </li>
                            <li className='hover:text-blue-500'>
                                <IoLogoTwitter size={30} />
                            </li>
                            <li className='hover:text-blue-500'>
                                <IoLogoLinkedin size={30} />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-between border-t p-8'>
                    <div>© 2009-2022 All Rights Reserved. Aduitform</div>
                    <div>Logo</div>
                    <div>Made by Cyberlink Pvt. Ltd.</div>
                </div>
            </footer>
        </>
    )
}

export default Footer