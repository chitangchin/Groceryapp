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

//  <Link href={`/Recipes/${recipe.id}`} passHref> 

// const RecipeDetailPage = ({ params }) => {
//   const router = useRouter();
//   const { recipeId } = params;
//   const [ingredients, setIngredients] = useState([]);
//   const [recipeDetails, setRecipeDetails] = useState(null);
//   const [nutritionInfo, setNutritionInfo] = useState(null);
//   const [shoppingList, setShoppingList] = useState([]);

const Recipes = ({ params }, amountRecipe) => {
  const { recipeId } = params;
  const [recipes, setRecipes] = useContext(RecipesContext);
  const [username] = useContext(UsernameContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [ingredients, setIngredients] = useContext(IngredientsContext);

  console.log(ingredients);

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

{/* {recipes.map((recipe) => (
  <div key={recipe.id} className="border rounded-md overflow-hidden">

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
  </div>))} */}

// //const router = useRouter();
// // if (!router) {
  // //   // Handle the case when router is not available (e.g., during server-side rendering)
  // //   return <div>Loading...</div>;
  // // }

// // const { ingredients } = router.query;

// // Using useContext to get recipes context
// const [recipes, setRecipes] = useContext(RecipesContext);

// // Function to handle button click
// const onClick = () => {
//   // Your logic here
// };

// return (
//   <div>
//     <button onClick={onClick}>here</button>
//     <div>
//       {/* <RecipePage selectedIngredients={ingredients ? ingredients.split(',') : []} /> */}
//     </div>
//     {/* Render RecipeCards component */}
//     <RecipeCards recipes={recipes} /> 
//   </div>
// );

// "use client"
// import React, { useState, useEffect } from "react";
// import Image from "next/image.js";
// import Link from "next/link";

// const recipes = () => {
  //   const [recipes, setRecipes] = useState([]);
  //     // const apiKey = "43090ee37698431d9400a53ec4cf8e5d";
  //    const apiKey = "ae9fab0183fd48e9b6af4a983da4897f";
  //   //  const apiKey = "4ea43c3d4d094e73bd1279ff484b7acf";
  
  
  //   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const fetchRecipes = async () => {
//     try {
//       const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=${apiKey}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch recipes');
//       }
//       const data = await response.json();
//       setRecipes(data.results);
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };

//   if (!recipes.length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Recipes</h1>
      // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      //   {recipes.map((recipe) => (
      //     <div key={recipe.id} className="border rounded-md overflow-hidden">
        
      //         <Link href={`recipes/${recipe.id}`} passHref> 
      //           <Image
      //             src={recipe.image}
      //             width={300}
      //             height={300}
      //             alt={recipe.title}
      //             className="w-full h-48 object-cover"
      //           />
      //           <div className="p-4">
      //             <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
      //             <p className="text-sm">{recipe.summary}</p>
      //           </div>
             
      //       </Link>
      //       <div className="bg-gray-100 p-4 flex justify-between">
      //         <span className="text-sm">Rating: {recipe.spoonacularScore}/100</span>
      //         <span className="text-sm">Cooking Time: {recipe.readyInMinutes} mins</span>
      //       </div>
      //     </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default recipes;