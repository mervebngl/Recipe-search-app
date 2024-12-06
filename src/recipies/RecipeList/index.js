
import React from 'react';
import './styles.css';
const RecipeList = ({ recipes, onSelect }) => {
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div key={recipe.idMeal} className="recipe-item" onClick={() => onSelect(recipe.idMeal)}>
                    <h3>{recipe.strMeal}</h3>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
            ))}
        </div>
    );
};

export default RecipeList;