"use client"
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { CreateAccountInfo } from "@/app/_components/auth/register/CreateAccountInfo";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faEyeSlash)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const logger = require('pino')()

export const Login = () => {
    // const signin_api = process.env.NEXT_PUBLIC_API_LOGIN
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!username || !password){
            setError('Please fill in all fields');
            return;
        }
        try{
          const response = await fetch("https://groceryapp-backend-6r001gjdb-chitangchins-projects.vercel.app/user/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });
          const data = await response.json();
          if (!response.ok) {
            if (response.status === 404) {
              setError(data.message);
            }
            else if (response.status === 401) {
              setError(data.message);
            }
             else {
              setError('Registration failed');
            }
            return;
          }
          logger.info('Login successful:', data)
          router.push('/dashboard');
        } catch (error) {
          logger.error(error);
        } 
    }
    
    return (
        <div className="bg-login bg-cover ">
        <div className="grid grid-cols-10 grid-rows-10 gap-4 h-screen bg-black bg-opacity-25">
                  <form noValidate onSubmit={(e) => handleSubmit(e)} className="col-start-2 col-span-3 row-start-4 row-span-5 text-xs shadow-black shadow-2xl bg-white rounded-lg p-8 opacity-85">
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
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-black w-full px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <FontAwesomeIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-80"
                        icon={showPassword ? "eye-slash" : "eye"}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                      </div>
                          {error && <p className="text-red-500 ml-1">{error}</p>}
                          <div className="flex justify-between mx-1">
                            <Link href="/api/auth/register" className=" font-bold text-xm text-blue-500 hover:text-blue-700">
                              Create Account
                            </Link>
                            <Link href="#" className=" font-bold text-xm text-blue-500 hover:text-blue-700">
                              Forgot Password?
                            </Link>
                          </div>
                          <button
                              type="submit"
                              className="w-full px-4 py-2 text-white bg-[#f55a3e] rounded-md disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-800 focus:outline-none focus:bg-orange-800"
                          >
                              Login
                          </button>
                          </div>
                  </form>
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