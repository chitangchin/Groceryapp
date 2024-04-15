"use client";
import { React, useState, createContext } from "react";

const IngredientsContext = createContext();

export const IngredientsProvider = ({ children }) => {
    const [ ingredients, setIngredients ] = useState([]);
    return (
        <IngredientsContext.Provider value={[ ingredients, setIngredients]}>
            { children }
        </IngredientsContext.Provider>
    )
}

export default IngredientsContext;