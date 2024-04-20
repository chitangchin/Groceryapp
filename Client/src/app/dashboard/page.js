"use client";
import { useContext } from 'react';
import Link from 'next/link'

// Context
import RecipesContext from '../Context/recipeContextProvider.js'
import UsernameContext from '../Context/userContext.js';
import LoggedInContext from '../Context/loggedInContext.js';

// Components
import RecipeCards from '@/app/_components/recipeCards.js';
import IngredientsBox from '../_components/ingredientsBox.js';

// Test
import { testRecipe } from '../dummyData.js';

const Dashboard = () => {

  // State
  const [recipes, setRecipes] = useContext(RecipesContext);
  const [username] = useContext(UsernameContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

  //This logic below needs to be created as a server route
  const getRecipesAvailable = () => {
    setRecipes(testRecipe);
  }

  const RecipesCardsDisplay = (recipesArr) => {
    console.log(recipesArr)
    return (recipesArr.recipesArr.map((recipe, i) => <RecipeCards data={recipe} key={i} />))
  }

  return (
    <div>Dashboard
      <Link href="/dashboard/ingredients">ingredients</Link>
      <IngredientsBox />
      <RecipesCardsDisplay recipesArr={recipes} />
      <button onClick={getRecipesAvailable}>
        Get Recipes
      </button>
    </div>
  )
}

export default Dashboard