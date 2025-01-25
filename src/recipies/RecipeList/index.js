import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
        <div className="recipe-list-container">
            <h1>{category} Recipes</h1>
            <div className="recipe-grid">
                {recipes.map(recipe => (
                    <div key={recipe.idMeal} className="recipe-item">
                        <Link to={`/recipes/details/${recipe.idMeal}`}>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <h2>{recipe.strMeal}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;