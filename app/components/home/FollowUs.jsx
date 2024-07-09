import Link from 'next/link'
import React from 'react'

const followUsData = [
    { src: "/assets/followus_01.webp", alt: "followus_01", link: "https://www.instagram.com/example1" },
    { src: "/assets/followus_02.webp", alt: "followus_02", link: "https://www.instagram.com/example2" },
    { src: "/assets/followus_03.webp", alt: "followus_03", link: "https://www.instagram.com/example3" },
    { src: "/assets/followus_04.webp", alt: "followus_04", link: "https://www.instagram.com/example4" },
    { src: "/assets/followus_05.webp", alt: "followus_05", link: "https://www.instagram.com/example5" },
    { src: "/assets/followus_06.jpg", alt: "followus_06", link: "https://www.instagram.com/example6" },
    { src: "/assets/followus_07.webp", alt: "followus_07", link: "https://www.instagram.com/example7" },
    { src: "/assets/followus_08.webp", alt: "followus_08", link: "https://www.instagram.com/example8" },
];

const FollowUs = () => {
    return (
        <section className='pt-20 pb-4'>
            <div className='flex items-center justify-center mb-6 flex-col text-center'>
                <h2 className='text-bs-dark text-[2rem] cooper-m leading-[1.2]'>Follow us</h2>
                <Link href="https://www.instagram.com/thewestwillow" className='text-bg-primary-darker text-[1.125rem] mb-1 karla-r leading-[1.2]'>@thewestwillow</Link>
            </div>

            <div className='overflow-hidden whitespace-nowrap mx-auto w-full flex'>
                <ul className='comm flex justify-between'>
                    {followUsData.map((item, index) => (
                        <li key={index} className='p-1 md:p-2 min-w-[200px] md:min-w-[300px] md:min-h-[284px] min-h-[192px]'>
                            <Link href={item.link} className='block overflow-hidden rounded-[1.25rem] relative'>
                                <img src={item.src} alt={item.alt} loading='lazy' className='w-full h-full rounded-[1.25rem]' />

                                {/* Overlay  */}
                                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 bg-[#00000080] transition-all duration-200 ease-out'>
                                    <img src="/assets/instagram.svg" alt="instagram" className='w-8 h-8' />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='comm flex justify-between'>
                    {followUsData.map((item, index) => (
                        <li key={index} className='p-1 md:p-2 min-w-[200px] md:min-w-[300px] md:min-h-[284px] min-h-[192px]'>
                            <Link href={item.link} className='block overflow-hidden rounded-[1.25rem] relative'>
                                <img src={item.src} alt={item.alt} loading='lazy' className='w-full h-full rounded-[1.25rem]' />

                                {/* Overlay  */}
                                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 bg-[#00000080] transition-all duration-200 ease-out'>
                                    <img src="/assets/instagram.svg" alt="instagram" className='w-8 h-8' />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FollowUs
