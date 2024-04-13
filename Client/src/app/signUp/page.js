"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Checking if Username exists already, Checking if password is good, then adding user to database;
  const addUser = () => {
    //Enter Logic to check if user exists in database
    //Enter Logic to check if password is valid
    //Enter Logic to add user to db
      router.push(`/dashboard/ingredients?&newUser=true`)
      return;
  }

  return (
    <div className="h-screen grid justify-items-center content-center ">
        <div className="grid justify-items-center content-center border-2 border-rose-500">
          <input
            className="text-center border-2 border-black"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="text-center border-2 border-black"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         </div>
        <div className="space-x-4 m-2">
        <a className="border-2 border-black" onClick={addUser}>
          Submit
        </a>
        </div>
      </div>
  )
}

export default SignUp