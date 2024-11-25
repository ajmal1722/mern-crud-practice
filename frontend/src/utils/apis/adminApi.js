import adminInstance from "../axios_instance/adminInstance";
import { toast } from "react-toastify";

const adminLoginApi = async (data) => {
    try {
        const response = await adminInstance.post('/login', data);
        console.log('admin login response:', response);
        return response.data;
    } catch (error) {
        console.log('error during admin login:', error.response);
        toast.error(error.response.data.error)
    }
}

export {
    adminLoginApi,
}