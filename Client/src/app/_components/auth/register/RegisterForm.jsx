import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { CreateAccountInfo } from "./CreateAccountInfo";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faEyeSlash)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const logger = require('pino')()

const register = process.env.REGISTER_USER_API
export const RegisterForm = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [data, setData] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!email || !password || !username){
      setError('Please fill in all fields');
      logger.error('Please fill in all fields');
      return;
    }

    //? simulate loading
    setIsLoading(true);
    await setTimeout( () => {
      setIsLoading(false);
    }, 4000);
    if(error){
      logger.error(error);
      return;
    }

    logger.info('Registering user: ' + username + ' with email: ' + email + ' with password: ' + password);

    try{

      const response = await fetch("https://groceryapp-backend-fqdms9kor-chitangchins-projects.vercel.app/user/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 409) {
          setError(data.message);
        } else {
          setError('Registration failed. Please try again');
        }
        return;
      }
      logger.info('Login successful:', data)
      router.push('/dashboard');
    } catch (error) {
      logger.error(error);
    } 
    finally{
      // setIsLoading(false);
    }
    
  };

  const handleUsernameChange = (event) => {
    const usernameInput = event.target.value;
    const USERNAME_REGEX = /^[0-9A-Za-z]{4,16}$/;
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
  
  const handleRepeatPasswordChange = (event) => {
    const repeatPasswordInput = event.target.value;
    if (repeatPasswordInput !== password) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
    setRepeatPassword(repeatPasswordInput);
  }
  return (
    <div>
      <div className="grid grid-cols-10 grid-rows-10 gap-4 h-screen bg-black bg-opacity-25">
                <form noValidate onSubmit={(e) => handleSubmit(e)} className="col-start-2 col-span-3 row-start-3 row-span-6  text-xs shadow-black shadow-2xl bg-white rounded-lg p-6 opacity-85">
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
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => handlePasswordChange(e)}
                          className="text-black w-full px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      >
                      </input>
                      <FontAwesomeIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-80 "
                        icon={showPassword ? "eye-slash" : "eye"}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                    {error === 'Must be 8-32 alphanumeric' && <span className="text-red-500 ">{error}</span>}
                    <div className="relative">
                      <RiLockPasswordFill className="absolute inset-2 left-2
                      flex items-center  
                      text-base text-gray-500 " />
                      <input
                          id="repeatPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Repeat Password"
                          value={repeatPassword}
                          required
                          onChange={(e) => handleRepeatPasswordChange(e)}
                          className="text-black w-full px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <FontAwesomeIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-80"
                        icon={showPassword ? "eye-slash" : "eye"}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>     
                       <span className="mt-1">{error === 'Passwords do not match' && <span className="text-red-500 ml-1 mt-1">{error}</span>}
                       {error === 'Please fill in all fields' && <span className="text-red-500 ml-1 mt-1">{error}</span>}
                       {error === 'Username already exists' && <span className="text-red-500 ml-1 mt-1">{error}</span>}
                       </span>
                      <div className="flex items-center justify-between ml-1">
                       <div className="flex items-center">
                       <input
                          id="acceptTerms"
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="acceptTerms" className="text-gray-500  ml-3">
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
                            className="flex items-center justify-center w-full px-4 py-2 text-white bg-[#f55a3e] rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-orange-800 focus:outline-none focus:bg-orange-800"
                            disabled={!acceptTerms || error || isLoading} 
                        >
                         {isLoading ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-4 " viewBox="0 0 24 24" ><rect width={9} height={9} x={1.5} y={1.5} fill="currentColor" rx={1}><animate id="svgSpinnersBlocksScale0" attributeName="x" begin="0;svgSpinnersBlocksScale1.end+0.225s" dur="0.9s" keyTimes="0;.2;1" values="1.5;.5;1.5"></animate><animate attributeName="y" begin="0;svgSpinnersBlocksScale1.end+0.225s" dur="0.9s" keyTimes="0;.2;1" values="1.5;.5;1.5"></animate><animate attributeName="width" begin="0;svgSpinnersBlocksScale1.end+0.225s" dur="0.9s" keyTimes="0;.2;1" values="9;11;9"></animate><animate attributeName="height" begin="0;svgSpinnersBlocksScale1.end+0.225s" dur="0.9s" keyTimes="0;.2;1" values="9;11;9"></animate></rect><rect width={9} height={9} x={13.5} y={1.5} fill="currentColor" rx={1}><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.225s" dur="0.9s" keyTimes="0;.2;1" values="13.5;12.5;13.5"></animate><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.225s" dur="0.9s" keyTimes="0;.2;1" values="1.5;.5;1.5"></animate><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.225s" dur="0.9s" keyTimes="0;.2;1" values="9;11;9"></animate><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.225s" dur="0.9s" keyTimes="0;.2;1" values="9;11;9"></animate></rect><rect width={9} height={9} x={13.5} y={13.5} fill="currentColor" rx={1}><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.9s" keyTimes="0;.2;1" values="13.5;12.5;13.5"></animate><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.9s" keyTimes="0;.2;1" values="13.5;12.5;13.5"></animate><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.9s" keyTimes="0;.2;1" values="9;11;9"></animate><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.9s" keyTimes="0;.2;1" values="9;11;9"></animate></rect><rect width={9} height={9} x={1.5} y={13.5} fill="currentColor" rx={1}><animate id="svgSpinnersBlocksScale1" attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.675s" dur="0.9s" keyTimes="0;.2;1" values="1.5;.5;1.5"></animate><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.675s" dur="0.9s" keyTimes="0;.2;1" values="13.5;12.5;13.5"></animate><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.675s" dur="0.9s" keyTimes="0;.2;1" values="9;11;9"></animate><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.675s" dur="0.9s" keyTimes="0;.2;1" values="9;11;9"></animate></rect></svg>
                              <p className="text-white text-sm ">Processing...</p>
                            </>
                          ) : (
                            <p className="text-white text-sm">Register</p>
                          )}
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
    
  )
}


