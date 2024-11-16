import axios from "axios"; 

const userInstance = axios.create({
    baseURL: 'http://localhost:8000/api/user',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        timeout: 1000
    }    
})

export default userInstance;