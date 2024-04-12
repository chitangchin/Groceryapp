"use client";
import { useContext} from 'react';
import RecipesContext from '../../Context/recipeContextProvider.js'
import recipeCards from '@/app/Components/recipeCards.js';

// get array of ids
// Pass recipe info to recipe card

const Recipes = () => {

const [recipes, setRecipes] = useContext(RecipesContext);

const onClick = () => {

  console.log(recipes)
}

// if refresh reset state to local storage

  return (
    <div>
      <button onClick={onClick}>
here
      </button>
      <div>
        {/* Render all data into cards component from componenets folder */}
      </div>
    </div>
  )
}

export default Recipes