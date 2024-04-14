"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function SignUp() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    function handleSignUp() {
        console.log('Signing up with:', username, email, password, repeatPassword);
     
       
        router.push('/Login');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-64">
                <div className="mb-4 flex items-center">
                    
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="mr-2"
                    />
                    <label className="text-gray-500 text-sm">
                        I accept Terms and Conditions
                    </label>
                </div>
                <button
                    onClick={handleSignUp}
                    className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
                    disabled={!acceptTerms} // Disable button if terms are not accepted
                >
                    Sign Up
                </button>
                
            </div>
        </div>
    );
}