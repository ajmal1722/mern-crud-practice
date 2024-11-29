import React from "react";

const AdminProductListing = () => {
    // Mock product data
    const products = [
        {
            id: 1,
            imageUrl: "https://via.placeholder.com/150",
            title: "Wireless Headphones",
            brand: "Sony",
            rating: 4.5,
            price: 199.99,
            discountPrice: 149.99,
        },
        {
            id: 2,
            imageUrl: "https://via.placeholder.com/150",
            title: "Smartphone",
            brand: "Samsung",
            rating: 4.8,
            price: 999.99,
            discountPrice: 899.99,
        },
        {
            id: 3,
            imageUrl: "https://via.placeholder.com/150",
            title: "Gaming Laptop",
            brand: "Alienware",
            rating: 4.7,
            price: 1999.99,
            discountPrice: 1799.99,
        },
    ];

    return (
        <div className="p-5">
            <h1 className="text-2xl font-semibold mb-5">Product Listing</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-lg"
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="h-40 w-full object-cover rounded-md"
                        />
                        <h2 className="text-lg font-bold mt-3">{product.title}</h2>
                        <p className="text-sm text-gray-500">{product.brand}</p>
                        <p className="text-yellow-500">
                            Rating: {product.rating} / 5
                        </p>
                        <div className="mt-3">
                            <span className="text-lg font-bold text-gray-800">
                                ${product.discountPrice.toFixed(2)}
                            </span>
                            {product.discountPrice < product.price && (
                                <span className="text-sm text-gray-500 line-through ml-2">
                                    ${product.price.toFixed(2)}
                                </span>
                            )}
                        </div>
                        <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                            Edit Product
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminProductListing;