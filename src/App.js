import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/userContext'; 
import Navbar from './components/Navbar/Navbar';  
import Login from './components/User/Login';  
import AppRouter from './routes/AppRouter'; 
import './index.css';
import { RecipeProvider } from './context/RecipeContext'; 

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
            <RecipeProvider> 
                <Router>
                    <div>
                        <Navbar />
                        <AppRouter />
                    </div>
                </Router>
            </RecipeProvider>
        </UserProvider>
    );
};

export default App;