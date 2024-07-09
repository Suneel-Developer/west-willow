"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

const Hero = () => {
    return (
        <section className='px-3 my-7'>
            <div className='max-w-[1296px] mx-auto w-full h-full min-h-[697px] rounded-3xl'>
                <div className='overflow-hidden h-full min-h-[650px] rounded-3xl'>
                    <Swiper
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='h-full min-h-[697px] relative'>
                            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                            <div className="bg-cover bg-[url('/assets/1.jpg')] w-full h-full min-h-[697px] bg-no-repeat relative z-0"></div>
                            <div className='absolute inset-0 flex items-start flex-col justify-center px-4 md:px-12 text-white z-20'>
                                <h2 className='text-4xl md:text-7xl cooper-m mb-7 leading-[60px] md:leading-[80px]'>Custom Pet <br /> Portraits</h2>
                                <button className='py-2 px-5 bg-bg-primary text-white border border-bg-primary rounded-[50rem] text-lg uppercase'>Shop Now</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='h-full min-h-[697px] relative'>
                            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                            <div className="bg-cover bg-[url('/assets/2.png')] w-full h-full min-h-[697px] bg-no-repeat relative z-0"></div>
                            <div className='absolute inset-0 flex items-start flex-col justify-center px-4 md:px-12 text-white z-20'>
                                <h2 className='text-4xl md:text-7xl cooper-m mb-7 leading-[60px] md:leading-[80px]'>Custom Pet <br /> Portraits</h2>
                                <button className='py-2 px-5 bg-bg-primary text-white border border-bg-primary rounded-[50rem] text-lg uppercase'>Shop Now</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='h-full min-h-[697px] relative'>
                            <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
                            <div className="bg-cover bg-[url('/assets/3.jpg')] w-full h-full min-h-[697px] bg-no-repeat relative z-0"></div>
                            <div className='absolute inset-0 flex items-start flex-col justify-center px-4 md:px-12 text-white z-20'>
                                <h2 className='text-4xl md:text-7xl cooper-m mb-7 leading-[60px] md:leading-[80px]'>Custom Pet <br /> Portraits</h2>
                                <button className='py-2 px-5 bg-bg-primary text-white border border-bg-primary rounded-[50rem] text-lg uppercase'>Shop Now</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='h-full min-h-[697px] relative'>
                            <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
                            <div className="bg-cover bg-[url('/assets/4.jpg')] w-full h-full min-h-[697px] bg-no-repeat relative z-0"></div>
                            <div className='absolute inset-0 flex items-start flex-col justify-center px-4 md:px-12 text-white z-20'>
                                <h2 className='text-4xl md:text-7xl cooper-m mb-7 leading-[60px] md:leading-[80px]'>Custom Pet <br /> Portraits</h2>
                                <button className='py-2 px-5 bg-bg-primary text-white border border-bg-primary rounded-[50rem] text-lg uppercase'>Shop Now</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Hero
