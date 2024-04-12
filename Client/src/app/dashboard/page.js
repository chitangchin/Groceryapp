"use client";
import { useContext } from 'react';
import Link from 'next/link'

// Context
import RecipesContext from '../Context/recipeContextProvider.js'
import UsernameContext from '../Context/userContext.js';
import LoggedInContext from '../Context/loggedInContext.js';

// Components
import recipeCards from '@/app/Components/recipeCards.js';


// Store array of recipe ids

// recipeCards:
// <recipeCards img={img} title={title} ingredients={ingredients}, cookingTime={cookingTime}/>
// img, title, ingredients, cookingTime

//pass array of recipe ids to recipes route

const Dashboard = () => {

  // State
  const [recipes, setRecipes] = useContext(RecipesContext);
  const [username, setUsername] = useContext(UsernameContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);


  const onClick = () => {
    setRecipes([1233])
  }

  // if refresh
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