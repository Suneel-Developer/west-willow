"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { MdArrowDropDown } from "react-icons/md";
import SearchComponent from './SearchComponent';
import CartComponent from './CartComponent';

const ShopAllModal = ({ isOpen, onClose }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);


    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div onClick={handleOverlayClick} className='shopmodaloverlaybg fixed right-0 h-screen xlg:h-full top-0 z-50 left-0 w-full flex justify-end xlg:justify-start items-end xlg:items-start overflow-hidden transition-all duration-300'>
            <header className='flex flex-col justify-end xlg:px-3 w-full z-20'>

                {/* Top Offer Bar  */}
                <section className='max-w-[1296px] mx-auto w-full z-50 hidden xlg:flex'>
                    <div className='bg-[#ff5c5d] w-full py-2 h-[54px] flex flex-col items-center justify-center'>
                        <p className='text-white text-xs md:text-[.95rem] text-center karla-r leading-[19px]'>4th of July Sale! Save 20% OFF our entire site </p>
                        <p className='text-white text-xs md:text-[.95rem] text-center karla-r leading-[19px]'>w/ code <strong>JULY</strong>. Ends Sunday, 7/7</p>
                    </div>
                </section>


                {/* Header  */}
                <section className='max-w-[1296px] h-20 rounded-none mx-auto w-full bg-[#fffffff0] px-5 hidden xlg:flex items-center justify-between py-3 gap-3'>

                    {/* Left Side Links  */}
                    <div className='hidden xlg:flex items-center py-2 flex-1'>
                        <li className='py-2 pr-3 pl-6'>
                            <Link href="#" className='text-base karla-b text-bg-primary'>Create Your Pet Portrait</Link>
                        </li>

                        <li className='py-2 px-3 relative'>
                            <Link onClick={handleOverlayClick} href="#" className='text-base karla-b text-bg-primary uppercase flex items-center'>
                                Shop All
                                <MdArrowDropDown onClick={handleOverlayClick} className='text-bg-primary rotate-180' />
                                <div className='w-2 h-2 bg-[#ff5c5d] rounded-full absolute top-1 right-6'></div>
                            </Link>
                        </li>
                    </div>

                    {/* Center Logo  */}

                    <div className='flex-1 flex items-center justify-start xlg:justify-center'>
                        <Link href="/">
                            <img src="/assets/logo.svg" alt='logo' className='w-[103px] md:w-[137.98px] h-9 md:h-[48px]' />
                        </Link>
                    </div>


                    {/* Right side Search bar, cart section  */}

                    <ul className='flex items-center justify-end flex-1'>
                        <li>
                            <button onClick={openSearch} className='py-2 px-2 lg:px-3 flex items-center justify-center'>
                                <img src="/assets/search-icon.svg" alt="search-icon" className='w-6 h-6' />
                            </button>
                        </li>

                        <li>
                            <button onClick={openCart} className='py-2 px-2 lg:px-3 flex items-center justify-center relative'>
                                <img src="/assets/cart.svg" alt="cart" className='w-6 h-6' />
                                <span className='absolute top-[2px] right-0 h-[18px] w-[18px] rounded-full text-xs flex items-center justify-center bg-bg-primary-darker text-white karla-b'>0</span>
                            </button>
                        </li>
                        <li>
                            <button className='py-2 px-2 xlg:hidden flex items-center justify-center relative'>
                                <img src="/assets/toggle.svg" alt="toggle" className='w-6 h-6' />
                            </button>
                        </li>
                    </ul>

                </section>


                {/* Links Box  */}
                <div className='xlg:px-6 max-w-[1296px] hidden xlg:flex xlg:border-t-2 border-opacity-45 mx-auto w-full xlg:bg-[#fffffff0] xlg:rounded-b-[1.5rem] xlg:py-5 transition-all duration-300 ease-in-out'>
                    <div className='flex gap-3 w-full'>
                        <div className='w-full xlg:w-[41%]'>

                            <div className='rounded-[1.5rem] bg-bg-primary p-3 mb-3 hidden xlg:flex items-center gap-2'>
                                <div className='w-[108px] h-[108px] rounded-full overflow-hidden relative'>
                                    <img src="/assets/user.avif" alt="user" className='w-full h-full rounded-full' />
                                </div>

                                <div className='px-2 text-white flex-1'>
                                    <h6 className='text-sm cooper-m mb-[3px] leading-[1.2]'>Jen L. - Marketing Manager</h6>
                                    <h6 className='text-sm karla-r leading-[1.5]'>Dont forget! We offer FREE shipping on all orders over $100+ USD. Check out bundle discounts as well!</h6>
                                </div>
                            </div>

                            <div className='grid grid-cols-2'>
                                <ul className='py-3'>
                                    <h6 className='mt-[2px] mb-2 mx-2 text-base font-bold uppercase text-bg-primary'>Best Sellers</h6>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Shop All Best Sellers</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Custom Pet Apparel</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Modern Pet Portrait</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Royal Pet Portrait</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Line Drawing Pet Portrait</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Memorial Pet Portrait</Link>
                                    </li>
                                </ul>

                                <ul className='py-3 ml-7'>
                                    <h6 className='mt-[2px] mb-2 mx-2 text-base font-bold uppercase text-bg-primary'>ACCESSORIES</h6>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Mugs</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Phone Cases</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Custom Pet Blanket</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Throw Pillow</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Custom Pet Bowl</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Quote Signs</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Gift Card</Link>
                                    </li>
                                </ul>

                                <ul className='py-3'>
                                    <h6 className='mt-[2px] mb-2 mx-2 text-base font-bold uppercase text-bg-primary'>LEARN MORE</h6>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>FAQ & Contact Us</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Our Story</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Giving Back</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Reviews</Link>
                                    </li>
                                    <li className='py-1 px-2'>
                                        <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Earn $20</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='w-[59%] hidden xlg:grid grid-cols-3'>
                            <div className='px-3'>
                                <img src="/assets/modern-pet-portraits.webp" alt="modern-pet-portraits" loading='lazy' className='rounded-[1.25rem] w-full mb-2' />
                                <h5 className='text-bg-primary text-sm cooper-m text-center'>Modern Pet Portraits</h5>
                            </div>
                            <div className='px-3'>
                                <img src="/assets/custom-pet-mugs.webp" alt="Custom Pet Mugs" loading='lazy' className='rounded-[1.25rem] w-full mb-2' />
                                <h5 className='text-bg-primary text-sm cooper-m text-center'>Custom Pet Mugs</h5>
                            </div>
                            <div className='px-3'>
                                <img src="/assets/custom-pet-apparel.webp" alt="Custom Pet Apparel" loading='lazy' className='rounded-[1.25rem] w-full mb-2' />
                                <h5 className='text-bg-primary text-sm cooper-m text-center'>Custom Pet Apparel</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* On Mobile Links  */}
                <div className='w-[95%] md:w-[98%] mx-auto flex xlg:hidden'>
                    <div className='grid grid-cols-2 relative bg-white h-[80vh] w-full rounded-t-[1.25rem] overflow-y-scroll px-2 md:px-5 pt-10 pb-16'>
                        <ul>
                            <h6 className='mt-[2px] mb-2 pb-1 border-b w-fit border-bg-primary mx-2 text-base font-bold uppercase text-bg-primary'>SHOP BEST SELLERS</h6>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Best Sellers</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Custom Pet Apparel</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Modern Pet Portrait</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Royal Pet Portrait</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Line Drawing Pet Portrait</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Memorial Pet Portrait</Link>
                            </li>
                        </ul>

                        <ul>
                            <h6 className='mt-[2px] mb-2 mx-2 pb-1 border-b w-fit border-bg-primary text-base font-bold uppercase text-bg-primary'>SHOP ACCESSORIES</h6>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Mugs</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Phone Cases</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Custom Pet Blanket</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Throw Pillow</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Custom Pet Bowl</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Quote Signs</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Gift Card</Link>
                            </li>
                        </ul>

                        <ul>
                            <h6 className='mt-[2px] mb-2 mx-2 pb-1 border-b w-fit border-bg-primary text-base font-bold uppercase text-bg-primary'>LEARN MORE</h6>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>FAQ & Contact Us</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Our Story</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Giving Back</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Reviews</Link>
                            </li>
                            <li className='py-1 px-2'>
                                <Link href="#" className='text-[15.2px] text-bg-primary karla-r'>Earn $20</Link>
                            </li>


                        </ul>
                        <div className='flex xlg:hidden w-[95%] md:w-[98%] mx-4'>
                            <div className='bg-white flex items-center justify-center w-[95%] md:w-[98%] mx-auto fixed bottom-0 right-0 left-0 py-3'>
                                <img src="/assets/logo.svg" alt="logo" className='w-[85px]' />
                            </div>
                        </div>

                        {/* CLose btn  */}

                        <button onClick={onClose} className='absolute right-4 top-4'>
                            <img src="/assets/close-toggle.svg" alt="close" className='w-3 h-3' />
                        </button>
                    </div>

                </div>

            </header>

            {/* Search Component */}
            {isSearchOpen && <SearchComponent onClose={closeSearch} />}
            {/* Cart Component */}
            {isCartOpen && <CartComponent onClose={closeCart} />}
        </div>
    )
}

export default ShopAllModal