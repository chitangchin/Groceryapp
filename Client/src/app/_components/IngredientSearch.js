"use client"
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import IngredientsContext from '../Context/ingredientsContext';

const IngredientSearch = () => {
  const [ingredientSearch, setIngredientSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useContext(IngredientsContext);

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

  console.log(selectedIngredients);

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
