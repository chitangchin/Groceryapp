"use client"

import Link from "next/link";
export default function Home() {

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  return (
   
    <>
      <div className="container mx-auto mt-20 text-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Welcome to MyApp</h1>
      <Link href="/SignUp">
        <button className="bg-teal-600 hover:bg-black text-white py-2 px-4 rounded mr-4 m-3 w-auto">
          SignUp
          </button>
          <hr></hr>
      </Link>
      <Link href="/Login">
        <button className="bg-teal-600 hover:bg-black-600 text-white py-2 px-4 rounded">
          Login
        </button>
      </Link>
    </div>
    </>
  );
}
