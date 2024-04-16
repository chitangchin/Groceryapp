import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-600 text-white mx-auto px-4 sm:px-6 lg:px-8">
            <span>
            © {new Date().getFullYear()} DSD Cohort 2024 Team Vinod. Made with <a href="https://nextjs.org/">Next.js</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>. Deployed on <a href="https://vercel.com/">Vercel</a>.
            </span>

        </footer>
    )
}