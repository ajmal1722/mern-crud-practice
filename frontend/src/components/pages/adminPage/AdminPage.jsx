import { useState } from "react"
import { Outlet } from "react-router-dom"
import AdminNavbar from "./AdminNavbar"
import AdminSidebar from "./AdminSidebar"

const AdminPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
        <div className="flex h-screen">
            <AdminSidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />

            <div className="flex-1 flex flex-col">
                <AdminNavbar toggleSidebar={toggleSidebar} />

                <div className="p-5 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default AdminPage
