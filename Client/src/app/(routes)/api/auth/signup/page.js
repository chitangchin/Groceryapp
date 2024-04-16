"use client"
import React from "react";
import Head from 'next/head';
import SignupForm from "@/app/_components/auth/signup/SignupForm";


export default function SignUp() {
   
    return (
        <div className="bg-login bg-cover ">
        {/* <Head>  
                <title>Signup</title>
                <meta name="description" content="Sign up page" />
        </Head> */}
            <SignupForm/>
        </div>
    );
}