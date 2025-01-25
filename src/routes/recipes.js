import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext'; 
import RecipeCategories from '../recipies/RecipeCategories'; 
import CreateRecipe from '../components/CreateRecipe'; 
import Login from '../components/Login'; 
import RecipeList from '../recipies/RecipeList'; 
import RecipeDetails from '../recipies/RecipeDetails'; 
import { useUser } from '../context/userContext'; 

const ProtectedRoute = ({ element }) => {
    const { user } = useContext(UserContext); 
    return user ? element : <Navigate to="/login" />; 
};

const RecipesRoutes = () => {
    return (
        <Routes>
            <Route path="/recipes/categories" element={<RecipeCategories />} /> 
            <Route path="/recipes/create" element={<ProtectedRoute element={<CreateRecipe />} />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipes/:category" element={<RecipeList />} /> 
            <Route path="/recipes/details/:id" element={<RecipeDetails />} />
        </Routes>
    );
};

export default RecipesRoutes;