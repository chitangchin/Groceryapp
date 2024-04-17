"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { CreateAccountInfo } from "@/app/_components/auth/register/CreateAccountInfo";


export const Login = () => {
const router = useRouter();
    const [username, setUsername] = useRef('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useRef('');

    return (
        <div className="bg-login bg-cover ">
        <div className="grid grid-cols-10 grid-rows-10 gap-4 h-screen bg-black bg-opacity-25">
                  <div className="col-start-2 col-span-3 row-start-4 row-span-4 text-xs shadow-black shadow-2xl bg-white rounded-lg p-8 opacity-85">
                      <h2 className="text-2xl text-black text-center font-bold ">Log In</h2>
                      <div className=" space-y-5 flex-col justify-center items-center mt-4">
                      <div className="relative">
                        <FaUser className="absolute inset-2 left-2 
                          flex items-center  
                          text-base text-gray-500 " /> 
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            className="text-black w-full px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div className="relative">
                        <RiLockPasswordFill className="absolute inset-2 left-2
                        flex items-center  
                        text-base text-gray-500 " />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-black w-full px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                      </div>
                     
                          
                          <div className="flex justify-between mx-1">
                            <Link href="/api/auth/register" className=" font-bold text-xm text-blue-500 hover:text-blue-700">
                              Create Account
                            </Link>
                            <a href="#" className=" font-bold text-xm text-blue-500 hover:text-blue-700">
                              Forgot Password?
                            </a>
                          </div>
                          <button
                              type="submit"
                              className="w-full px-4 py-2 text-white bg-[#f55a3e] rounded-md disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-800 focus:outline-none focus:bg-orange-800"
                              disabled={password !== repeatPassword || error} 
                          >
                              Login
                          </button>
                          </div>
                        {/* //TODO: Add error message
                        //TODO: Add success message
                        //TODO: Add loading indicator
                        //TODO: Add password visibility toggle
                        //TODO: Add repeat password visibility toggle
                      //TODO: Add validation for email and password */}
  
                  </div>
                      <div className="col-start-5 col-span-5 row-start-3 row-span-6 ">
                        <div className="flex items-center justify-center h-full p-4">
                          <CreateAccountInfo/>
                        </div>
                      </div>
              </div>
             
      </div>
    );
};

export default Login