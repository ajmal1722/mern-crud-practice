import React from 'react'

const AdminSidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const menuItems = [
        { name: "Dashboard", link: "/admin/dashboard" },
        { name: "Products", link: "/admin/products" },
        { name: "Orders", link: "/admin/orders" },
        { name: "Users", link: "/admin/users" },
        { name: "Settings", link: "/admin/settings" },
    ];

    return (
        <div
            className={`fixed lg:relative h-screen w-64 bg-purple-200 flex flex-col p-5 transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 lg:translate-x-0 z-50`}
        >
            <button
                className="lg:hidden absolute top-4 right-4 bg-purple-300 rounded-full p-2"
                onClick={toggleSidebar}
            >
                ✕
            </button>
            <h2 className="text-lg font-bold mb-5">Admin Panel</h2>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="mb-4">
                        <a
                            href={item.link}
                            className="text-gray-700 hover:text-purple-800 font-medium"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdminSidebar
