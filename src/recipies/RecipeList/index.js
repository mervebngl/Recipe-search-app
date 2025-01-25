import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const RecipeList = () => {
    const { category } = useParams(); 
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const data = await response.json();
            setRecipes(data.meals);
        };

        if (category) {
            fetchRecipes();
        }
    }, [category]);

    return (
        <div>
            <h1>{category} Recipes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.idMeal}>{recipe.strMeal}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;