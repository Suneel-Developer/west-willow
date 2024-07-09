import React from 'react'

const ShopNow = () => {
    return (
        <section className='mb-4 px-3'>
            <div className='max-w-[1296px] mx-auto w-full grid grid-cols-1 md:grid-cols-2'>

                <div className='mb-3 md:px-2 flex items-center'>
                    <div className='md:max-w-[680px] md:pr-10 w-full'>
                        <h2 className='mb-4 text-3xl md:text-[40px] text-[#212529] cooper-m'>Give Back to Animals</h2>
                        <p className='text-[#212529] text-base karla-r mb-7'>
                            West & Willow is a proud sponsor of <strong className='karla-b'>Best Friends Animal Society</strong>, one of the world's largest pet rescue & research organizations. Your purchase helps us make monthly donations to this deserving community.
                        </p>

                        <button className='border border-bg-primary bg-bg-primary rounded-[50px] px-5 mb-1 text-base py-[6px] text-white'>LEARN MORE</button>
                    </div>
                </div>

                <div className='md:px-2'>
                    <img src="/assets/give-back-to-animals.webp" alt="Give Back to Animals" className='rounded-3xl md:mt-0 mt-6' />
                </div>
            </div>
        </section>
    )
}

export default ShopNow