"use client"
import { useContext } from "react";
import IngredientsContext from "../Context/ingredientsContext";

const IngredientsBox = () => {
const [ingredients, setIngredients] = useContext(IngredientsContext);
  
    return ingredients.map((ingredient) =>
      <li key={ingredient}>
        {ingredient}
        {edit ? <button onClick={() => editIngredients(ingredient)} >edit</button> : <></>}
      </li>);
}

export default IngredientsBox