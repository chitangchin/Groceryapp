"use client"
import { useState, useEffect } from 'react';

const RecipeCarousel = () => {
    const [recipeCards, setRecipeCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const recipes = [
        {
            "id": 640352,
            "title": "Cranberry Apple Crisp",
            "image": "https://img.spoonacular.com/recipes/640352-312x231.jpg",
            "imageType": "jpg",
            "instructions": "Instructions for Cranberry Apple Crisp..."
        },
        {
            "id": 632660,
            "title": "Apricot Glazed Apple Tart",
            "image": "https://img.spoonacular.com/recipes/632660-312x231.jpg",
            "imageType": "jpg",
            "instructions": "Instructions for Apricot Glazed Apple Tart..."
        }, {
          "id": 641803,
        "title": "Easy & Delish! ~ Apple Crumble",
        "image": "https://img.spoonacular.com/recipes/641803-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,  
        },
        {
            "id": 73420,
            "title": "Apple Or Peach Strudel",
            "image": "https://img.spoonacular.com/recipes/73420-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 1,
            "missedIngredientCount": 3,
        },{
          "id": 641803,
        "title": "Easy & Delish! ~ Apple Crumble",
        "image": "https://img.spoonacular.com/recipes/641803-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,  
        },
        {
            "id": 73420,
            "title": "Apple Or Peach Strudel",
            "image": "https://img.spoonacular.com/recipes/73420-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 1,
            "missedIngredientCount": 3,
        }
         
       
        
  
    ];

    const fetchRecipes = async () => {
        try {
            const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=ae9fab0183fd48e9b6af4a983da4897f&number=10');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setRecipeCards(data.recipes);
            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const renderApiCarousel = () => {
        return recipeCards.slice(currentIndex, currentIndex + 5).map((recipe, index) => (
        <div className="recipe-card" key={index}>
            <div className="recipe-title">
                <h3>{recipe.title}</h3>
            </div>
            <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            </div>
            {/* <p>{recipe.instructions}</p> */}
        </div>
    ));
    };

  const renderDummyCarousel = () => {
    return recipes.slice(currentIndex, currentIndex + 5).map((recipe, index) => (
        <div className="recipe-card" key={index}>
            <div className="recipe-title">
                <h3>{recipe.title}</h3>
            </div>
            <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            </div>
            {/* <p>{recipe.instructions}</p> */}
        </div>
    ));
};
    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 5);
        }
    };

    const handleNextClick = () => {
        if (currentIndex + 5 < recipeCards.length) {
            setCurrentIndex(currentIndex + 5);
        }
    };
       const handlePrevDummyClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 5);
        }
    };

    const handleNextDummyClick = () => {
        if (currentIndex + 5 < recipeCards.length) {
            setCurrentIndex(currentIndex + 5);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div class="flex justify-center items-center  max-2xl">
        <div class="max-w-7xl mx-auto">
            <div>
                <h1 class="text-3xl font-bold mb-8">Top Meals</h1>
            </div>
            <div class="relative">
                <div class="carousel " >
                       {renderApiCarousel()}
                </div>
               
                    </div>

                     <button class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l hover:bg-gray-700 focus:outline-none" onClick={handlePrevClick}>&larr;</button>
                <button class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r hover:bg-gray-700 focus:outline-none" onClick={handleNextClick}>&rarr;</button>
           
           
                    <div>
                <h1 class="text-3xl font-bold mt-12 mb-8">Your Weekly Recipes based on Ingredients</h1>
            </div>
            <div class="relative">
                <div class="carousel ml-30">
                       {renderDummyCarousel()}
                </div>
                
                    </div>
                    <button class="absolute top-1/2 left-0  transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l hover:bg-gray-700 focus:outline-none" onClick={handlePrevDummyClick}>&larr;</button>
                <button class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r hover:bg-gray-700 focus:outline-none" onClick={handleNextDummyClick}>&rarr;</button>
          
                    <button>
                         <div>
                <h1 class="text-3xl font-bold mb-8">Get Recipes</h1>
            </div>
                    </button>
                    <div>
                <h1 class="text-3xl font-bold mb-8">List of Ingredients User have</h1>
            </div>
                </div>
            </div>
        </>
        
    );
};

export default RecipeCarousel;