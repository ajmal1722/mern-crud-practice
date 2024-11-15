import React from 'react'

const CategoryBox = () => {
    const categories = ['Extension', 'Mobile Phone Cases', 'Power Bank', 'Headsets', 'Charger And data cable'];

    return (
        <div className='bg-white py-6 p-4 my-2 rounded-md lg:w-1/4'>
            <h2 className='text-lg font-semibold my-3'>
                Product Categories
            </h2>
            {categories.map(item => (
                <h4 
                    key={item}
                    className='text-gray-600 my-5'
                >
                    { item }
                </h4>
            ))}
            <hr className='mt-6' />
        </div>
    )
}

export default CategoryBox
