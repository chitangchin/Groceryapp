
"use client";
import Link from 'next/link'
import { UserPassContext } from '../../Context/userContext.js';
import { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false);
  console.log(username);
  console.log(password);

//Have api call to check if user exists if they do then set state to true;

  return (
    //Global Div
    <div>
      {/*Sign Up and Login Div*/}
      <div>
        Login Test
        {/*Sign Up Div*/}
        <div>
          {/* Add input fields for signing up */}
          user name
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          Password
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Submit Button */}
          {/* If login is successful run loggedIn Context to save user data, else return error no user found*/}
          {/* first it will route to a page which will be wrapped around by a context that Saved user info will pass to a nav bar */}


          <button>
            submit
          </button>
          {/* Sign Up Button */}
          <Link href="/signUp">Sign Up</Link>
        </div>
        {/*End Sign Up and Login Div*/}
      </div>
    </div>
    //^ Global Div End
  )
}

export default Login