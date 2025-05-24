import { NavLink } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(""); // 🔹 Added

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
        navigate("/");
    };

    return (
        <div className="">
            <div className="flex justify-center items-center px-[5%] py-5 border-b border-[#eee] bg-white z-[100] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                STEAL HIS LOOK
            </div>

            <div className="float-left ml-11.5 mt-18 w-[300px] lg:ml-120 lg:w-[600px] p-10 bg-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] relative z-[10]">
                <div className="text-center mb-[35px]">
                    <h2 className="font-bodoni text-[20px] mb-[12px] tracking-[0.5px] font-normal">Welcome Back</h2>
                    <p className="text-[#555] text-[16px] font-cormorant italic tracking-[0.5px]">Sign in to continue to Steal His Look</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-[1em]">
                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="w-full px-[15px] py-[12px] border border-[#ddd] rounded text-[15px] font-light font-montserrat transition duration-200 ease-in-out focus:border-black focus:shadow"
                        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2) inset" }}
                    />
                    {errors.name && <span className="text-lg text-[#FF6161]">{"!!! " + errors.name.message + " !!!"}</span>}

                    <input
                        {...register("password")}
                        placeholder="Password"
                        type="password"
                        className="w-full px-[15px] mt-6 py-[12px] border border-[#ddd] rounded text-[15px] font-light font-montserrat transition duration-200 ease-in-out focus:border-black focus:shadow"
                        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2) inset" }}
                    />
                    {errors.password && <span className="text-lg text-[#FF6161]">{"!!! " + errors.password.message + " !!!"}</span>}

                    {/* 🔻 Inline login error (under password input) */}
                    {loginError && (
                        <span className="text-xs flex justify-center text-[#FF6161] mt-2">
                            !!! {loginError} !!!
                        </span>
                    )}

                    <div className="flex gap-2 mb-4 mt-5">
                        <input type="checkbox" id="remember" className="accent-black" />
                        <label htmlFor="remember" className="text-sm">Remember me</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full block text-center p-[14px] bg-black text-white border-none rounded text-[14px] cursor-pointer transition-all duration-300 ease-in-out uppercase tracking-[2px] font-normal"
                        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
                    >
                        Login
                    </button>

                    <div className="flex justify-center mt-[22px] text-[14px]">
                        <NavLink
                            to="/register"
                            className="text-[#333] font-cormorant italic text-[16px] tracking-[0.3px] hover:underline"
                        >
                            Don't have an account?
                        </NavLink>
                    </div>
                </form>
            </div>

            <div className="border-y-3 lg:border-y-6">
                <div className="absolute h-[45em] blur-xs p-15 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&h=900&q=80')] bg-center bg-cover relative"></div>
            </div>
        </div>
    );
};

export default Login;
