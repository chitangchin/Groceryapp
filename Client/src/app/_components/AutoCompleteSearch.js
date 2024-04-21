"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import IngredientSearch from './IngredientSearch.js';

const AutocompleteSearch = ({ searchResults, setSearchResults }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  // Function to filter ingredients based on search input
  const filterIngredients = (input) => {
    // Filter search results based on input
    return searchResults.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  // Handle search input change
  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    const filtered = filterIngredients(input);
    setFilteredIngredients(filtered);
  };

  // Function to add ingredient
  const addIngredient = (ingredient) => {
    // Implement your logic to add ingredient
    // For now, let's just log the selected ingredient
    console.log('Selected Ingredient:', ingredient);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for ingredients..."
        value={searchInput}
        onChange={handleSearchInputChange}
        className="w-full rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500"
      />
      {filteredIngredients.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-md mt-1 overflow-hidden">
          {filteredIngredients.map((result) => (
            <div
              key={result.id}
              className="flex items-center justify-between px-4 py-2 border-b border-gray-200 rounded-md hover:bg-green-100 cursor-pointer"
              onClick={() => addIngredient(result.name)}
            >
              <span>{result.name}</span>
              <FontAwesomeIcon icon={faPlus} className="text-blue-500" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteSearch;