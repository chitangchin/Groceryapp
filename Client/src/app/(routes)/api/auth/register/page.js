"use client"
import React from "react";
import Head from 'next/head';
import {RegisterForm} from "@/app/_components/auth/register/RegisterForm";


export default function SignUp() {
   
    return (
        <div className="bg-login bg-cover ">
        {/* <Head>  
                <title>Signup</title>
                <meta name="description" content="Sign up page" />
        </Head> */}
            <RegisterForm/>
        </div>
    );
}