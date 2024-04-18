"use client"
import React, { useEffect, useRef, useState } from 'react';

const NutritionWidget = ({ recipeId }) => {
  const [nutritionData, setNutritionData] = useState(null);
  //  const apiKey = "ae9fab0183fd48e9b6af4a983da4897f";
  const apiKey = "4ea43c3d4d094e73bd1279ff484b7acf";
    // const apiKey = "ae9fab0183fd48e9b6af4a983da4897f";

  useEffect(() => {
    const fetchNutritionInfo = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${apiKey}`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.nutrients) {
            setNutritionData(data.nutrients);
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

  return (
     <div className="w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-center mb-4">Nutritional Information</h3>
      <div className="overflow-x-auto">
        <table className="border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-blue-200">
            <tr>
              <th className="border border-gray-300 px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Nutrient</th>
              <th className="border border-gray-300 px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Amount</th>
              <th className="border border-gray-300 px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">% Daily Needs</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {nutritionData && nutritionData.map((nutrient, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-4 whitespace-nowrap">{nutrient.name}</td>
                <td className="border border-gray-300 px-6 py-4 whitespace-nowrap">{nutrient.amount} {nutrient.unit}</td>
                <td className="border border-gray-300 px-6 py-4 whitespace-nowrap">{nutrient.percentOfDailyNeeds}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default NutritionWidget;