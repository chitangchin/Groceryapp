
"use client";
import { useContext, useRef } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import UsernameContext from '../Context/userContext';
import LoggedInContext from '../Context/loggedInContext';

const Login = () => {
  //Routing to Dashboard Onclick with additional Functionality
  const router = useRouter();

  // State
  const [username, setUsername] = useContext(UsernameContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const inputUsername = useRef(null);
  const inputPassword = useRef(null);

  //Checking if User Exists;
  const userCheck = () => {
    /* 
     * Username: inputUsername.current.value
     * Password: inputPassword.current.value
    */
    //Enter Logic to check if user exists in database
    if (true) {
      setUsername(inputUsername.current.value);
      setLoggedIn(true);
      router.push(`/dashboard`);
      return;
    } else {
      //Return error message that user not found
    }
  }

  return (
    <div className="h-screen grid justify-items-center content-center ">
      <div className="grid justify-items-center content-center border-2 border-rose-500">
        <input
          className="text-center border-2 border-black"
          type="text"
          placeholder="Username"
          ref={inputUsername}
        />
        <input
          className="text-center border-2 border-black"
          type="password"
          minlength="8"
          placeholder="Password"
          ref={inputPassword}
        />
      </div>
      <div className="space-x-4 m-2">
        <button className="border-2 border-black" onClick={userCheck}>
          Login
        </button>
        <Link className="border-2 border-black" href="/signUp">
          Sign Up
          </Link>
      </div>
    </div>
  )
}

export default Login