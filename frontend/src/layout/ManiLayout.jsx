import { Outlet } from "react-router-dom"
import Navbar from "../components/common/Navbar"

const ManiLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default ManiLayout
