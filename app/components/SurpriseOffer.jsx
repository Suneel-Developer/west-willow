"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const SurpriseOffer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <section>
            {/* Red btn */}
            {!modalOpen && (
                <div className='fixed bottom-4 py-3 text-[17px] cursor-pointer karla-m uppercase flex items-center justify-between gap-4 left-4 z-10 bg-bs-red px-[18px] rounded-[32px] text-center' onClick={toggleModal}>
                    <span>Get Surprise Offer</span>
                    {/* <button><img src="/assets/_close.svg" alt="close icon" className='h-4 w-4' /></button> */}
                </div>
            )}

            {/* Modal */}
            {modalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' onClick={handleOverlayClick}>
                    <div className='bg-white relative rounded-[46px] overflow-hidden max-w-[800px] w-full h-[600px] flex transition-all duration-300 ease-in-out'>
                        <div className='w-[50%] bg-[url("/assets/dog.jpg")] h-full px-4 overflow-hidden bg-center bg-cover'></div>

                        <div className='w-[50%] pt-10 px-6 pb-8 flex flex-col justify-start items-center h-full'>
                            <div className='mb-8 h-10 flex justify-start items-start'>
                                <img src="/assets/west-willow.png" alt="west-willow" className='h-full' />
                            </div>

                            <div className='mb-4 flex items-center flex-col'>
                                <span className='text-2xl karla-m text-[#5c5c5c] text-center mb-[10px] leading-[30px]'>SIGN UP FOR A <br />SURPRISE OFFER</span>
                                <span className='text-[40px] karla-m text-[#5c5c5c] text-center leading-[45px] mb-[10px]'>10%, 15% <br />20% OFF 🎉</span>

                                <div className='mb-2 text-[9px]'>
                                    By submitting your email address, you agree to receive marketing emails from West & Willow at the email address provided. We may use information collected about you on our site to suggest other products and offers. You can withdraw your consent at any time by following the unsubscribe instructions in any email we send to you. View
                                    <Link href="#">Terms</Link> & <Link href="#">Privacy</Link>. Contact West & Willow at 8th Ave  888c, New York, New York 10019
                                </div>

                                <input type="text" className='mb-2 w-full rounded-[32px] border border-bs-gray py-1 px-2 text-center text-sm karla-m outline-none h-12' placeholder='Email Address' />

                                <div className='bg-[#ff5c5d] py-[10px] px-4 flex rounded-[32px] w-full flex-col items-center text-center'>
                                    <p className='text-xl text-center karla-m text-[#2d2d2d]'>GET YOUR SURPRISE OFFER</p>
                                    <p className='text-sm text-center karla-r text-[#2d2d2d]'>when you sign up for emails</p>
                                </div>

                                <Link href="#" className='text-center underline text-base mt-3 text-[#2d2d2d]'>NO, I'LL PAY FULL PRICE</Link>
                            </div>

                        </div>

                        <button type='button' onClick={closeModal} className='absolute right-7 top-5'><img src="/assets/_close.svg" alt="close-icon" className='w-4 h-4 opacity-70' /></button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default SurpriseOffer;
