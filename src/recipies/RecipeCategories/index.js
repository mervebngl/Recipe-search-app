import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const RecipeCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();
            setCategories(data.categories);
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Recipe Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.idCategory}>
                        <Link to={`/recipes/${category.strCategory}`}>{category.strCategory}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeCategories;