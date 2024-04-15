"use client";
import { useState, useContext } from 'react';
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

  const RecipesCardsDisplay = (recipesArr) => {
    console.log(recipesArr)
    return (recipesArr.recipesArr.map((recipe, i) => <RecipeCards data={recipe} key={i} />))
  }

  return (
    <div>Dashboard
      <Link href="/dashboard/ingredients">ingredients</Link>
      <RecipesCardsDisplay recipesArr={recipes} />
      <button onClick={getRecipesAvailable}>
        Get Recipes
      </button>
    </div>
  )
}

export default Dashboard