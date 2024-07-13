"use client"
import React, { useEffect, useRef, useState } from 'react';

const CartComponent = ({ onClose }) => {
    const modalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        setIsVisible(true);

        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsVisible(false);
                setTimeout(onClose, 300);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);

    return (
        <section className={`shopmodaloverlaybg fixed right-0 p-3 h-screen top-0 z-50 left-0 w-full flex justify-end items-end transition-opacity duration-150 ease-linear ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div
                ref={modalRef}
                className={`bg-white overflow-hidden relative rounded-2xl h-full max-w-[400px] w-full transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
                style={{ boxShadow: "0 .5rem 1.5rem #00000040" }}
            >
                <div className='bg-bg-light p-4 flex items-center justify-between sticky top-0 w-full'>
                    <h2 className='leading-[1.5] text-base cooper-m tracking-[.1rem]'>My Cart</h2>
                    <button onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }}>
                        <img src="/assets/close-toggle.svg" alt="close" className='w-3 h-3' />
                    </button>
                </div>

                <div className='p-4 overflow-y-auto no-scrollbar'>
                    <div className='mb-4'>
                        <p className='text-sm text-bg-primary mb-1 text-center karla-r'>Congrats! You are eligible for <strong>FREE Shipping.</strong></p>
                        <div className='h-2 rounded-[.25rem] bg-bg-primary w-full'></div>
                    </div>


                    <ul>
                        <li className='py-2 flex items-center'>
                            <div className='mr-2 w-[33%] h-20 md:h-[140px]'>
                                <img src="/assets/custom-pet-mugs.webp" alt="custom mug" className='w-full h-full' />
                            </div>

                            <div className='w-full flex-1'>
                                <h5 className='mb-1 text-sm cooper-m text-[#141518]'>Custom Pet Portrait Mug</h5>
                                <small className='mb-1 text-bg-muted text-sm karla-r'>White / Include Name / 15 oz</small>
                                <ul className='mb-1 text-bg-muted text-sm karla-r'>
                                    <li>Upload Pet Photo: <a href="#" className='text-bg-primary underline'>View File</a></li>
                                    <li>Pet Name (optional): Bear</li>
                                </ul>

                                <p className='mb-2 text-[#141518] text-base karla-m'>Rs.15,600.00</p>

                                <div className='flex items-center justify-between flex-1 gap-2 w-full'>
                                    <div className='flex'>
                                        <div className='py-1 px-2 rounded-l-[.2rem] text-sm border border-[#f0e4dd] bg-[#fcfaf9] karla-r text-center'>QTY</div>
                                        <input type='text' className='py-1 px-2 rounded-r-[.2rem] w-[68px] outline-none text-sm border border-[#f0e4dd] karla-r' />
                                    </div>

                                    <img src="/assets/delete-icon.svg" alt="delete-icon" className='cursor-pointer' />
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>

                <div className='p-4 absolute w-full bg-white bottom-0 border-t border-[#dee2e6]'>
                    <p className='text-xl karla-r text-center mb-2'>
                        <span className='text-bg-muted'>Subtotal:</span>
                        <b> Rs.15,600.00</b>
                    </p>

                    <p className='text-sm text-center mb-3 text-bg-muted karla-r'>
                        100% Artwork Satisfaction Guarantee and  <br /> Your order helps support Animal Rescue!
                    </p>

                    <button className='rounded-[50rem] border border-bg-primary text-white bg-bg-primary transition-colors duration-300 py-2 px-4 flex items-center justify-center gap-1 text-xl karla-m w-full outline-none'>
                        <img src="/assets/lock.svg" alt="lock" />
                        Checkout
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CartComponent;
