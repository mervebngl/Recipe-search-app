import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    const addRecipe = (newRecipe) => {
        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    };

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};