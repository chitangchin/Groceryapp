"use client"
import { useState, useEffect, useRef, useContext, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'

//Context
import IngredientsContext from '@/app/Context/ingredientsContext';
import RecipesContext from '@/app/Context/recipeContextProvider';

//Components
import IngredientSearch from '../../Components/IngredientSearch';

//Test Data
import { testRecipe } from '@/app/dummyData';

const Ingredients = () => {

  // State
  const [newUser, setNewUser] = useState(false);
  const [recipes, setRecipes] = useContext(RecipesContext);
  const [ingredients, setIngredients] = useContext(IngredientsContext);

  // Variables
  const router = useRouter();

  // Functions
  // - Helper functions
  const NewUserCheckFunction = () => {
    const searchParams = useSearchParams();
    let newUserCheck = searchParams.get('newUser');
    if (newUserCheck === "true") {
      useEffect(() => {setNewUser(true)},[]);
    }
    return (
      <div>
        {newUser ? <a>Lets get started by adding ingredients you already have!</a> : <a></a>}
      </div>
    )
  }
  
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
    router.push('recipes');
  }

  const IngredientsPostRequestDB = () => {
    setIngredients(["apple","banana","green"])
    //*Add post request logic
  }
  const IngredientsPutRequestDB = () => {
    //*Add post request logic
  }

  return (
    <div>
      <Suspense>
        <NewUserCheckFunction />
      </Suspense>
      <IngredientSearch/>
      <button onClick={IngredientsRequestDB} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-8" >
        Next
      </button>
    </div>
  )
}

export default Ingredients