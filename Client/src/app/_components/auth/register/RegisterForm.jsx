import { useRouter } from "next/navigation";
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { CreateAccountInfo } from "./CreateAccountInfo";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Link from "next/link";
export const RegisterForm = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [error, setError] = useState(false);

  function handleSignUp() {
      console.log('Signing up with:', username, email, password, repeatPassword);
   
     
      router.push('/login');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      router.push('/dashboard');
    } catch (error) {
      setErrorMsg('Invalid email or password');
    }
  };
  
  return (
    <div>
      <div className="grid grid-cols-10 grid-rows-10 gap-4 h-screen bg-black bg-opacity-25">
                <div className="col-start-2 col-span-3 row-start-3 row-span-6  text-xs shadow-black shadow-2xl bg-white rounded-lg p-8 opacity-85">
                    <h2 className="text-2xl text-black text-center font-bold ">Create Account</h2>
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
                      <MdOutlineAlternateEmail  className="absolute inset-2 left-2 
                        flex items-center  
                        text-base text-gray-500 " /> 
                      <input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={username}
                          required
                          onChange={(e) => setEmail(e.target.value)}
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
                    <div className="relative">
                      <RiLockPasswordFill className="absolute inset-2 left-2
                      flex items-center  
                      text-base text-gray-500 " />
                      <input
                          type="password"
                          placeholder="Repeat Password"
                          value={repeatPassword}
                          required
                          onChange={(e) => setRepeatPassword(e.target.value)}
                          className="text-black w-full px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>     
                        
                      <div className="flex items-center justify-between ml-1">
                       <div>
                       <input
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="text-gray-500  ml-3">
                            I accept Terms and Conditions
                        </label>
                       </div>
                        </div>
                        <div className="flex justify-between ml-1">
                          <Link href="/api/auth/login" className=" font-bold text-xm text-blue-500 hover:text-blue-700">
                            Sign In
                          </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-[#f55a3e] rounded-md disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-800 focus:outline-none focus:bg-orange-800"
                            disabled={!acceptTerms || error} 
                        >
                            Register
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
    
  )
}

