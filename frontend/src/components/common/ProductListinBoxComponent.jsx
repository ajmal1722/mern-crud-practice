import React from 'react';
import ProductTitleBox from './ProductTitleBox';
import ProductListing from './ProductListing';

const ProductListinBoxComponent = () => {
    return (
        <div className='w-full m-5'>
            <ProductTitleBox />
            <ProductListing />
        </div>
    )
}

export default ProductListinBoxComponent
