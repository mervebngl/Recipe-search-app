import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/User/Login';
import Register from '../components/User/Register';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetails from '../components/Recipes/RecipeDetails';
import CreateRecipe from '../components/Recipes/CreateRecipe';
import ProtectedRoute from './ProtectedRoute';
import RecipeCategories from '../components/Recipes/RecipeCategories';
import Home from '../components/Home/home';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipes" element={<ProtectedRoute element={<RecipeList />} />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} /> {/* ProtectedRoute kaldırıldı */}
            <Route path="/recipes/create" element={<ProtectedRoute element={<CreateRecipe />} />} />
            <Route path="/recipes/categories" element={<ProtectedRoute element={<RecipeCategories />} />} />
        </Routes>
    );
};

export default AppRouter;