"use client"
import { useState, Suspense, useContext } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation'
import IngredientsContext from '@/app/Context/ingredientsContext';

const Ingredients = () => {

  const [ ingredients, setIngredients] = useContext(IngredientsContext)
  const [newUser, setNewUser] = useState(false);
  const [ingredientsAdded, setIngredientsAdded] = useState([])

  const FirstTimeUserCheck = () => {
    var firstUserText = "";
    const searchParams = useSearchParams()
    const newUserCheck = searchParams.get('newUser')
    if (newUser) {
      setNewUser(true);
    }
    return (<div>
      {newUser ? <a>Lets get started by adding ingredients you already have!</a> : <a></a>}
    </div>);
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

  // To add ingredients
  const IngredientsPostRequestDB = () => {
// Add post request logic
  }


  // Editing Ingredients
//   const IngredientsPutRequestDB = () => {
// // Add put request logic update
//   }

// when existing user submits store recipes in local storage

  const IngredientsRequestDB = () => {
    if(newUser){
      IngredientsPostRequestDB();
    } else {
      IngredientsPutRequestDB();
    }
  }

  return (
    <div>
      <Suspense>
        <FirstTimeUserCheck/>
      </Suspense>
      
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