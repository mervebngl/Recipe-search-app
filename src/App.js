
import React, { useState } from 'react';
import RecipeList from './recipies/RecipeList'; 
import SearchBar from './recipies/SearchBar'; 
import RecipeDetail from './recipies/RecipeDetails'; 

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);

    const fetchRecipes = async (query) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        setRecipes(data.meals);
    };

    const handleSelectRecipe = (id) => {
        setSelectedRecipeId(id);
    };

    return (
        <div>
            <SearchBar onSearch={fetchRecipes} />
            {selectedRecipeId ? (
                <RecipeDetail recipeId={selectedRecipeId} />
            ) : (
                <RecipeList recipes={recipes} onSelect={handleSelectRecipe} />
            )}
        </div>
    );
};

export default App;