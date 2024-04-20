"use client";
import { useContext } from 'react';
import RecipesContext from '../../Context/recipeContextProvider.js';
import UsernameContext from '@/app/Context/userContext.js';
import LoggedInContext from '@/app/Context/loggedInContext.js';
import IngredientsContext from '@/app/Context/ingredientsContext.js';
//import RecipeCards from '@/app/Components/recipeCards.js'; // Corrected component name
import Link from 'next/link'
import Image from 'next/image'
import { testRecipe } from '@/app/dummyData.js';
//import RecipePage from '../components/RecipePage';

const Recipes = ({ params }, amountRecipe) => {
  const { recipeId } = params;
  const [recipes, setRecipes] = useContext(RecipesContext);
  const [username, setUsername] = useContext(UsernameContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [ingredients, setIngredients] = useContext(IngredientsContext);

  //This logic below needs to be created as a server route
  
  const RecipesCardsDisplay = (recipesArr) => {
    console.log(recipes);
    return recipes.map((recipe) => (console.log(recipe.id)))
  }

  // RecipesCardsDisplay(recipes)
  console.log(recipes);
  recipes.map((recipe) => (<div key={recipe.id} className="border rounded-md overflow-hidden">
        
  <Link href={`recipes/${recipe.id}`} passHref> 
    <Image
      src={recipe.image}
      width={300}
      height={300}
      alt={recipe.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
      <p className="text-sm">{recipe.summary}</p>
    </div>
</Link>
<div className="bg-gray-100 p-4 flex justify-between">
  <span className="text-sm">Rating: {recipe.spoonacularScore}/100</span>
  <span className="text-sm">Cooking Time: {recipe.readyInMinutes} mins</span>
</div>
</div>


))

  return (
    <div className="container mx-auto py-8">
<h1 className="text-3xl font-bold mb-4">Recipes</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          </div>
          { recipes.map((recipe) => (<div key={recipe.id} className="border rounded-md overflow-hidden">
        
        <Link href={`recipes/${recipe.id}`} passHref> 
          <Image
            src={recipe.image}
            width={300}
            height={300}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
            <p className="text-sm">{recipe.summary}</p>
          </div>
      </Link>
      <div className="bg-gray-100 p-4 flex justify-between">
        <span className="text-sm">Rating: {recipe.spoonacularScore}/100</span>
        <span className="text-sm">Cooking Time: {recipe.readyInMinutes} mins</span>
      </div>
      </div>
      ))}
          </div>
          </div>
  )
}

export default Recipes;