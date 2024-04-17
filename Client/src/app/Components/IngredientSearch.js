// "use client"

// import React, { useState, useRef, useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { IngredientsContext } from './ingredientsContext';

// const IngredientSearch = () => {
//   const [ingredients, setIngredients] = useContext(IngredientsContext);
//   const inputIngredient = useRef(null);
//   const [ingredientSearch, setIngredientSearch] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleAddIngredient = (ingredient) => {
//     setIngredients(existingValues => [...existingValues, ingredient]);
//     setIngredientSearch('');
//     setSearchResults([]);
//   };

//   const handleSearchInputChange = async (e) => {
//     const query = e.target.value;
//     setIngredientSearch(query);
//     try {
//       const response = await fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=5&apiKey=ae9fab0183fd48e9b6af4a983da4897f`);
//       if (response.ok) {
//         const data = await response.json();
//         setSearchResults(data.slice(0, 5));
//       } else {
//         console.error('Failed to fetch autocomplete results');
//       }
//     } catch (error) {
//       console.error('Error fetching autocomplete results:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-center items-center mt-4">
//         <input
//           className="w-full rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500"
//           type="text"
//           placeholder="Enter ingredients you have"
//           ref={inputIngredient}
//           value={ingredientSearch}
//           onChange={handleSearchInputChange}
//         />
//         <button
//           className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//           onClick={() => handleAddIngredient(ingredientSearch)}
//         >
//           <FontAwesomeIcon icon={faPlus} /> {/* Plus icon */}
//         </button>
//       </div>
//       {searchResults.length > 0 && (
//         <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-md mt-1 overflow-hidden">
//           {searchResults.map(result => (
//             <div key={result.id} className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
//               <span>{result.name}</span>
//               <button onClick={() => handleAddIngredient(result.name)} className="text-blue-500 cursor-pointer">
//                 <FontAwesomeIcon icon={faPlus} />
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default IngredientSearch;
"use client"
import { useState , useContext } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// Context
import IngredientsContext from '../Context/ingredientsContext';

const IngredientSearch = () => {
  const [selectedIngredients, setSelectedIngredients] = useContext(IngredientsContext);
  // const [ ingredients, setIngredients ] = useContext(IngredientsContext);;
  const [ingredientSearch, setIngredientSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const [selectedIngredients, setSelectedIngredients] = useState([]);

  // We wont need to call recipes here as state we can use context - Brandon
  // However we can get all recipes here so that we wont have to do it later on, we can update recipe state based on ingredients added or deleted

  const router = useRouter();
  if (!router) {
    // Handle the case when router is not available (e.g., during server-side rendering)
    return <div>Loading...</div>;
  }

  // We will have the call in the backend and we will query the backend route here - Brandon
  // Also see if this data can be copied and pasted into the dummydata file so we dont consume api resources
  // [Ingredients]
  const handleSearchInputChange = async (e) => {
    setIngredientSearch(e.target.value);
    // try {
    //   const response = await fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${e.target.value}&number=5&apiKey=ae9fab0183fd48e9b6af4a983da4897f`);
    //   if (response.ok) {
    //     const data = await response.json();
    //     setSearchResults(data.map(result => ({
    //       ...result,
    //       alreadySelected: selectedIngredients.includes(result.name)
    //     })));
    //   } else {
    //     console.error('Failed to fetch autocomplete results');
    //   }
    // } catch (error) {
    //   console.error('Error fetching autocomplete results:', error);
    // }

    //ab
    //-> search array for element[0] element[1] a for up to 5 iterations
    //
    //every time input changes -> increment 1  element[n] element[n+1]
    //

  };

  const handleAddIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
    // setSelectedIngredients([...selectedIngredients, ingredient]);
    setIngredientSearch('');
    setSearchResults([]);
  };


  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...selectedIngredients];
    updatedIngredients.splice(index, 1);
    setSelectedIngredients(updatedIngredients);
  };


  // const handleNextButtonClick = () => {
  //   // Navigate to the recipe page with selected ingredient
  //   //We should avoid adding ingredients into parameter for ingredients as the url can get incredibly long - Brandon
  //   router.push('recipes');
  // };

  //   const generateRecipes = () => {
  //      const apiKey = 'ae9fab0183fd48e9b6af4a983da4897f'; // Update with Spoonacular API key
  //     fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedIngredients.join(',')}&apiKey=${apiKey}`)
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Failed to fetch recipes');
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         setRecipes(data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching recipes:', error);
  //       });
  //   };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for ingredients..."
          value={ingredientSearch}
          onChange={handleSearchInputChange}
          className="w-full rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-md mt-1 overflow-hidden">
            {searchResults.map(result => (
              <div
                key={result.id}
                className={`flex items-center justify-between px-4 py-2 border-b border-gray-200 rounded-md hover:bg-green-100 cursor-pointer`}
                onClick={() => result.alreadySelected ? handleRemoveIngredient(result.name) : handleAddIngredient(result.name)}
              >
                <span>{result.name}</span>
                <FontAwesomeIcon
                  icon={result.alreadySelected ? faMinus : faPlus}
                  className={`text-${result.alreadySelected ? 'red' : 'blue'}-500`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Selected Ingredients:</h3>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {selectedIngredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-1 rounded-md bg-green-200 text-green-800 hover:bg-green-300 cursor-pointer"
              onClick={() => handleRemoveIngredient(ingredient)}
            >
              <FontAwesomeIcon icon={faMinus} className="mr-2" />
              <span>{ingredient}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  // </div>

  /* <button
    type="button"
    onClick={generateRecipes}
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-8"
  >
    Generate Recipes
  </button> */

  //    <div>
  //     {recipes.map(recipe => (
  //       <div key={recipe.id} className="flex items-center justify-center bg-gray-200 p-4 mb-4 rounded-lg">
  //         <Image src={recipe.image}
  //           width={100}
  //           height={100}
  //           alt={recipe.title}
  //           className="mr-4"
  //         />
  //         <div>
  //           <p className="font-bold">{recipe.title}</p>
  //           <ul>
  //             {recipe.missedIngredients.map((ingredient) => (
  //               <li key={ingredient.id}>{ingredient.original}</li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  //   );
};

export default IngredientSearch;