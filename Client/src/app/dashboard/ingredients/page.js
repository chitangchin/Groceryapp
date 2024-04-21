"use client"
import { useState, useEffect, useContext, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'


//Context
import IngredientsContext from '@/app/Context/ingredientsContext';
import RecipesContext from '@/app/Context/recipeContextProvider';

//Components
import IngredientSearch from '@/app/_components/IngredientSearch.js';
 import AutocompleteSearch from '@/app/_components/AutoCompleteSearch.js';
import IngredientsBox from '@/app/_components/ingredientsBox'; //WORK IN PROGRESS
import UserContext from '@/app/Context/userContext';
import { testRecipe } from '@/app/dummyData';
import Navbar from '@/app/_components/navbar';

const Ingredients = () => {

  // State
  const [newUser, setNewUser] = useContext(UserContext);
  const [recipes, setRecipes] = useContext(RecipesContext);
  const [ingredients, setIngredients] = useContext(IngredientsContext);

  // Variables
  const router = useRouter();

  // Functions
  // - Helper functions

  // - Database Requests

  const getRecipesAvailable = (ingredients) => {
    //Make call to backend to get recipes availabe
    setRecipes(testRecipe);
  }

  const IngredientsRequestDB = () => {
    if (newUser) {
      IngredientsPostRequestDB();

    } else {
      IngredientsPutRequestDB();
    }
    getRecipesAvailable(ingredients);
    setNewUser(false);
    router.push('recipes');
  }

  const IngredientsPostRequestDB = () => {
    ingredients
    //*Add post request logic
  }
  const IngredientsPutRequestDB = () => {
    //*Add post request logic
  }

  return (
    <div>
      {newUser ? <a>Lets get started by adding some ingredients you have!</a> :  <Navbar/>}
      <IngredientSearch />
      <button onClick={IngredientsRequestDB} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-8" >
        Next
      </button>
    </div>
  )
}

export default Ingredients