import React from 'react'

const SingleProduct = ({ product }) => {
    return (
        <div
            className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 my-10"
        >
            <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                    Brand: {product.brand}
                </p>
                <div className="flex items-center mb-2">
                    <div className="text-yellow-400">
                        {'★'.repeat(product.rating)}
                        {'☆'.repeat(5 - product.rating)}
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <p className="text-xl font-bold text-gray-800">
                        ₹{product.discountPrice}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                        ₹{product.price}
                    </p>
                </div>
                <button className="w-full bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default SingleProduct
