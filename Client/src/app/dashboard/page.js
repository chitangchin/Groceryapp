"use client";
import { useContext } from 'react';
import RecipesContext from '../Context/recipeContextProvider.js'
import Link from 'next/link'
import recipeCards from '@/app/Components/recipeCards.js';



// Store array of recipe ids

// recipeCards:
// <recipeCards img={img} title={title} ingredients={ingredients}, cookingTime={cookingTime}/>
// img, title, ingredients, cookingTime

//pass array of recipe ids to recipes route

const Dashboard = () => {

const [ recipes, setRecipes ] = useContext(RecipesContext);

console.log(recipes)

  // setRecipes([123])

  const onClick = () => {
    setRecipes([1233])
  }

  // if refresh

  console.log(recipes);
  return (
    <div>Dashboard
      <button onClick={onClick}>
        submit
      </button>
      <Link href="/dashboard/recipes">recipes</Link>
    </div>
  )
}
// Read below to get the user name param
// https://nextjs.org/docs/app/api-reference/functions/use-search-params

export default Dashboard