import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { loginUser } from './API.js';

const userSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
    rememberMe: z.boolean().optional(),
});

const Login = () => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: {
            rememberMe: false
        }
    });

    const onSubmit = async (data) => {
        setLoginError('');
        setIsLoading(true);

        try {
            const { success, data: resData, error } = await loginUser(data);

            if (success) {
                navigate('/');
            } else {
                setLoginError(error);
            }
        } catch (err) {
            setLoginError('An unexpected error occurred. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm z-0"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1350&h=900&q=80')",
                }}
            />
            <div className="absolute top-0 left-0 w-full bg-white shadow z-10 py-4 text-center font-bold tracking-wider text-xl">
                STEAL HIS LOOK
            </div>

            <div className="relative z-10 bg-white rounded-lg shadow-xl px-10 py-12 w-full max-w-md mx-10">
                <div className="text-center mb-8">
                    <h2 className="font-bodoni text-2xl mb-2">Welcome Back</h2>
                    <p className="text-gray-600 italic font-cormorant">
                        Sign in to continue to Steal His Look
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <input
                            {...register('username')}
                            placeholder="Username"
                            className="w-full px-4 py-3 border rounded shadow-inner focus:outline-none focus:border-black"
                        />
                        {errors.username && (
                            <p className="text-sm text-red-500">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register('password')}
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 border rounded shadow-inner focus:outline-none focus:border-black"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            {...register('rememberMe')}
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                            Remember me
                        </label>
                    </div>

                    {loginError && (
                        <p className="text-sm text-red-500 text-center">{loginError}</p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-black text-white rounded uppercase tracking-wider hover:bg-gray-900 transition disabled:bg-gray-400"
                    >
                        {isLoading ? 'Signing In...' : 'Login'}
                    </button>

                    <div className="text-center mt-6">
                        <NavLink
                            to="/register"
                            className="text-gray-700 font-cormorant italic hover:underline"
                        >
                            Don't have an account?
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;