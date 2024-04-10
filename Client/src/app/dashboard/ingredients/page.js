"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation'

const Ingredients = () => {

  const [newUser, setNewUser] = useState(false);
  const [ingredientsAdded, setIngredientsAdded] = useState([])

  const FirstTimeUserCheck = () => {
    var firstUserText = "";
    const searchParams = useSearchParams()
    const newUserCheck = searchParams.get('newUser')
    if (newUser) {
      setNewUser(true);
    }
    return;
  }

  const IngredientsSearch = () => {
    return (
      <div>
        {/* Add ingredients search bar functionality*/}
      </div>
    )
  }

  const IngredientsEntered = () => {
    return (
      <div>
        {/* Create ingredients entered box */}
        {/* Create edit button for ingriednients entered */}
      </div>
    )
  }

  // If user is new:
  const IngredientsPostRequestDB = () => {
// Add post request logic
  }

  // If user is not new:
  const IngredientsPutRequestDB = () => {
// Add put request logic
  }

  const IngredientsRequestDB = () => {
    if(newUser){
      IngredientsPostRequestDB();
    } else {
      IngredientsPutRequestDB();
    }
  }

FirstTimeUserCheck();

  return (
    <div>
      {newUser ? <a>Lets get started by adding ingredients you already have!</a> : <a></a>}
      <IngredientsSearch />
      <IngredientsEntered />
      <button onClick={IngredientsRequestDB}>
        post request to backend
        {/* Submit button */}
        <Link href="/dashboard">Submit</Link>
      </button>
    </div>
  )
}

export default Ingredients