import React from 'react'

const WhiteCircleButton = ({ value }) => {
    return (
        <div className='bg-white rounded-full p-2 text-xl border border-gray-200 cursor-pointer'>
            { value }
        </div>
    )
}

export default WhiteCircleButton
