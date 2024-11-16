import React from 'react';
import CategoryBox from '../../common/CategoryBox';
import ProductListinBoxComponent from '../../common/ProductListinBoxComponent';

const HomePage = () => {
    return (
        <div className='lg:px-20 sm:flex bg-gray-50'>
            <CategoryBox />
            <ProductListinBoxComponent />
        </div>
    )
}

export default HomePage
