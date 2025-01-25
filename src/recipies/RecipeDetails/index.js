import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeDetail = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setRecipe(data.meals[0]);
        };

        if (id) {
            fetchRecipeDetail();
        }
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    const instructions = recipe.strInstructions.split('.').filter(Boolean);

    return (
        <div className="recipe-detail">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>Ingredients</h3>
            <ul>
                {Object.keys(recipe)
                    .filter(key => key.startsWith('strIngredient') && recipe[key])
                    .map((key, index) => (
                        <li key={index}>{recipe[key]}</li>
                    ))}
            </ul>
            <h3>Instructions</h3>
            {instructions.map((instruction, index) => (
                <p key={index}>{instruction.trim()}.</p>
            ))}
        </div>
    );
};

export default RecipeDetail;