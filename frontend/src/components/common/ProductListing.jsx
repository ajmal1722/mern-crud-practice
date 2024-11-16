import React from 'react';
import SingleProduct from '../reusable/SingleProduct';

const products = [
    {
        _id: '1',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAie6kasaCWKsATqixP2x47wiME5-OK0faQ&s',
        title: 'NEW Mobile Battery For Xiaomi Redmi 9 Prime',
        brand: 'GADPRO',
        rating: 4,
        price: 598,
        discountPrice: 478,
    },
    {
        _id: '3',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAie6kasaCWKsATqixP2x47wiME5-OK0faQ&s',
        title: 'NEW Mobile Battery For Xiaomi Redmi 9 Prime',
        brand: 'GADPRO',
        rating: 4,
        price: 598,
        discountPrice: 478,
    },
    {
        _id: '2',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAie6kasaCWKsATqixP2x47wiME5-OK0faQ&s',
        title: 'NEW Mobile Battery For Xiaomi Redmi 9 Prime',
        brand: 'GADPRO',
        rating: 4,
        price: 598,
        discountPrice: 478,
    },
];

const ProductListing = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <SingleProduct 
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductListing;