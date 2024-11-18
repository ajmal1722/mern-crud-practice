import { Link } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import WhiteCircleButton from "../reusable/WhiteCircleButton";
import PurpleCircleButton from "../reusable/PurpleCircleButton";

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
            <div className='w-1/2 pr-20 flex justify-end gap-4'>
            <WhiteCircleButton value={<CiUser />} />
            <WhiteCircleButton value={<CiHeart />} />
                <Link to='/cart'>
                    <PurpleCircleButton value={<GrCart />} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
