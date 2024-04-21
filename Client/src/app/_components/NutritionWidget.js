"use client"
import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

const NutritionWidget = ({ recipeId }) => {
  const [nutritionImage, setNutritionImage] = useState(null);
  //  const apiKey = "ae9fab0183fd48e9b6af4a983da4897f";
  const apiKey = "4ea43c3d4d094e73bd1279ff484b7acf";
    // const apiKey = "ae9fab0183fd48e9b6af4a983da4897f";

  useEffect(() => {
    

    const fetchNutritionImage = async () => {
      try {
        // const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel.png?apiKey=${apiKey}`);
        // const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel.png?apiKey=${apiKey}`);
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel.png?apiKey=${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'image/png'
          },
        });

        console.log("in nurtionr");

        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }

        const blob = await response.blob();
        const imageURL = URL.createObjectURL(blob);
        setNutritionImage(imageURL);

      } catch (error) {
        console.error('Error fetching nutrition image:', error);
      }
    };

    fetchNutritionImage();
  }, [recipeId, apiKey]);


  return (
    <div className='py-8'>
      {nutritionImage && (
          <Image src={nutritionImage} alt="nutrition Image" width={400} height={400}/>
      )}
    </div>

  );



};

export default NutritionWidget;
