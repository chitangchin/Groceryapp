"use client"
import { useState,  useRef, useContext } from 'react';

// WORK IN PROGRESS

const IngredientsBox = () => {
      // State
  const [ingredients, setIngredients] = useContext(IngredientsContext);
  const [edit, setEdit] = useState(false);
  const inputIngredient = useRef(null);

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
      setIngredients(currArr);
    }
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

export default IngredientsBox