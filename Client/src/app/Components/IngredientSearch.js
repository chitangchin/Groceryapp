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

//  export default IngredientSearch;
"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const IngredientSearch = () => {
  const [ingredientSearch, setIngredientSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Dummy data for ingredient search autocomplete
  const dummyIngredients = [
    { id: 1, name: 'Tomato' },
    { id: 2, name: 'Onion' },
    { id: 3, name: 'Garlic' },
    { id: 4, name: 'Chicken' },
    { id: 5, name: 'Apple' },
    { id: 6, name: 'applesauce' },
    { id: 7, name: 'Broccoli' }
  ];

  const handleSearchInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredResults = dummyIngredients.filter(ingredient =>
      ingredient.name.toLowerCase().includes(query)
    );
    setSearchResults(filteredResults);
    setIngredientSearch(e.target.value);
  };

  const handleAddIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
    setIngredientSearch('');
    setSearchResults([]);
  };

  const handleRemoveIngredient = (ingredient) => {
    const updatedIngredients = selectedIngredients.filter(item => item !== ingredient);
    setSelectedIngredients(updatedIngredients);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Let's get started by adding the ingredients you already have!</h2>
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
                onClick={() => handleAddIngredient(result.name)}
              >
                <span>{result.name}</span>
                <FontAwesomeIcon icon={faPlus} className="text-blue-500" />
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
};

export default IngredientSearch;
