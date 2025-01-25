import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/userContext'; 
import Navbar from './components/Navbar/Navbar'; 
import RecipesRoutes from './routes/recipes'; 
import Login from './components/Login/Login';  

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
        <UserProvider>
            <Router>
                <div>
                    <Navbar />
                    <RecipesRoutes />
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;