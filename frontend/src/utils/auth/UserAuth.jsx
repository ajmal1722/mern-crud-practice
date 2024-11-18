import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isProtected } from "../apis/userApi";

const UserAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Initialize as null
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await isProtected();
                setIsAuthenticated(response?.isAuthenticated || false);
            } catch (error) {
                console.error("Error checking authentication:", error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false); // Ensure loading stops
            }
        };

        checkAuth();
    }, []); // Empty dependency array to run only once on mount

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                Loading...
            </div>
        );
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default UserAuth;