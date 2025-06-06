"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ApiService from '@/app/services/api';

const CategoryNav = ({ onFilterChange, initialTab = 'all', initialValue = null }) => {
    const [vehicleCategories, setVehicleCategories] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
    const [activeTab, setActiveTab] = useState(initialTab);
    const [activeSubCategory, setActiveSubCategory] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [vehicleData, productData] = await Promise.all([
                    ApiService.getVehicleCategories(),
                    ApiService.getProductTypes()
                ]);

                setVehicleCategories(vehicleData);
                setProductTypes(productData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load data. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Only fetch data on mount

    // Handle URL-based filtering only once on mount
    useEffect(() => {
        if (initialTab !== 'all' && initialValue && !loading) {
            const filterType = initialTab === 'category' ? 'vehicle' : 'productType';
            if (
                (filterType === 'vehicle' && vehicleCategories.some(cat => cat.name === initialValue)) ||
                (filterType === 'productType' && productTypes.some(type => type.name === initialValue))
            ) {
                onFilterChange({
                    type: filterType,
                    value: initialValue
                });
            }
        }
    }, [loading]); // Only run when loading state changes

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveSubCategory(null);
        
        if (tab === 'all') {
            onFilterChange({ type: 'all' });
        }
    };

    const handleSubCategoryClick = (subCategory) => {
        setActiveSubCategory(subCategory);
        
        if (activeTab === 'category') {
            onFilterChange({ type: 'vehicle', value: subCategory });
        } else if (activeTab === 'type') {
            onFilterChange({ type: 'productType', value: subCategory });
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="transition-all duration-500">
            {/* Main Tabs */}
            <div className="flex gap-4 justify-center py-10">
                {['all', 'category', 'type'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`py-2 ${
                            activeTab === tab
                                ? 'corner-btn'
                                : 'w-[130px]'
                        }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Sub Categories */}
            {activeTab !== 'all' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                    {activeTab === 'category' &&
                        vehicleCategories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => handleSubCategoryClick(category.name)}
                                className={`flex items-center justify-between px-3 rounded-lg transition-all hover-product-gradient hover:text-white relative group
                                    ${
                                        activeSubCategory === category.name
                                            ? 'product-gradient text-white'
                                            : 'bg-[#D9D9D9] hover:bg-gray-200'
                                    }`}
                            >
                                <span className='text-[100px] text-white font-bold opacity-20 absolute top-0 right-0 inset-0 flex items-center justify-center'>
                                    {category.shortName}
                                </span>
                                <span className="font-medium text-left text-xl z-10">
                                    {category.name}
                                </span>
                                
                                <div className={`w-full h-32 relative transition-all duration-300`}>
                                    <Image
                                        src={category.img}
                                        alt={category.name}
                                        fill
                                        className={`w-full object-contain transition-all group-hover:-translate-y-4 duration-300 ${activeSubCategory === category.name ? '-translate-y-4' : ''}`}
                                    />
                                </div>
                            </button>
                        ))}
                   
                    {activeTab === 'type' &&
                        productTypes.map((type) => (
                            <button
                                key={type.name}
                                onClick={() => handleSubCategoryClick(type.name)}
                                className={`flex items-center justify-between px-3 rounded-lg transition-all hover-product-gradient hover:text-white relative group
                                    ${
                                        activeSubCategory === type.name
                                            ? 'product-gradient text-white'
                                            : 'bg-[#D9D9D9] hover:bg-gray-200'
                                    }`}
                            >
                                <span className='text-[100px] text-white font-bold opacity-20 absolute top-0 right-0 inset-0 flex items-center justify-center'>
                                    {type.shortName}
                                </span>
                                <span className="font-medium text-left text-xl z-10">
                                    {type.name}
                                </span>
                                
                                <div className={`w-full h-32 relative transition-all duration-300`}>
                                    <Image
                                        src={type.img}
                                        alt={type.name}
                                        fill
                                        className={`w-full object-contain transition-all group-hover:-translate-y-4 duration-300 ${activeSubCategory === type.name ? '-translate-y-4' : ''}`}
                                    />
                                </div>
                            </button>
                        ))}
                </div>
            )}
            <span className='w-full h-10 relative z-20 bg-white block'></span>
        </div>
    );
};

export default CategoryNav;
