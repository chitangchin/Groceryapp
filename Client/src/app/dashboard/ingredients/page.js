"use client"
import { useState, useEffect, useRef, useContext, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'


//Context
import IngredientsContext from '@/app/Context/ingredientsContext';

//Components
import IngredientSearch from '@/app/Components/IngredientSearch.js';
 import AutocompleteSearch from '@/app/Components/AutoCompleteSearch.js';
// import IngredientDummySearch from '@/app/Components/IngredientDummySearch.js';
// import { useRouter } from 'next/router';
import IngredientsBox from '@/app/Components/ingredientsBox'; //WORK IN PROGRESS

const Ingredients = () => {

  // State
  const [ingredients, setIngredients] = useContext(IngredientsContext);
  // const [edit, setEdit] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const inputIngredient = useRef(null);

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
  const IngredientsRequestDB = () => {
    if (newUser) {
      IngredientsPostRequestDB();
    } else {
      IngredientsPutRequestDB();
    }
  }

  const IngredientsPostRequestDB = () => {
    //*Add post request logic
    router.push(`/dashboard`);
  }
  const IngredientsPutRequestDB = () => {
    //*Add post request logic
    router.push(`/dashboard`);
  }


  const IngredientsBox = () => {
    return ingredients.map((ingredient) =>
      <li key={ingredient}>
        {ingredient}
        {edit ? <button onClick={() => editIngredients(ingredient)} >edit</button> : <></>}
      </li>);
  }

  
  

  return (

    <div>
      <Suspense>
        <NewUserCheckFunction />
      </Suspense>
      <IngredientSearch />
      {/* <AutocompleteSearch/> */}
      {/* <IngredientDummySearch/> */}
      <IngredientsBox />
      {/* {edit ?
        <button onClick={SaveIngredientsButton}>Save</button> :
        <button onClick={EditIngredientsButton}>Edit</button>} */}
      
      

      <button onClick={IngredientsRequestDB} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-8" >
        Next
      </button>
    </div>
  )
}

export default Ingredients