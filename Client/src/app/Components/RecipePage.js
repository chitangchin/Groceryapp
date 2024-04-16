"use client"
import { useEffect, useState } from 'react';

const RecipePage = ({ selectedIngredients }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes based on selected ingredients
    const apiKey = 'ae9fab0183fd48e9b6af4a983da4897f'; // Update with Spoonacular API key
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedIngredients.join(',')}&apiKey=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, [selectedIngredients]);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipePage;