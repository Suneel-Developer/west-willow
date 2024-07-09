import React from 'react'

const ShopBestSellers = () => {
    return (
        <section className='mb-4 px-3'>
            <div className='max-w-[1296px] mx-auto w-full flex items-center flex-col-reverse md:flex-row gap-4 md:gap-8'>

                <div className='md:px-2 w-full md:w-[50%]'>
                    <img src="/assets/how-it-works.webp" alt="How It Works" className='rounded-3xl md:mt-0 mt-6 w-full' />
                </div>

                <div className='mb-3 md:px-2 flex items-center justify-center w-full md:w-[50%]'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h2 className='mb-7 text-3xl md:text-[40px] text-[#212529] cooper-m text-center'>How It Works</h2>


                        <div className='mb-7'>
                            <div className='flex items-center gap-3 md:gap-6'>
                                <div>
                                    <img src="/assets/how-it-works-dog.webp" alt="how-it-works-dog" className='w-[65px] h-[65px]' />
                                </div>

                                <div className='flex-1'>
                                    <strong className='text-[#212529] text-lg karla-b'>Choose your pet photo</strong>
                                    <p className='flex-1 text-base karla-r'>Upload a photo of your pet with your order. We accept 98% of all photos! Our team will always reach out if your photo isn't right.</p>
                                </div>
                            </div>

                            <div className='py-8 flex items-center gap-3 md:gap-6'>
                                <div>
                                    <img src="/assets/how-it-works-filter.webp" alt="how-it-works-filter" className='w-[65px] h-[65px]' />
                                </div>

                                <div className='flex-1'>
                                    <strong className='text-[#212529] text-lg karla-b'>Customize & make it your own</strong>
                                    <p className='flex-1 text-base karla-r'>Add your pet's name, choose a background color, customize the style, and select a frame & size.</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-3 md:gap-6'>
                                <div>
                                    <img src="/assets/how-it-works-shipping.webp" alt="how-it-works-shipping" className='w-[65px] h-[65px]' />
                                </div>

                                <div className='flex-1'>
                                    <strong className='text-[#212529] text-lg karla-b'>Artist Illustration & Delivery</strong>
                                    <p className='flex-1 text-base karla-r'>Once you submit your order, our artists get to work on digitally-illustrating your portrait.</p>
                                </div>
                            </div>

                        </div>

                        <button className='border border-bg-primary bg-bg-primary rounded-[50px] px-5 mb-1 text-base py-[6px] text-white'>Shop Best Sellers</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopBestSellers