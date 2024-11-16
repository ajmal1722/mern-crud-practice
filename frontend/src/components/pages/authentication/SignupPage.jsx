import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userSignUpApi } from '../../../utils/apis/userApi';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const requiredFields = ['name', 'email', 'password'];
    
        for (let field of requiredFields) {
            if (formData[field].trim() === '') {
                setError(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
                return;
            }
        }
    
        const response = await userSignUpApi(formData);
        if (response) {
            navigate('/')
        }
    };    
    
    return (
        <div className='flex items-center justify-center pt-7'>
            <ToastContainer />
            <div className="border border-purple-800 rounded-lg lg:w-1/4 md:w-1/2 w-full m-4 mt-12 p-6 text-center">
                <h1 className='text-2xl font-semibold mb-8 mt-2'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <input 
                        name='name'
                        type="text" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Your name...'
                        value={formData.name}
                        onChange={onChange}
                    />

                    {/* Email Field */}
                    <input 
                        name='email'
                        type="email" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Your email...'
                        value={formData.email}
                        onChange={onChange}
                    />

                    {/* Password Field */}
                    <input 
                        name='password'
                        type="password" 
                        className='px-4 py-2 border border-gray-300 rounded-lg w-full mb-4'
                        placeholder='Create a password...'
                        value={formData.password}
                        onChange={onChange}
                    />

                    {/* Error display */}
                    {error && (
                        <p style={{marginTop: '-12px'}} className="text-red-600 my-3">
                            * {error}
                        </p>
                    )}

                    {/* Redirect to Login */}
                    <p className='text-sm mb-6'>
                        If you already have an account, click here to 
                        <Link to={'/login'} className='px-1 text-blue-700 font-semibold hover:text-blue-900'>
                            Login
                        </Link>
                    </p>

                    {/* Submit Button */}
                    <button type='submit' className="bg-green-500 text-white font-semibold w-28 py-2 cursor-pointer rounded-xl hover:bg-green-600">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;