import userInstance from "../axios_instance/userInstance";
import { toast } from "react-toastify";

const userLoginApi = async (data) => {
    try {
        const response = await userInstance.post('/login', data)
        console.log('login response:', response.data)
    } catch (error) {
        console.log(error)
        toast.error(error.response.data)
    }
}

export {
    userLoginApi,
}