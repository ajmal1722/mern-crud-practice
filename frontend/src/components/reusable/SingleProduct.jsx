import { addToCartApi } from "../../utils/apis/userApi"

const SingleProduct = ({ product }) => {
    const addToCart = async () => {
        const response = await addToCartApi(2)
    }
    
    return (
        <div
            className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 my-10 hover:scale-105 transition duration-300"
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
                    {product.brand}
                </p>
                <div className="flex items-center mb-2">
                    <div className="text-purple-900 text-lg">
                        {'★'.repeat(product.rating)}
                        {'☆'.repeat(5 - product.rating)}
                    </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <p className="text-sm text-gray-400 line-through">
                        ₹{product.price}
                    </p>
                    <p className="text-sm text-purple-900 font-semibold">
                        ₹{product.discountPrice}
                    </p>
                </div>
                <button onClick={addToCart} className="w-full bg-purple-900 text-yellow-300 py-2 px-4 rounded-md hover:bg-purple-800 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default SingleProduct
