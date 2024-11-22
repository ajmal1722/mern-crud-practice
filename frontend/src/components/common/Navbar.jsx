import { Link } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import WhiteCircleButton from "../reusable/WhiteCircleButton";
import PurpleCircleButton from "../reusable/PurpleCircleButton";

const Navbar = () => {
    return (
        <div className="flex items-center w-full h-16 bg-purple-100 px-4 md:px-8 lg:px-16">
            {/* Left Section */}
            <div className="w-1/2 flex gap-3 md:gap-5 text-sm font-semibold flex-wrap md:flex-nowrap">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
                        {/* Optional Icon/Logo */}
                    </div>
                    <h3 className="hidden sm:block">All Categories</h3>
                </div>
                <button className="hover:text-purple-700">Deals</button>
                <button className="hover:text-purple-700">Shop</button>
                <button className="hover:text-purple-700 hidden md:block">Our Contacts</button>
                <button className="hover:text-purple-700 hidden lg:block">Stores</button>
            </div>

            {/* Right Section */}
            <div className="w-1/2 flex justify-end gap-2 sm:gap-4">
                <WhiteCircleButton value={<CiUser />} />
                <WhiteCircleButton value={<CiHeart />} />
                <Link to="/cart">
                    <PurpleCircleButton value={<GrCart />} />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;