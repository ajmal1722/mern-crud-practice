import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center w-full h-16 bg-purple-100'>
            <div className='w-1/2 pl-20 flex gap-5 text-sm font-semibold'>
                <div className='rounded-full'>
                    <div>

                    </div>
                    <h3>
                        All Categories
                    </h3>
                </div>
                <button>
                    Deals 
                </button>
                <button>
                    Shop  
                </button>
                <button>
                    Our contacts 
                </button>
                <button>
                    Stores 
                </button>
            </div>
            <div className='bg-blue-200 w-1/2 pr-20'>

            </div>
        </div>
    )
}

export default Navbar
