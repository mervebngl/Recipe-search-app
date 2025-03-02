import React, { useState } from 'react';
import './styles.css';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setError('');
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const data = await response.json();
            if (data.meals) {
                setMeals(data.meals);
            } else {
                setMeals([]);
                setError('No meals found.');
            }
        } catch (err) {
            setError('Error fetching data.');
        }
    };

    return (
        <div className="home-container">
            <h1>Recipe Guide</h1>
            <p>Welcome to Recipe Guide: An open, crowd-sourced database of recipes from around the world.</p>
            <p>We offer a free recipe API for anyone wanting to use it.</p>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for a Meal..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {error && <p>{error}</p>}
            <h2>Latest Meals</h2>
            <div className="latest-meals">
                {meals.map(meal => (
                    <a key={meal.idMeal} href={`/recipes/${meal.idMeal}`} className="meal-card">
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <div>{meal.strMeal}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Home;