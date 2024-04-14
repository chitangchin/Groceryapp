"use client"
import { useState, useRef, useContext, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'

//Context
import IngredientsContext from '@/app/Context/ingredientsContext';

const Ingredients = () => {

  // State
  const [ingredients, setIngredients] = useContext(IngredientsContext)
  const [edit, setEdit] = useState(false);
  const inputIngredient = useRef(null);

  // Variables
  const router = useRouter();

  // Functions

  // - Helper functions
  const NewUserCheckFunction = () => {
    const searchParams = useSearchParams()
    let newUserCheck = searchParams.get('newUser');
    return (
      <div>
        {newUserCheck ? <a>Lets get started by adding ingredients you already have!</a> : <a></a>}
      </div>
    )
  }

  const addIngredients = () => {
    let ingredientEntered = inputIngredient.current.value;
    //*Change the condition here to check if it exists as a valid ingredient
    if (ingredientEntered.length > 0) {
      setIngredients(existingValues => [...existingValues, ingredientEntered]);
    }
  }

  const editIngredients = (itemString) => {
    const currArr = ingredients;
    var index = currArr.indexOf(itemString);
    if (index !== -1) {
      currArr.splice(index, 1);
      console.log(currArr)
      setIngredients(currArr);
    }
  }

  // - Database Requests
  const IngredientsRequestDB = () => {
    if (newUserCheck === "true") {
      IngredientsPostRequestDB();
    } else {
      IngredientsPutRequestDB();
    }
  }

  const IngredientsPostRequestDB = () => {
    //*Add post request logic
    router.push(`/dashboard`);
  }

  // - Displayed Components
  const IngredientsSearch = () => {
    return (<div>
      <input
        className="text-center border-2 border-black"
        type="text"
        placeholder="Enter ingredients you have"
        ref={inputIngredient}
      />
      <button onClick={addIngredients}>
        click here
      </button>
    </div>);
  }

  const IngredientsBox = () => {
    return ingredients.map((ingredient) =>
      <li key={ingredient}>
        {ingredient}
        {edit ? <button onClick={() => editIngredients(ingredient)} >edit</button> : <></>}
      </li>);
  }

  const EditIngredientsButton = () => {
    setEdit(true);
    return;
  }

  const SaveIngredientsButton = () => {
    setEdit(false);
    return;
  }

  return (
    
    <div>
      <Suspense>
      <NewUserCheckFunction/>
      </Suspense>
      <IngredientsSearch />
      <IngredientsBox />
      {edit ?
        <button onClick={SaveIngredientsButton}>Save</button> :
        <button onClick={EditIngredientsButton}>Edit</button>}
      <button onClick={IngredientsRequestDB}>
        Next
      </button>
    </div> 
  )
}

export default Ingredients