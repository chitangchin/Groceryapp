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

            console.log("Data", data);
            console.log("Nutrition", data.nutrients);

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
    <div>
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


      <div className="p-1 border-2 border-black font-sans w-72">
          <div className="text-4xl font-extrabold leading-none">Nutrition Facts</div>
          <div className="leading-snug">8 servings per container</div>
          <div className="flex justify-between font-bold border-b-8 border-black">
              <div>Serving size</div><div>2/3 cup (55g)</div>
          </div>
          <div className="flex justify-between items-end font-extrabold">
              <div>
                  <div className="font-bold">Amount per serving</div>
                  <div className="text-4xl">Calories</div>
              </div>
              <div className="text-5xl">{ Math.floor(nutritionData[0].amount) }</div>
          </div>
          <div className="border-t-4 border-black text-sm pb-1">
              <div className="text-right font-bold pt-1 pb-1">% Daily value*</div>
              <hr className="border-gray-500"/>
              <div className="flex justify-between">
                  <div>
                      <span className="font-bold">Total Fat</span> 8g
                  </div>
                  <div className="font-bold">10%</div>
              </div>
              <hr className="border-gray-500"/>
              <div className="flex justify-between">
                  <div>Saturated Fat 1g</div>
                  <div className="font-bold">5%</div>
              </div>
              <hr className="border-gray-500"/>
              <div>
                  <span className="italic">Trans Fat</span> 8g
              </div>
              <hr className="border-gray-500"/>
              <div className="flex justify-between">
                  <div>
                      <span className="font-bold">Cholesterol</span> 0mg
                  </div>
                  <div className="font-bold">0%</div>
              </div>
              <hr className="border-gray-500"/>
              <div className="flex justify-between">
                  <div>
                      <span className="font-bold">Sodium</span> 160mg
                  </div>
                  <div className="font-bold">7%</div>
              </div>
              <hr className="border-gray-500"/>
              <div className="flex justify-between">
                  <div>
                      <span className="font-bold">Total Carbohydrate</span> 37g
                  </div>
                  <div className="font-bold">13%</div>
              </div>
              <hr className="border-gray-500"/>
              <div className="flex justify-between">
                  <div className="pl-4">
                      Dietary Fiber 4g
                  </div>
                  <div className="font-bold">14%</div>
              </div>
              <hr className="border-gray-500"/>
              <div className="pl-4">
                  Total Sugar 12g
                  <div className="pl-4">
                      <hr className="border-gray-500"/>
                      <div className="flex justify-between">
                          <div>Includes 10g Added Sugars</div>
                          <div className="font-bold">20%</div>
                      </div>
                  </div>
              </div>
              <hr className="border-gray-500"/>
              <div>
                  <span className="font-bold">Protein</span> 3g
              </div>
          </div>
          <div className="border-t-8 border-black pt-1 text-sm">
              <div className="flex justify-between">
                  <div>Vitamin D 2mcg</div>
                  <div>10%</div>
              </div>
              <hr className="border-gray-500"/>
              <div className="flex justify-between">
                  <div>Calcium 260mg</div>
                  <div>20%</div>
              </div>
              <hr className="border-gray-500"/>
              <div className="flex justify-between">
                  <div>Iron 8mg</div>
                  <div>45%</div>
              </div>
              <hr className="border-gray-500"/>
              <div className="flex justify-between">
                  <div>Potassium 240mg</div>
                  <div>6%</div>
              </div>
              <div className="border-t-4 border-black flex leading-none text-xs pt-2 pb-1">
                  <div className="pr-1">*</div>
                  <div>The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</div>
              </div>
          </div>
      </div>
    </div>


    

  );
};

export default NutritionWidget;