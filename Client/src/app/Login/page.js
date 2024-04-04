"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
const router = useRouter();
    
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const handleIngredientChange = (ingredient) => {
        const index = selectedIngredients.indexOf(ingredient);
        if (index === -1) {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        } else {
            const updatedIngredients = [...selectedIngredients];
            updatedIngredients.splice(index, 1);
            setSelectedIngredients(updatedIngredients);
        }
    };
    function PlanMeal() {
       
        console.log("planmeal function working");
     
       
        router.push('/Login');
    }  

   const generateRecipes = () => {
    const apiKey = 'ae9fab0183fd48e9b6af4a983da4897f'; // Update with Spoonacular API key
    // Call the Spoonacular API to generate recipes based on selected ingredients
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedIngredients.join(',')}&apiKey=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            return response.json();
        })
        .then(data => {
            // Set the recipes state with the fetched data
            setRecipes(data);
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
            // Handle errors here, e.g., show a message to the user
        });
};

    return (
        <div className="container mx-auto mt-20 text-center">
            <h1 className="text-3xl font-bold mb-8">Login</h1>
            <h1>Hello User!</h1>
            <Link href="./PlanMeal">
        <button  type="button"className="bg-teal-600 hover:bg-black text-white py-2 px-4 rounded mr-4 m-3 w-auto">
          Start Next plan
          </button></Link>
     
            <h2>Select ingredient(s) to generate recipe</h2>
            <div>
                {/* Render checkboxes for each ingredient */}
                <label>
                    <input
                        type="checkbox"
                        value="apples"
                        onChange={() => handleIngredientChange("apples")}
                    />
                    Apples
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="flour"
                        onChange={() => handleIngredientChange("flour")}
                    />
                    Flour
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="sugar"
                        onChange={() => handleIngredientChange("sugar")}
                    />
                    Sugar
                </label>
                {/* Add more checkboxes for other ingredients */}
            </div>
            <button type="button"
                onClick={generateRecipes}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
            >
                Generate Recipes
            </button>
            {/* Display generated recipes */}
            <div className="mt-4">
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <Image src={recipe.image}
                            width={312}
                            height={231}
                            alt={recipe.title} className="mb-2" />
                        <p className="font-bold">{recipe.title}</p>
                        <ul>
                            {recipe.missedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Login;