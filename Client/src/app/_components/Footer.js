import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between py-2">
                <span className="text-sm">
                    © {new Date().getFullYear()} DSD Cohort. Made with <Link className="hover:underline" href="https://nextjs.org/">Next.js</Link>, <Link className="hover:underline" href="https://expressjs.com/">Express</Link>, and <Link className="hover:underline" href="https://tailwindcss.com/">Tailwind CSS</Link>. Deployed on <Link className="hover:underline" href="https://vercel.com/">Vercel</Link>.
                </span>

                <div className="ml-4 flex justify-center items-center space-x-4">

                    <span className="text-sm">
                        <Link className="hover:underline" href="https://github.com/chitangchin/Groceryapp.git">About Us</Link>
                    </span>

                    <span className="text-sm">
                        <Link className="hover:underline" href="https://github.com/chitangchin/Groceryapp.git">Souce Code</Link>
                    </span>

                </div>

            </div>
        </footer>
    )
}



export default Footer;

