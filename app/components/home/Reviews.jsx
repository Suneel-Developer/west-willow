"use client"
import React, { useState } from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';



// Reviews Dummy Data 
const reviewsData = [
    {
        id: 1,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I was a bit worried I would not receive what was advertised, but it was better than I had anticipated! I loved it! My SIL loved it and it looked just like her pups!',
        image: '/assets/reviews_01.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
    {
        id: 2,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I’m in love !!',
        image: '/assets/reviews_02.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/02.webp',
        },
    },
    {
        id: 3,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I was a bit worried I would not receive what was advertised, but it was better than I had anticipated! I loved it! My SIL loved it and it looked just like her pups!',
        image: '/assets/reviews_03.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/02.webp',
        },
    },
    {
        id: 4,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I was a bit worried I would not receive what was advertised, but it was better than I had anticipated! I loved it! My SIL loved it and it looked just like her pups!',
        image: '/assets/reviews_04.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
    {
        id: 5,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I’m in love !!',
        image: '/assets/reviews_04.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/02.webp',
        },
    },
    {
        id: 6,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I was a bit worried I would not receive what was advertised, but it was better than I had anticipated! I loved it! My SIL loved it and it looked just like her pups!',
        image: '/assets/reviews_01.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
    {
        id: 7,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I’m in love !!',
        image: '/assets/reviews_01.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/02.webp',
        },
    },
    {
        id: 8,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I was a bit worried I would not receive what was advertised, but it was better than I had anticipated! I loved it! My SIL loved it and it looked just like her pups!',
        image: '/assets/reviews_02.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
    {
        id: 9,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I was a bit worried I would not receive what was advertised, but it was better than I had anticipated! I loved it! My SIL loved it and it looked just like her pups!',
        image: '/assets/reviews_03.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
    {
        id: 10,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I’m in love !!',
        image: '/assets/reviews_01.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
    {
        id: 11,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I was a bit worried I would not receive what was advertised, but it was better than I had anticipated! I loved it! My SIL loved it and it looked just like her pups!',
        image: '/assets/reviews_01.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
    {
        id: 12,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I’m in love !!',
        image: '/assets/reviews_04.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
    {
        id: 13,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I was a bit worried I would not receive what was advertised, but it was better than I had anticipated! I loved it! My SIL loved it and it looked just like her pups!',
        image: '/assets/reviews_04.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/02.webp',
        },
    },
    {
        id: 14,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I’m in love !!',
        image: '/assets/reviews_03.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
    {
        id: 15,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I was a bit worried I would not receive what was advertised, but it was better than I had anticipated! I loved it! My SIL loved it and it looked just like her pups!',
        image: '/assets/reviews_01.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/02.webp',
        },
    },
    {
        id: 16,
        name: 'Beatriz R.',
        date: '08/07/2024',
        text: 'I’m in love !!',
        image: '/assets/reviews_01.jpg',
        product: {
            name: 'Onward VIP Protection+',
            image: '/assets/01.webp',
        },
    },
];

const Reviews = () => {
    const initialVisibleReviews = 12;
    const [visibleReviews, setVisibleReviews] = useState(initialVisibleReviews);
    const [allVisible, setAllVisible] = useState(false);

    const showMoreReviews = () => {
        if (allVisible) {
            setVisibleReviews(initialVisibleReviews);
            setAllVisible(false);
        } else {
            const newVisibleReviews = visibleReviews + 4;
            if (newVisibleReviews >= reviewsData.length) {
                setVisibleReviews(reviewsData.length);
                setAllVisible(true);
            } else {
                setVisibleReviews(newVisibleReviews);
            }
        }
    };

    return (
        <section className='px-4'>
            <div className='max-w-[1080px] w-full mx-auto'>
                <div className='mt-5 mb-2 pb-[7px] flex items-center gap-2'>
                    <ul className='flex items-center gap-[2px]'>
                        {[...Array(5)].map((_, i) => (
                            <li key={i}><FaStar className='text-xl text-[#1A2829]' /></li>
                        ))}
                    </ul>
                    <p className='mr-2 text-base overflow-hidden text-ellipsis font-normal karla-r'>17,555 Reviews</p>
                </div>

                <div>
                    <div className='columns-1 xxs:columns-2 sm:columns-3 lmd:columns-4 gap-4'>
                        {reviewsData.slice(0, visibleReviews).map(review => (
                            <div key={review.id} className='mb-4 break-inside-avoid-column bg-white rounded-sm h-fit w-full overflow-hidden' style={{ boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)" }}>
                                <div>
                                    <img src={review.image} alt="reviews_01" className='w-full object-center' />
                                </div>

                                <div>
                                    <div className='p-[10px]'>
                                        <div className='flex items-center gap-2 flex-wrap text-base karla-m'>
                                            <span>{review.name}</span>
                                            <FaCheckCircle className='text-xs' />
                                        </div>
                                        <p className='text-[#767676] text-[11px] pt-[5px] h-5 karla-r'>{review.date}</p>
                                        <ul className='h-[27px] pt-[10px] flex items-center gap-[2px]'>
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i}><FaStar className='text-[#1A2829] text-xs' /></li>
                                            ))}
                                        </ul>
                                        <p className='pt-[10px] text-[15px] leading-[19px] karla-r whitespace-pre-wrap'>{review.text}</p>
                                    </div>

                                    <div className='border-t border-[#e2e2e2] py-3 px-2 flex gap-2 min-h-[70px]'>
                                        <img src={review.product.image} alt="01" className='max-h-[50px]' />
                                        <p className='text-sm karla-r'>{review.product.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='pt-20 pb-[10px] flex justify-center'>
                        <button onClick={showMoreReviews} className='rounded-sm border border-[#E8E8E8] inline-block py-[6px] px-3 text-xs text-[#282828]'>
                            {allVisible ? "Show less reviews" : "Show more reviews"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
