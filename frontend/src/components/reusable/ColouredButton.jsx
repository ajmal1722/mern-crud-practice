import React from 'react'

const ColouredButton = ({ value }) => {
    return (
        <div className='border rounded-sm w-full text-center py-2 bg-purple-900 text-white'>
            { value }
        </div>
    )
}

export default ColouredButton
