import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(true); // State to track the current theme
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const toggleThemeOptions = () => {
      setIsLightTheme(!isLightTheme); // Toggle between light and dark themes
    };

    return (
        <div>
            <nav className="flex justify-between items-center mb-8 navbar">
                <div className="flex items-center">
                    <Link href="/dashboard" className="navbar-link text-xl font-semibold mr-6 focus:outline-none navbar-link">Home</Link>
                    <Link href="/dashboard/ingredients" className="navbar-link text-xl font-semibold mr-6 focus:outline-none navbar-link">Add Ingredients</Link>
                    <Link href="/dashboard/recipes" className="navbar-link text-xl font-semibold mr-6 focus:outline-none navbar-link">Recipes</Link>
                </div>
                <div>
                    <button className="text-xl mr-4 focus:outline-none hamburger-menu" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className="text-xl mr-4 focus:outline-none hamburger-menu" />
                    </button>
                </div>
            </nav>
            <div id="menuOverlay" style={{ display: isMenuOpen ? 'block' : 'none' }}>
                <ul className="menu__box">
                    <li><a className="menu__item" href="#">Home</a></li>
                    <li><a className="menu__item" href="#">About</a></li>
                    <li><a className="menu__item" href="#">Settings</a></li>
                    <li>
                        <div className="flex items-center">
                            <a className="menu__item" href="#" onClick={toggleThemeOptions}>Appearance</a>
                            {isLightTheme ? (
                                <FontAwesomeIcon icon={faToggleOff} className="text-xl mr-4 focus:outline-none hamburger-menu" />
                            ) : (
                                <FontAwesomeIcon icon={faToggleOn} className="text-xl mr-4 focus:outline-none hamburger-menu" />
                            )}
                        </div>
                    </li>
                    <li><a className="menu__item" href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar