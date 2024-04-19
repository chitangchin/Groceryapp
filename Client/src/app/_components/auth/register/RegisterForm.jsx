import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from 'react'
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
  const [error, setError] = useState("");

  function handleSignUp() {
      console.log('Signing up with:', username, email, password, repeatPassword);
      router.push('/login');
  }

  const validateUserInput = () => {
    const USERNAME_REGEX = /^[0-9A-Za-z]{4,16}$/;
    const PASSWORD_REGEX = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || !email || !password || !repeatPassword) {
      setError('Please fill in all fields');
      return false;
    }
    if (!USERNAME_REGEX.test(username)) {
      setError('Invalid username');
      return false;
    }
    if (!PASSWORD_REGEX.test(password)) {
      setError('Invalid password');
      return false;
    }
    if (!EMAIL_REGEX.test(email)) {
      setError('Invalid email');
      return false;
    }
    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    validateUserInput();
    // try {
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Login failed');
    //   }

    //   const data = await response.json();
    //   console.log('Login successful:', data);

    //   router.push('/dashboard');
    // } catch (error) {
    //   setError('Invalid email or password');
    // }
  };

  const handleUsernameChange = (event) => {
    const usernameInput = event.target.value;
    const USERNAME_REGEX = /^[0-9A-Za-z]{4,16}$/;
    console.log("usernameInput" + ' ' + USERNAME_REGEX.test(usernameInput));
    if (!USERNAME_REGEX.test(usernameInput)) {
      setError('Must be 4-16 alphanumeric');
    } else {
      setError('');
    }
    setUsername(usernameInput);
  };

  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    console.log("emailInput" + ' ' + EMAIL_REGEX.test(emailInput));
    if (!EMAIL_REGEX.test(emailInput)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
    setEmail(emailInput);
  }

  const handlePasswordChange = (event) => {
    const passwordInput = event.target.value;
    const PASSWORD_REGEX = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
    if (!PASSWORD_REGEX.test(passwordInput)) {
      setError('Must be 8-32 alphanumeric');
    } else {
      setError('');
    }
    setPassword(passwordInput);
  }

  
  return (
    <div>
      <div className="grid grid-cols-10 grid-rows-10 gap-4 h-screen bg-black bg-opacity-25">
                <form onSubmit={(event) => handleSubmit(event)} className="col-start-2 col-span-3 row-start-3 row-span-6  text-xs shadow-black shadow-2xl bg-white rounded-lg p-8 opacity-85">
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
                          onChange={(e) => handleUsernameChange(e)}
                          className="text-black w-full px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      {error === 'Must be 4-16 alphanumeric' && <p className="text-red-500 ml-1 mt-1 text-xs">{error}</p>}

                    </div>
                     <div className="relative">
                      <MdOutlineAlternateEmail  className="absolute inset-2 left-2 
                        flex items-center  
                        text-base text-gray-500 " /> 
                      <input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          required
                          onChange={(e) => handleEmailChange(e)}
                          className="text-black w-full px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                        {error === 'Please enter a valid email address' && <p className="text-red-500 ml-1 mt-1 text-xs">{error}</p>}
                    </div>
                    <div className="relative">
                      <RiLockPasswordFill className="absolute inset-2 left-2
                      flex items-center  
                      text-base text-gray-500 " />
                      <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => handlePasswordChange(e)}
                          className="text-black w-full px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                       {error === 'Invalid password' && <p className="text-red-500 ml-1 mt-1">{error}</p>}
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
                       {error === 'Passwords do not match' && <p className="text-red-500 ml-1 mt-1">{error}</p>}
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
                          <Link href="/api/auth/login" className=" font-bold text-xm text-blue-500 hover:text-blue-700 ">
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
                </form>
                    <div className="col-start-5 col-span-5 row-start-3 row-span-6 ">
                      <div className="flex items-center justify-center h-full p-4">
                        <CreateAccountInfo/>
                      </div>
                    </div>
            </div>
           
    </div>
    
  )
}

