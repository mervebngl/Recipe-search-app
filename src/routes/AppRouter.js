import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '../context/userContext';
import RecipeList from '../components/Recipes/RecipeList'; 
import RecipeDetails from '../components/Recipes/RecipeDetails';
import Login from '../components/User/Login'; 
import RecipeCategories from '../components/Recipes/RecipeCategories'; 
import CreateRecipe from '../components/Recipes/CreateRecipe';

const ProtectedRoute = ({ element }) => {
    const { user } = useUser(); 
    return user ? element : <Navigate to="/login" />; 
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipes/create" element={<ProtectedRoute element={<CreateRecipe />} />} />
            <Route path="/recipes/categories" element={<RecipeCategories />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/categories/:category" element={<RecipeList />} />
        </Routes>
    );
};

export default AppRoutes;