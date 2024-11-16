import userInstance from "../axios_instance/userInstance";
import { toast } from "react-toastify";

const userLoginApi = async (data) => {
    try {
        const response = await userInstance.post('/login', data)
        console.log('login response:', response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        toast.error(error.response.data.error)
    }
}

const userSignUpApi = async (data) => {
    try {
        const response = await userInstance.post('/signup', data)
        console.log('signup response:', response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        toast.error(error.response.data.error)
    }
}

export {
    userLoginApi,
    userSignUpApi,
}