import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-600 text-white mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between py-2">
                <span className="text-sm">
                    © {new Date().getFullYear()} DSD Cohort Team Vinod. Made with <a href="https://nextjs.org/">Next.js</a> and <a href="https://expressjs.com/">Express</a>. Deployed on <a href="https://vercel.com/">Vercel</a>. <a href="https://github.com/chitangchin/Groceryapp"> GitHub Repository.</a> 
                </span>

            </div>


        </footer>
    );
}

