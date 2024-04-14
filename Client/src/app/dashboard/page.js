"use client";
import { useContext } from 'react';
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

// Store array of recipe ids

// Display user added recipes on dashboard

// recipeCards:
// <recipeCards img={img} title={title} ingredients={ingredients}, cookingTime={cookingTime}/>
// img, title, ingredients, cookingTime

//pass array of recipe ids to recipes route

const Dashboard = () => {

  // State
  const [recipes, setRecipes] = useContext(RecipesContext);
  const [username] = useContext(UsernameContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [ingredients] = useContext(IngredientsContext);

//convert arr of ingredients to a string of ingredients user owns


//This logic below needs to be created as a server route
const getRecipesAvailable = () => {
  fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=5`, {
    method: 'GET',
    headers: {
      'X-API-Key': process.env.NEXT_PUBLIC_SPOONAPIKEY,
    }
  })
    .then(response => response.json())
    .then(data => data.map((recipe) => setRecipes(existingValue => [...existingValue, recipe])))
    .catch(err => console.error(err));

    // Store recipes in local storage and in recipes state
    
}

console.log("This is recipes",recipes);

  // Loop through api call for recipes
  // Create Recipe Cards for each recipe
  // Show user collected recipes

  // if refresh
  return (
    <div>Dashboard
      <RecipeCards data={testRecipe} />
      <RecipeCards data={testRecipe} />
      <RecipeCards data={testRecipe} />
      <button onClick={getRecipesAvailable}>
        submit
      </button>
      <Link href="/dashboard/recipes">recipes</Link>
      <Link href="/dashboard/ingredients">ingredients</Link>
    </div>
  )
}
// Read below to get the user name param
// https://nextjs.org/docs/app/api-reference/functions/use-search-params

export default Dashboard