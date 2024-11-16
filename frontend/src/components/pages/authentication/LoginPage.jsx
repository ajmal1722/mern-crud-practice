import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { userLoginApi } from '../../../utils/apis/userApi';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [userData, setUserData] = useState([]);

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError(''); // Clear error when user starts typing
    };

    useEffect(() => {
        // Get user data from local storage
        const storedData = JSON.parse(localStorage.getItem('userData')) || [];
        setUserData(storedData);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['email', 'password'];

        for (let field of requiredFields) {
            if (formData[field].trim() === '') {
                setError(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
                return;
            }
        }

        try {
            const response = await userLoginApi(formData);
            if (response && response.success) {
                // Save user data to local storage
                localStorage.setItem('userData', JSON.stringify(response.data));
                toast.success('Login successful!');
                navigate('/'); // Redirect to home page
            } else {
                setError(response?.message || 'Invalid credentials');
                toast.error(response?.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <div className='flex items-center justify-center pt-12'>
            <ToastContainer />
            <div className="border border-purple-700 rounded-lg lg:w-1/4 md:w-1/2 w-full m-4 p-6 text-center mt-24">
                <h1 className='text-2xl font-semibold mb-8 mt-2'>Login</h1>
                <form onSubmit={handleSubmit}>
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
                        placeholder='Enter your password...'
                        value={formData.password}
                        onChange={onChange}
                    />

                    {/* Error display */}
                    {error && (
                        <p style={{ marginTop: '-12px' }} className="text-red-600 my-3">
                            * {error}
                        </p>
                    )}

                    {/* Redirect to SignUp */}
                    <p className='text-sm mb-6'>
                        Don't have an account?{' '}
                        <Link to={'/signup'} className='px-1 text-blue-700 font-semibold hover:text-blue-900'>
                            Sign Up
                        </Link>
                    </p>

                    {/* Submit Button */}
                    <button type='submit' className="bg-green-500 text-white font-semibold w-28 py-2 cursor-pointer rounded-xl hover:bg-green-600">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;