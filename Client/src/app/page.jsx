"use client"

import Link from "next/link";
export default function Home() {


  return (
    <div className="container mx-auto mt-20 text-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Welcome to GroceryApp</h1>
      <Link href="/api/auth/signup">
        <button className="bg-teal-600 hover:bg-black text-white py-2 px-4 rounded mr-4 m-3 w-auto">
          SignUp
          </button>
          <hr></hr>
      </Link>
      <Link href="/api/auth/login">
        <button className="bg-teal-600 hover:bg-black-600 text-white py-2 px-4 rounded">
          Login
        </button>
      </Link>
    </div>
  );
}
