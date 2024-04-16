import { useRouter } from "next/navigation";
import React, { useState } from 'react'

export const SignupForm = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function handleSignUp() {
      console.log('Signing up with:', username, email, password, repeatPassword);
   
     
      router.push('/login');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simulate API call for authentication (replace with your actual logic)
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

      // Redirect to a different page after successful login (optional)
      router.push('/dashboard');
    } catch (error) {
      setErrorMsg('Invalid email or password');
    }
  };
  
  return (
    <div>
      <div className="grid grid-cols-10 grid-rows-10 gap-4 h-screen bg-gray-800 bg-opacity-50">
                <div className="col-start-2 col-span-3 row-start-3 row-span-6  border border-gray-300 bg-white rounded-lg p-8 opacity-85">
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
           
    </div>
    
  )
}

export default SignupForm
