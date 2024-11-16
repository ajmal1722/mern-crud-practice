import React from 'react';

const ProductTitleBox = () => {
    return (
        <div className="flex justify-between items-center mt-9">
            <h1 className="text-2xl font-semibold">
                Mobile Accessories
            </h1>
            <div>
                <select
                    name="sort"
                    id="sort"
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="newArrivals">New Arrivals</option>
                </select>
            </div>
        </div>
    );
};

export default ProductTitleBox;