import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterDropdown = ({ onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Filter & Sort');

    const filters = [
        { label: 'Filter & Sort', value: '' },
        { label: 'Best Sellers', value: 'bestSellers' },
        { label: 'Price: Low to High', value: 'priceLowToHigh' },
        { label: 'Price: High to Low', value: 'priceHighToLow' },
        { label: 'Reviews', value: 'reviews' },
        { label: 'Housewarming', value: 'Housewarming' },
        { label: 'Father\'s Day', value: 'Father\'s Day' },
        { label: 'Mother\'s Day', value: 'Mother\'s Day' },
        { label: 'Anniversary', value: 'Anniversary' },
        { label: 'Wedding', value: 'Wedding' },
        { label: 'Get Well', value: 'Get Well' },
        { label: 'Clear Filter', value: 'clear' },
    ];

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter.label);
        onFilterChange(filter.value);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left w-full md:w-auto">
            <div>
                <button
                    type="button"
                    className="border rounded-md w-full  flex items-center justify-between cursor-pointer outline-none border-[#ced4da] h-[38px] px-3 gap-5 text-base bg-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>{selectedFilter}</span>
                    <img src="/assets/filter.svg" alt="filter" className='w-5 h-5' />
                </button>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-full md:w-[160px] h-56 no-scrollbar  overflow-y-auto rounded-md z-10 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => handleFilterClick(filter)}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-bg-primary hover:text-white transition-colors duration-150"
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
