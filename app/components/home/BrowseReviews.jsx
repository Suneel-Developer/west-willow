// import React from 'react'
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";

// const BrowseReviews = () => {
//     return (
//         <section className='py-2 mb-7 px-3'>
//             <div className='max-w-[1296px] mx-auto w-full rounded-3xl px-7 py-8 bg-bg-light'>
//                 <h2 className='text-center mb-2 text-2xl leading-[1.2] karla-m text-[#141518]'>West & Willow In The Wild</h2>

//                 <Swiper
//                     spaceBetween={20}
//                     slidesPerView="auto"
//                 >
//                     {/* Slide 01  */}
//                     <SwiperSlide className="card card-one min-w-[292px] md:min-w-[292px] max-w-[240px] md:max-w-[292px] w-full bg-cover bg-center bg-no-repeat">
//                         <div className="w-full h-full bg-white rounded-3xl p-5">
//                             <img src="/assets/women_360x360_crop_center.webp" alt="" className='mb-4 h-[360px]' />
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </section>
//     )
// }

// export default BrowseReviews



"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


const BrowseReviews = () => {
    return (
        <section className='py-2 mb-7 px-3'>
            <div className='max-w-[1296px] mx-auto w-full rounded-3xl px-7 py-8 bg-bg-light'>

                <h2 className='text-center mb-8 text-2xl leading-[1.2] cooper-m text-[#141518]'>West & Willow In The Wild</h2>

                <Swiper>
                    <SwiperSlide className='min-w-[272px] xxs:min-w-[316px] max-w-[272px] xxs:max-w-[316px] w-full'>
                        <div className='min-w-[248px] xxs:min-w-[292px] max-w-[248px] xxs:max-w-[292px] w-full bg-white rounded-3xl p-5 h-fit'>
                            <img src="/assets/women_360x360_crop_center.webp" alt="Reviews 01" className='mb-4 h-[208px] xxs:h-[252px]' />

                            <div className='mb-4 text-[15px] text-bg-primary karla-r'>
                                <em>Petey looking sharp on our Charcoal background with a matte white frame. (@</em>stylebystephv)
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='min-w-[272px] xxs:min-w-[316px] max-w-[272px] xxs:max-w-[316px] w-full'>
                        <div className='min-w-[248px] xxs:min-w-[292px] max-w-[248px] xxs:max-w-[292px] w-full bg-white rounded-3xl p-5 h-fit'>
                            <img src="/assets/women-2_360x360_crop_center.webp" alt="Reviews 02" className='mb-4 h-[208px] xxs:h-[252px]' />

                            <div className='mb-4 text-[15px] text-bg-primary karla-r'>
                                <em>Bailey bringing all the smiles. Pet portraits are the BEST gift for the pet lover in your life. (@</em>thatteachergal)
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='min-w-[272px] xxs:min-w-[316px] max-w-[272px] xxs:max-w-[316px] w-full'>
                        <div className='min-w-[248px] xxs:min-w-[292px] max-w-[248px] xxs:max-w-[292px] w-full bg-white rounded-3xl p-5 h-fit'>
                            <img src="/assets/women_2_360x360_crop_center.webp" alt="Reviews 03" className='mb-4 h-[208px] xxs:h-[252px]' />

                            <div className='mb-4 text-[15px] text-bg-primary karla-r'>
                                <em>Feline feelings. Ms. Beckinsale looking pretty in her Walnut-framed custom pet portrait. (</em>@samantha_fabfinds)
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='min-w-[272px] xxs:min-w-[316px] max-w-[272px] xxs:max-w-[316px] w-full'>
                        <div className='min-w-[248px] xxs:min-w-[292px] max-w-[248px] xxs:max-w-[292px] w-full bg-white rounded-3xl p-5 h-fit'>
                            <img src="/assets/men-1_360x360_crop_center.webp" alt="Reviews 04" className='mb-4 h-[208px] xxs:h-[252px]' />

                            <div className='mb-4 text-[15px] text-bg-primary karla-r'>
                                <em>Margot & Dad...I'm not crying, you're crying! (@</em>jayholloway_)
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>


                <div className='mt-10 flex justify-center items-center'>
                    <button className='py-[6px] px-7 text-white text-base karla-m border border-b-bg-primary bg-bg-primary rounded-[50px]'>Browse Reviews</button>
                </div>
            </div>
        </section>
    )
}

export default BrowseReviews