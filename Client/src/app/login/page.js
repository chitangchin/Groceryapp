
"use client";
import Link from 'next/link'
import { UserPassContext } from '../../Context/userContext.js';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false);
  console.log(username);
  console.log(password);

//Checking if User Exists;
  const userCheck = () => {
    //Enter Logic to check if user exists in database
    if (true) {
      setisLoggedIn(true);
      router.push(`/dashboard?userid=${username}`)
      return;
    } else {
      //Return error message that user not found
    }
  }

  return (
    <div class="h-screen grid justify-items-center content-center ">
        <div class="grid justify-items-center content-center border-2 border-rose-500">
          <input
            class="text-center border-2 border-black"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            class="text-center border-2 border-black"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         </div>
        <div className="space-x-4 m-2">
        <a className="border-2 border-black" onClick={userCheck}>
          Login
        </a>
        <Link className="border-2 border-black" href="/signUp">Sign Up</Link>
        </div>
      </div>
  )
}

export default Login