import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, confirmPassword } = form;

        if (!username || !password || !confirmPassword) {
            alert("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const newUser = { username, password };
        navigate("/");
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
            <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&h=900&q=80')" }}></div>

            <div className="absolute top-0 w-full text-center py-5 bg-white shadow z-10">
                <h1 className="text-xl font-bold tracking-wide">STEAL HIS LOOK</h1>
            </div>

            <div className="z-10 w-full max-w-md p-10 bg-white rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <h2 className="font-bodoni text-[20px] mb-[12px] tracking-[0.5px] font-normal">
                        Create Account
                    </h2>
                    <p className="text-[#555] text-[16px] font-cormorant italic tracking-[0.5px]">
                        Join the community
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="username" className="block mb-2">USERNAME</label>
                        <input
                            type="text"
                            id="username"
                            value={form.username}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[#ddd] rounded text-[15px] focus:border-black focus:shadow"
                            placeholder="Username"
                            required
                            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2) inset" }}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2">PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[#ddd] rounded text-[15px] focus:border-black focus:shadow"
                            placeholder="••••••••"
                            required
                            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2) inset" }}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block mb-2">CONFIRM PASSWORD</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[#ddd] rounded text-[15px] focus:border-black focus:shadow"
                            placeholder="••••••••"
                            required
                            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2) inset" }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 bg-black text-white rounded text-[14px] uppercase tracking-[2px]"
                    >
                        Sign Up
                    </button>

                    <div className="mt-6 text-center text-[14px]">
                        <NavLink
                            to="/login"
                            className="text-[#333] font-cormorant italic text-[16px] tracking-[0.3px] hover:underline"
                        >
                            Already have an account?
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
