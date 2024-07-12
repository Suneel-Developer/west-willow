"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa';
import { GoArrowLeft } from "react-icons/go";
import FilterDropdown from './FilterDropdown';


const Products = () => {
    const productData = [
        {
            id: 1,
            name: "Custom Pet Portrait",
            price: "Rs.11,900.00",
            originalPrice: "Rs.15,600.00",
            reviews: "17,555",
            img: "/assets/cutom-pet-portrait.webp",
            bestSeller: true,
            category: "Housewarming"
        },
        {
            id: 2,
            name: "The Prince Custom Pet Portrait",
            price: "Rs.11,900.00",
            originalPrice: "",
            reviews: "2",
            img: "/assets/the-prince-custom-pet-portrait.webp",
            bestSeller: true,
            category: "Father's Day"
        },
        {
            id: 3,
            name: "Custom Pet Line Drawing Portrait",
            price: "Rs.11,900.00",
            originalPrice: "",
            reviews: "15,979",
            img: "/assets/custom-line-drawing-one-pet-portrait.webp",
            bestSeller: true,
            category: "Mother's Day"
        },
        {
            id: 4,
            name: "Custom Two Pet Portrait",
            price: "Rs.17,000.00",
            originalPrice: "Rs.21,300.00",
            reviews: "15,979",
            img: "/assets/custom-two-pet-portrait.webp",
            bestSeller: false,
            category: "Anniversary"
        },
        {
            id: 5,
            name: "The Proper Lady Custom Pet Portrait",
            price: "Rs.11,900.00",
            originalPrice: "",
            reviews: "1",
            img: "/assets/the-proper-lady-custom-pet-portrait.webp",
            bestSeller: false,
            category: "Wedding"
        },
        {
            id: 6,
            name: "Custom Embroidered Pet Crewneck",
            price: "Rs.22,700.00",
            originalPrice: "",
            reviews: "",
            img: "/assets/custom-embroidered-pet-crewneck.webp",
            bestSeller: false,
            category: "Get Well"
        },
        {
            id: 7,
            name: "Custom Two Pet Line Drawing Portrait",
            price: "Rs.17,000.00",
            originalPrice: "",
            reviews: "15,979",
            img: "/assets/custom-two-pet-line-drawing-portrait.webp",
            bestSeller: false,
            category: "Housewarming"
        },
        {
            id: 8,
            name: "The Duke & Duchess Custom Pet Portrait",
            price: "Rs.17,000.00",
            originalPrice: "",
            reviews: "",
            img: "/assets/the-duke-&-duchess-custom-pet-portrait.webp",
            bestSeller: true,
            category: "Father's Day"
        },
        {
            id: 9,
            name: "Three Pet Line Drawing Portrait",
            price: "Rs.22,700.00",
            originalPrice: "",
            reviews: "15,979",
            img: "/assets/three-pet-line-drawing-portrait.webp",
            bestSeller: false,
            category: "Mother's Day"
        },
        {
            id: 10,
            name: "Custom Embroidered Pet Hoodie",
            price: "Rs.25,500.00",
            originalPrice: "",
            reviews: "",
            img: "/assets/custom-embroidered-pet-hoodie.webp",
            bestSeller: false,
            category: "Anniversary"
        },
        {
            id: 11,
            name: "Custom Embroidered Pet Trucker Hat",
            price: "Rs.18,400.00",
            originalPrice: "",
            reviews: "",
            img: "/assets/custom-embroidered-pet-trucker-hat.webp",
            bestSeller: false,
            category: "Wedding"
        },
        {
            id: 12,
            name: "Custom Three Pet Portrait",
            price: "Rs.22,700.00",
            originalPrice: "Rs.28,300.00",
            reviews: "15,979",
            img: "/assets/custom-three-pet-portrait.webp",
            bestSeller: false,
            category: "Get Well"
        },
    ];


    const productsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');

    const handleFilterChange = (filterValue) => {
        setFilter(filterValue);
        setCurrentPage(1);
    };

  
    const filteredProducts = productData.filter(product => {
        if (filter === 'bestSellers') {
            return product.bestSeller;
        } else if (filter === 'priceLowToHigh') {
            return true;
        } else if (filter === 'priceHighToLow') {
            return true;
        } else if (filter === 'reviews') {
            return product.reviews;
        } else if (filter && filter !== 'clear') {
            return product.category === filter;
        }
        return true;
    });

    if (filter === 'priceLowToHigh') {
        filteredProducts.sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, "")));
    } else if (filter === 'priceHighToLow') {
        filteredProducts.sort((a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, "")));
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <section className='mb-10 px-3'>
            <div className='max-w-[1296px] mx-auto w-full'>

                <div className='flex items-center justify-between mb-3 flex-col md:flex-row gap-5'>
                    <h2 className='text-[#141518] text-[32px] md:text-[48px] leading-[1.2] cooper-m'>
                        West & Willow Pet Portraits
                    </h2>
                    <FilterDropdown onFilterChange={handleFilterChange} />
                </div>

                <ul className='flex items-center gap-4 my-10 justify-between w-full overflow-x-auto no-scrollbar'>
                    <li className='px-4 py-2 cursor-pointer rounded-xl min-w-fit bg-[#ccebff] flex items-center gap-3'>
                        <img src="/assets/calender.svg" alt="calender" className='w-10 h-10 bg-[#fdd95c] rounded-full p-2' />
                        <span className='font-medium text-xl karla-m whitespace-nowrap'>Housewarming</span>
                    </li>
                    <li className='px-4 py-2 cursor-pointer rounded-xl min-w-fit bg-[#f1641e] flex items-center gap-3'>
                        <img src="/assets/calender.svg" alt="calender" className='w-10 h-10 bg-[#ccebff] rounded-full p-2' />
                        <span className='font-medium text-xl karla-m whitespace-nowrap'> Father's Day</span>
                    </li>

                    <li className='px-4 py-2 cursor-pointer rounded-xl min-w-fit bg-[#8c8af0] flex items-center gap-3'>
                        <img src="/assets/calender.svg" alt="calender" className='w-10 h-10 bg-[#fdd95c] rounded-full p-2' />
                        <span className='font-medium text-xl karla-m whitespace-nowrap'> Mother's Day </span>
                    </li>
                    <li className='px-4 py-2 cursor-pointer rounded-xl min-w-fit bg-[#21b55a] flex items-center gap-3'>
                        <img src="/assets/calender.svg" alt="calender" className='w-10 h-10 bg-[#fdd95c] rounded-full p-2' />
                        <span className='font-medium text-xl karla-m whitespace-nowrap'> Anniversary </span>
                    </li>
                    <li className='px-4 py-2 cursor-pointer rounded-xl min-w-fit bg-[#8c8af0] flex items-center gap-3'>
                        <img src="/assets/calender.svg" alt="calender" className='w-10 h-10 bg-[#fdd95c] rounded-full p-2' />
                        <span className='font-medium text-xl karla-m whitespace-nowrap'>Wedding</span>
                    </li>
                    <li className='px-4 py-2 cursor-pointer rounded-xl min-w-fit bg-[#2638c0] flex items-center gap-3'>
                        <img src="/assets/calender.svg" alt="calender" className='w-10 h-10 bg-[#fdd95c] rounded-full p-2' />
                        <span className='font-medium text-white text-xl karla-m whitespace-nowrap'>Get Well</span>
                    </li>
                </ul>


                <div className='grid grid-cols-1 xxxs:grid-cols-2 lmd:grid-cols-3 gap-4 sm:gap-7 mt-8'>
                    {currentProducts.map((product) => (
                        <div key={product.id} className='cursor-pointer'>
                            <div className='bg-[#F8F8F8] mb-3 relative rounded-2xl' style={{ boxShadow: "0 .125rem .25rem #00000020" }}>
                                <img src={product.img} alt={product.name} className='h-[242px] lmd:h-[408px] w-full rounded-2xl' />
                                {product.bestSeller && (
                                    <span className='py-[4.2px] px-[7.8px] text-white bg-bg-primary text-xs karla-m tracking-wide rounded-[50px] absolute top-2 left-2 uppercase'>Best Seller</span>
                                )}
                            </div>
                            <div>
                                <div className='flex justify-between gap-4 flex-col lg:flex-row'>
                                    <div className='flex-1'>
                                        <Link href="#" className='text-[#141518] text-lg mb-1 leading-[1.2] cooper-m'>{product.name}</Link>
                                        {product.reviews && (
                                            <div className='flex items-center gap-2 py-1'>
                                                <ul className='flex items-center gap-[2px]'>
                                                    {[...Array(5)].map((_, i) => (
                                                        <li key={i}><FaStar className='text-base text-[#1A2829]' /></li>
                                                    ))}
                                                </ul>
                                                <p className='mr-2 text-base overflow-hidden text-ellipsis font-normal karla-r'>{product.reviews} Reviews</p>
                                            </div>
                                        )}
                                        <p className='mb-2 uppercase'>
                                            <span className='mr-1 text-[#6c757d] line-through'>{product.originalPrice}</span>
                                            <span className='text-[#141518]'>FROM {product.price}</span>
                                        </p>
                                    </div>
                                    <button className='py-1 px-5 text-sm text-white border border-bg-primary bg-bg-primary rounded-[50px] text-center h-fit w-fit mt-1'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className='flex justify-center mt-8'>
                    <button
                        className={`w-12 h-10 mr-2 flex items-center justify-center border rounded-sm ${currentPage === 1 ? 'border-bg-light-darker cursor-not-allowed' : 'bg-white text-black'}`}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        <GoArrowLeft className='text-xl' />
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`w-10 h-10 mr-2 flex items-center justify-center border karla-m rounded-sm ${currentPage === i + 1 ? 'bg-bg-primary text-white' : 'border-bg-light-darker'}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className={`w-12 h-10 mr-2 flex items-center justify-center border rounded-sm ${currentPage === totalPages ? 'border-bg-light-darker cursor-not-allowed' : 'bg-white text-black'}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <GoArrowLeft className='text-xl rotate-180' />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Products;
