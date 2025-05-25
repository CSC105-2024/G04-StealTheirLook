import { NavLink } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    const userSchema = z.object({
        name: z.string().min(1, "Name is required"),
        password: z.string().min(1, "Password is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = (data) => {
        // You can add logic here to validate against users
        // setLoginError("Invalid username or password");
        navigate("/");
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&h=900&q=80')] bg-cover bg-center blur-sm z-0" />

            {/* Header */}
            <div className="absolute top-0 left-0 w-full bg-white border-b border-gray-200 shadow z-10 py-4 text-center font-bold tracking-wider text-xl">
                STEAL HIS LOOK
            </div>

            {/* Login Card */}
            <div className="relative z-10 bg-white rounded-lg shadow-xl px-10 mx-10 py-12 w-full max-w-md">
                <div className="text-center mb-8">
                    <h2 className="font-bodoni text-2xl mb-2 tracking-[0.5px] font-normal">Welcome Back</h2>
                    <p className="text-gray-600 text-base italic font-cormorant tracking-[0.5px]">
                        Sign in to continue to Steal His Look
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded text-sm font-light font-montserrat focus:outline-none focus:border-black focus:ring-1 focus:ring-black shadow-inner"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500 mt-1">
                                !!! {errors.name.message} !!!
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 border border-gray-300 rounded text-sm font-light font-montserrat focus:outline-none focus:border-black focus:ring-1 focus:ring-black shadow-inner"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">
                                !!! {errors.password.message} !!!
                            </p>
                        )}
                    </div>

                    {loginError && (
                        <p className="text-sm text-red-500 text-center mt-[-8px]">
                            !!! {loginError} !!!
                        </p>
                    )}

                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="remember" className="accent-black" />
                        <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-black text-white rounded text-sm uppercase tracking-[2px] hover:bg-gray-900 transition"
                    >
                        Login
                    </button>

                    <div className="text-center mt-6">
                        <NavLink
                            to="/register"
                            className="text-gray-700 font-cormorant italic text-base hover:underline"
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
