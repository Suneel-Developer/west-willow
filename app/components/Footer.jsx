"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            title: 'Shop',
            links: [
                { href: '#', label: 'Shop All Products' },
                { href: '#', label: 'Custom Pet Portraits' },
                { href: '#', label: 'Mugs' },
                { href: '#', label: 'Custom Pet Bowl' },
                { href: '#', label: 'Phone Cases' },
                { href: '#', label: 'Custom Pet Blanket' },
                { href: '#', label: 'Throw Pillow' },
                { href: '#', label: 'Memorial Pet Portrait' },
                { href: '#', label: 'Pet Portrait Greeting Cards' },
                { href: '#', label: 'Quote Signs' },
                { href: '#', label: 'Gift Card' },
                { href: '#', label: 'Custom Horse Portraits' },
                { href: '#', label: 'Custom Cat Portraits' },
            ],
        },
        {
            title: 'Info',
            links: [
                { href: '#', label: 'Shipping Guide' },
                { href: '#', label: 'About us' },
                { href: '#', label: 'Contact & FAQ' },
                { href: '#', label: 'Giving Back' },
                { href: '#', label: 'Our Blog' },
                { href: '#', label: 'How It Works' },
                { href: '#', label: 'Image Guidelines' },
                { href: '#', label: 'Referral Program - Earn $20' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { href: '#', label: 'Terms of Service' },
                { href: '#', label: 'Privacy Policy' },
                { href: '#', label: 'Shipping Policy' },
                { href: '#', label: 'Refund Policy' },
            ],
        },
    ];

    return (
        <footer className='bg-bg-secondary pt-10 pb-6 w-full px-3'>
            <div className='max-w-[700px] lg:max-w-[1296px] mx-auto w-full'>
                <div className='flex flex-col lg:flex-row-reverse justify-between w-full'>
                    <div className='w-full lg:w-[33.33333333%] lg:px-3'>
                        <form>
                            <h2 className='mb-4 mt-2 text-2xl text-center lg:text-start leading-[1.2] cooper-m text-white'>
                                Let's Keep in Touch
                            </h2>

                            <div className="flex mb-2 relative justify-center lg:justify-start w-full">
                                <input type="email" placeholder='Enter your email...' className='rounded-l-[50rem] flex-1 overflow-hidden py-1 px-5 bg-white border border-[#ced4da] outline-none text-base karla-r' />
                                <button className='rounded-r-[50rem] py-2 uppercase text-center px-5 bg-bg-primary border border-bg-primary text-white outline-none text-base karla-r'>sign up</button>
                            </div>

                            <ul className='mt-5 mb-10 lg:mb-3 flex items-center justify-center lg:justify-start flex-wrap'>
                                <li className='p-2'>
                                    <Link href="#"><img src="/assets/facebook.svg" alt="facebook" className='w-5 h-5 opacity-70 transition-colors hover:opacity-100' /></Link>
                                </li>
                                <li className='p-2'>
                                    <Link href="#"><img src="/assets/instagram.svg" alt="instagram" className='w-5 h-5 opacity-70 transition-colors hover:opacity-100' /></Link>
                                </li>
                                <li className='p-2'>
                                    <Link href="#"><img src="/assets/pintreset.svg" alt="pintreset" className='w-5 h-5 opacity-70 transition-colors hover:opacity-100' /></Link>
                                </li>
                            </ul>
                        </form>
                    </div>

                    <div className='w-full lg:w-[66.66666667%]'>
                        <div className='grid grid-cols-1 lg:grid-cols-3'>
                            {sections.map((section, index) => (
                                <div key={index} className='py-2 lg:py-3 lg:pr-5 border-b border-white border-opacity-20 border-dotted lg:border-none'>
                                    <div onClick={() => toggleSection(section.title.toLowerCase())} className='py-1 lg:py-0 flex justify-between items-center w-full'>
                                        <h3 className='text-base lg:text-[.875em] cursor-pointer lg:cursor-default w-fit uppercase py-2 lg:px-4 lg:bg-[#ffffff0D] text-white font-medium cooper-m tracking-[.1rem] text-center lg:text-left'>
                                            <span>{section.title}</span>
                                        </h3>
                                        <SlArrowDown className='text-white w-4 opacity-70 h-4 block lg:hidden' />
                                    </div>
                                    <ul className={`border-l border-[#fff3] border-dotted pl-4 lg:pt-3 transition-all duration-300 ${openSection === section.title.toLowerCase() ? 'max-h-[1000px] mb-6' : 'max-h-0 overflow-hidden'} lg:max-h-[1000px] lg:overflow-visible flex flex-col gap-1`}>
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link href={link.href} className='text-white opacity-70 text-sm py-1 karla-r transition duration-200 ease-out hover:opacity-100'>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className='border-dashed border-white border-opacity-20 h-[1px] w-0 lg:w-full mb-5 lg:mt-3'></hr>

                <div className='text-center'>
                    <p className='text-sm text-opacity-60 text-white karla-r'>© 2024 West & Willow. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
