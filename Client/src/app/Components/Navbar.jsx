"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="inline-block w-full bg-green-500">
            <div className="justify-between flex items-center p-4">
                <Link href="/" className="text-2xl font-bold p-2">
                    Grocery App
                </Link>

                
            </div>
        </nav>

    )
}