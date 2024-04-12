"use client";
import { React, useState, createContext } from "react";

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const [ recipes, setRecipes ] = useState([]);
    return (
        <RecipesContext.Provider value={[ recipes, setRecipes]}>
            { children }
        </RecipesContext.Provider>
    )
}

export default RecipesContext;
