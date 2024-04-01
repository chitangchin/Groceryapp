"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NutritionWidget from '@/app/Components/NutritionWidget';

const RecipeDetailPage = ({ params }) => {
  const { recipeId } = params;
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [nutritionInfo, setNutritionInfo] = useState(null);
  const apiKey = "4ea43c3d4d094e73bd1279ff484b7acf";

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
        if (response.ok) {
          const data = await response.json();
          setRecipeDetails(data);
        } else {
          console.error('Failed to fetch recipe details');
        }
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId, apiKey]);

  useEffect(() => {
    const fetchNutritionInfo = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${apiKey}`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.nutrients) {
            setNutritionInfo(data.nutrients);
          } else {
            console.error('Nutritional information not available');
          }
        } else {
          console.error('Failed to fetch nutrition info');
        }
      } catch (error) {
        console.error('Error fetching nutrition info:', error);
      }
    };

    fetchNutritionInfo();
  }, [recipeId, apiKey]);

  // Check if recipeDetails is null before accessing its properties
  if (!recipeDetails) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold mb-4">{recipeDetails.title}</h1>
      <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></div>
<NutritionWidget recipeId={recipeDetails.id} />
      <Image src={recipeDetails.image} alt={recipeDetails.title} width={300} height={300} className="mb-4 rounded-lg" />
      {nutritionInfo && (
        <div>
          {/* <canvas id="nutritionChart" width="400" height="400"></canvas> */}
        </div>
      )}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Preparation Time</h2>
        <p>{recipeDetails.readyInMinutes} minutes</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        {recipeDetails.analyzedInstructions.length > 0 ? (
          recipeDetails.analyzedInstructions[0].steps.map((step, index) => (
            <p key={index}><span className="font-semibold">{step.number}:</span> {step.step}</p>
          ))
        ) : (
          <p>No instructions available</p>
        )}
      </div>
      <div className="flex space-x-4 mb-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Meal Plan
        </button>
      </div>
    </div>
  );
};

export default RecipeDetailPage;