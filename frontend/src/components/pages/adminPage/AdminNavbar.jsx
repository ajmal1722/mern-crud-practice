import { FaBars } from 'react-icons/fa'

const AdminNavbar = ({ toggleSidebar }) => {
    return (
        <div className="h-16 bg-purple-100 px-4 lg:px-20 flex items-center justify-between">
            <button
                className="text-2xl lg:hidden"
                onClick={toggleSidebar}
            >
                <FaBars />
            </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
    );
};

export default AdminNavbar;