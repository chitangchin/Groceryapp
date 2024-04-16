"use client"
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import Link from 'next/link'

// Context
import RecipesContext from '../Context/recipeContextProvider.js'
import UsernameContext from '../Context/userContext.js';
import LoggedInContext from '../Context/loggedInContext.js';
import IngredientsContext from '../Context/ingredientsContext.js';

// Components
import RecipeCards from '@/app/Components/recipeCards.js';

// Test
import { testRecipe } from '../dummyData.js';

const Dashboard = () => {

  // State
  const [recipes, setRecipes] = useContext(RecipesContext);
  const [username] = useContext(UsernameContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [ingredients, setIngredients] = useContext(IngredientsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //This logic below needs to be created as a server route
  const getRecipesAvailable = () => {
    // fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=5`, {
    //   method: 'GET',
    //   headers: {
    //     'X-API-Key': process.env.NEXT_PUBLIC_SPOONAPIKEY,
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => data.map((recipe) => setRecipes(existingValue => [...existingValue, recipe])))
    //   .catch(err => console.error(err));
    // Store recipes in local storage and in recipes state
    setRecipes(testRecipe);
  }

  

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const RecipesCardsDisplay = (recipesArr) => {
    console.log(recipesArr)
    return (recipesArr.recipesArr.map((recipe, i) => <RecipeCards data={recipe} key={i} />))
  }

  return (
    <div>
      <div className="text-xl font-semibold mr-6 focus:outline-none"></div>
      <nav className="flex justify-between items-center mb-8 navbar">
        <div className="flex items-center">
          <Link href="/dashboard" className="navbar-link text-xl font-semibold mr-6 focus:outline-none navbar-link">Home </Link>
          <Link href="/dashboard/ingredients" className="navbar-link text-xl font-semibold mr-6 focus:outline-none navbar-link">Add Ingredients
          </Link>
          <button onClick={getRecipesAvailable} className="text-xl focus:outline-none navbar-link"> {/* Add custom class */}
            Get Recipes
          </button>
        </div>
        <div>
          <button className="text-xl mr-4 focus:outline-none hamburger-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-xl mr-4 focus:outline-none hamburger-menu" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <li><a className="menu__item" href="#">Home</a></li>
        <li><a className="menu__item" href="#">About</a></li>
        <li><a className="menu__item" href="#">Settings</a></li>
        <li><a className="menu__item" href="#">Appearance</a></li>
        <li><a className="menu__item" href="#">Logout</a></li>
      </ul>
    </div>
      )}
      <RecipesCardsDisplay recipesArr={recipes} />
    </div>
  );
};

export default Dashboard;