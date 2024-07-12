"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import ShopAllModal from './ShopAllModal'; 
import SearchComponent from './SearchComponent'; 
import CartComponent from './CartComponent'; 

const Header = () => {
    const [isShopAllModalOpen, setIsShopAllModalOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openShopAllModal = () => setIsShopAllModalOpen(true);
    const closeShopAllModal = () => setIsShopAllModalOpen(false);

    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <header className='flex flex-col px-3 sticky top-0 z-20'>
            {/* Top Offer Bar */}
            <section className='max-w-[1296px] mx-auto w-full z-50'>
                <div className='bg-[#ff5c5d] w-full py-2 h-[54px] flex flex-col items-center justify-center'>
                    <p className='text-white text-xs md:text-[.95rem] text-center karla-r leading-[19px]'>4th of July Sale! Save 20% OFF our entire site </p>
                    <p className='text-white text-xs md:text-[.95rem] text-center karla-r leading-[19px]'>w/ code <strong>JULY</strong>. Ends Sunday, 7/7</p>
                </div>
            </section>

            {/* Header */}
            <section className='rounded-b-[1.5rem] h-20 headershadow max-w-[1296px] mx-auto w-full bg-[#fffffff0] px-5 flex items-center justify-between py-3 gap-3'>
                {/* Left Side Links */}
                <div className='hidden xlg:flex items-center py-2 flex-1'>
                    <li className='py-2 pr-3 pl-6'>
                        <Link href="#" className='text-base karla-b text-bg-primary'>
                            Create Your Pet Portrait
                        </Link>
                    </li>

                    <li className='py-2 px-3 relative'>
                        <button onClick={openShopAllModal} className='text-base karla-b text-bg-primary uppercase flex items-center'>
                            Shop All
                            <MdArrowDropDown className='text-bg-primary' />
                            <div className='w-2 h-2 bg-[#ff5c5d] rounded-full absolute top-1 right-6'></div>
                        </button>
                    </li>
                </div>

                {/* Center Logo */}
                <div className='flex-1 flex items-center justify-start xlg:justify-center'>
                    <Link href="/">
                        <img
                            src="/assets/logo.svg"
                            alt='logo'
                            className='w-[103px] md:w-[137.98px] h-9 md:h-[48px]'
                        />
                    </Link>
                </div>

                {/* Right side Search bar, cart section */}
                <ul className='flex items-center justify-end flex-1'>
                    <li>
                        <button onClick={openSearch} className='py-2 px-2 lg:px-3 flex items-center justify-center'>
                            <img src="/assets/search-icon.svg" alt="search-icon" className='w-6 h-6' />
                        </button>
                    </li>

                    <li>
                        <button onClick={openCart} className='py-2 px-2 lg:px-3 flex items-center justify-center relative'>
                            <img src="/assets/cart.svg" alt="cart" className='w-6 h-6' />
                            <span className='absolute top-[2px] right-0 h-[18px] w-[18px] rounded-full text-xs flex items-center justify-center bg-bg-primary-darker text-white karla-b'>
                                0
                            </span>
                        </button>
                    </li>
                    <li>
                        <button onClick={openShopAllModal} className='py-2 px-2 xlg:hidden flex items-center justify-center relative'>
                            <img src="/assets/toggle.svg" alt="toggle" className='w-6 h-6' />
                        </button>
                    </li>
                </ul>
            </section>

            {/* Shop All Modal */}
            <ShopAllModal isOpen={isShopAllModalOpen} onClose={closeShopAllModal} />
            {/* Search Component */}
            {isSearchOpen && <SearchComponent onClose={closeSearch} />}
            {/* Cart Component */}
            {isCartOpen && <CartComponent onClose={closeCart} />}
        </header>
    );
};

export default Header;
