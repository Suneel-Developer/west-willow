"use client"
import React, { useEffect, useRef, useState } from 'react';

const SearchComponent = ({ onClose }) => {
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
                className={`bg-white overflow-hidden rounded-2xl h-full max-w-[400px] w-full transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ boxShadow: "0 .5rem 1.5rem #00000040" }}
            >
                <div className='bg-bg-light p-4 flex items-center justify-between'>
                    <h2 className='leading-[1.5] text-base tracking-[.1rem] cooper-m'>Search</h2>
                    <button onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }}>
                        <img src="/assets/close-toggle.svg" alt="close" className='w-3 h-3' />
                    </button>
                </div>

                <div className='p-4'>
                    <input type="text" placeholder='Start typing to see results...' className='rounded-[50rem] border border-bg-light-darker py-[6px] px-3 text-base karla-r w-full outline-none' />
                </div>
            </div>
        </section>
    );
}

export default SearchComponent;
