"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0); // Default first FAQ open

    const toggleFaq = (index) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'What makes a good photo?',
            answer: (
                <>
                    <p className='text-[#212529] text-base mb-4 karla-r'>1.) Close up time! Be sure your pets photo is taken in a well lit area. Ideally without a filter and in natural lighting.</p>
                    <p className='text-[#212529] text-base mb-4 karla-r'>2.) Close up and head on, showing as much of the ears, head, neck, and chest as possible. This will allow us to get a good crop of your pets face.</p>
                    <p className='text-[#212529] text-base mb-4 karla-r'>3.) Avoid overhead, overly filtered or blurry photos. We are typically unable to illustrate photos of your pet lying down.</p>
                    <p className='text-[#212529] text-base karla-r'>Review our <Link href="#" className='text-bg-primary underline'>Image Guidelines</Link> for more information.</p>
                </>
            )
        },
        {
            question: 'Can I have more than one pet in my portrait?',
            answer: (
                <p className='text-[#212529] text-base karla-r'>Yes! Check out our one-pet portrait <Link href="#" className='text-bg-primary underline'>here</Link>, two-pet portraits <Link href="#" className='text-bg-primary underline'>here</Link> and three-pet portraits <Link href="#" className='text-bg-primary underline'>here</Link>. If you would like more than 3 pets in a single portrait, please reach out to our support team at <Link href="#" className='text-bg-primary underline'>support@westandwillow.com</Link> to help.</p>
            )
        },
        {
            question: 'What animals do you illustrate?',
            answer: (
                <p className='text-[#212529] text-base karla-r'>Yes! We create portraits for unique pets around the world. From cute bunnies to pet birds. Odds are, if its an animal, we will create a portrait for you. Please note: at this time we do not create portraits of humans (no matter how cute you are!).</p>
            )
        },
        {
            question: 'What if I need to make a change to my order?',
            answer: (
                <>
                    <p className='text-[#212529] text-base mb-4 karla-r'>Yes! We are happy to help with changes to your pet portrait order as long as you reach out to support@westandwillow.com within 30 minutes of your order being placed. </p>
                    <p className='text-[#212529] text-base karla-r'>After 30 minutes most changes, including address updates, can no longer be made. Please note, in some cases, changes to orders may result in shipping delays.</p>
                </>
            )
        },
        {
            question: 'Can I preview my portrait before it ships?',
            answer: (
                <p className='text-[#212529] text-base karla-r'>In an effort to get your order to you as efficiently as possible, we do not offer artwork previews or proofs. But dont worry! If your provided photo wont make the best portrait, we will reach out to you for a new one. Be sure to review Image Guidelines here .</p>
            )
        }
    ];

    return (
        <section className='pb-8 px-3'>
            <div className='max-w-[1296px] mx-auto w-full rounded-3xl bg-[#f6efeb] px-2 md:px-7 py-8 shadow-sm'>
                <h2 className='mb-5 text-[30px] text-center md:text-[40px] leading-[1.2] cooper-m text-[#212529]'>Frequently Asked Questions</h2>

                <div className='max-w-[768px] w-full mx-auto'>
                    {faqData.map((faq, index) => (
                        <div key={index} className='mb-2'>
                            <button
                                className={`text-[13px] xxs:text-[1rem] w-full bg-white rounded-[50rem] py-4 px-5 flex items-center justify-between gap-2 ${openIndex === index ? 'text-bg-primary' : 'text-[#141518]'}`}
                                style={{ boxShadow: "0 .125rem .25rem #00000020" }}
                                onClick={() => toggleFaq(index)}
                            >
                                <span className='flex-1 text-left cooper-m'>{faq.question}</span>
                                <div className={`w-8 h-8 bg-bg-primary rounded-full text-white flex justify-center items-center`}>
                                    {openIndex === index ? '-' : '+'}
                                </div>
                            </button>
                            <Transition
                                show={openIndex === index}
                                enter="transition-all duration-500"
                                enterFrom="max-h-0 opacity-0"
                                enterTo="max-h-screen opacity-100"
                                leave="transition-all duration-500"
                                leaveFrom="max-h-screen opacity-100"
                                leaveTo="max-h-0 opacity-0"
                            >
                                <div className="overflow-hidden">
                                    <div className='pb-5 pt-3 px-5'>
                                        {faq.answer}
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center items-center mt-10 mb-3'>
                    <button className='bg-bg-primary text-white px-7 text-lg py-[6px] karla-r rounded-[50px]'>View all</button>
                </div>
            </div>
        </section>
    )
}

export default Faq
