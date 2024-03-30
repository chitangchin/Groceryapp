"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const apiKey = 'ae9fab0183fd48e9b6af4a983da4897f'; 
      const response = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const viewRecipeDetails = async (recipeId) => {
    try {
      const apiKey = 'ae9fab0183fd48e9b6af4a983da4897f'; 
      const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipe details');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  return (
    <div>
      <h1>Recipes to Select</h1>
      <div className="recipes-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <Link href={`/recipes/${recipe.id}`} passHref>
              <div onClick={() => viewRecipeDetails(recipe.id)}>
                <Image src={recipe.image} width={300} height={300} alt={recipe.title} />
                <p>{recipe.id}</p>
                <p>{recipe.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;