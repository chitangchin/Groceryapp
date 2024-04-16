// "use client";
// import { useContext} from 'react';
// import RecipesContext from '../../Context/recipeContextProvider.js'
// import recipeCards from '@/app/Components/recipeCards.js';

// // get array of ids
// // Pass recipe info to recipe card

// const Recipes = () => {

// const [recipes, setRecipes] = useContext(RecipesContext);

// const onClick = () => {

// }

// // if refresh reset state to local storage

//   return (
//     <div>
//       <button onClick={onClick}>
// here
//       </button>
//       <div>
//         {/* Render all data into cards component from componenets folder */}
//       </div>
//     </div>
//   )
// }

// export default Recipes

"use client";
import { useContext } from 'react';
import RecipesContext from '../../Context/recipeContextProvider.js';
import RecipeCards from '@/app/Components/recipeCards.js'; // Corrected component name
import { useRouter } from 'next/router';
// import RecipePage from '../components/RecipePage';

const Recipes = () => {
  const router = useRouter();
  const { ingredients } = router.query;

  // Using useContext to get recipes context
  const [recipes, setRecipes] = useContext(RecipesContext);

  // Function to handle button click
  const onClick = () => {
    // Your logic here
  };

  return (
    <div>
      
      <button onClick={onClick}>here</button>
      {/* Render RecipePage component with selectedIngredients prop */}
      <div>
        <RecipePage selectedIngredients={ingredients ? ingredients.split(',') : []} />
      </div>
      {/* Render RecipeCards component */}
      <RecipeCards recipes={recipes} /> {/* Assuming you pass recipes to RecipeCards */}
    </div>
  );
}