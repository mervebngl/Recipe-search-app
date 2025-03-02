import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRecipeDetail = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                if (data.meals) {
                    setRecipe(data.meals[0]);
                } else {
                    setError('Recipe not found.'); 
                }
            } catch (err) {
                setError('Error fetching recipe details.');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchRecipeDetail();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const instructions = recipe.strInstructions ? recipe.strInstructions.split('.').filter(Boolean) : [];

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
            {instructions.length > 0 ? (
                instructions.map((instruction, index) => (
                    <p key={index}>{instruction.trim()}.</p>
                ))
            ) : (
                <p>No instructions available.</p> 
            )}
        </div>
    );
};

export default RecipeDetail;