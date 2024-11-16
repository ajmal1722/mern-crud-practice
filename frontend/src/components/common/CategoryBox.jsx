import React from 'react'
import ColourlessButton from '../reusable/ColourlessButton';
import ColouredButton from '../reusable/ColouredButton';

const CategoryBox = () => {
    const categories = ['Extension', 'Mobile Phone Cases', 'Power Bank', 'Headsets', 'Charger And data cable'];

    return (
        <div className='bg-white py-6 p-4 my-3 rounded-md lg:w-2/6 md:w-1/2  shadow-md border border-gray-200 md:mx-1 m-4'>
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
            <hr className='my-8 ' />
            <h2 className='text-lg font-semibold my-3'>
                Filter By Price
            </h2>
            <div className='flex gap-7'>
                <ColourlessButton value={399} />
                <ColourlessButton value={344} />
            </div>
            <input 
                type="range" 
                className='my-6 w-full accent-purple-900'
            />
            <div className='flex gap-7'>
                <ColourlessButton value={'Reset'} />
                <ColouredButton value={344} />
            </div>
        </div>
    )
}

export default CategoryBox
