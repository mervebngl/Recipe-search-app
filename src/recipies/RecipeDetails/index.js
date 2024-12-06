// src/recipies/RecipeDetails/index.js
import React, { useEffect, useState } from 'react';
import './styles.css';

const RecipeDetail = ({ recipeId }) => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeDetail = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
            const data = await response.json();
            setRecipe(data.meals[0]);
        };

        if (recipeId) {
            fetchRecipeDetail();
        }
    }, [recipeId]);

    if (!recipe) return <div>Loading...</div>;

    const instructions = recipe.strInstructions.split('.').filter(Boolean);

    return (
        <div className="recipe-detail">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            {instructions.map((instruction, index) => (
                <p key={index}>{instruction.trim()}.</p>
            ))}
        </div>
    );
};

export default RecipeDetail;