import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RecipeContext } from '../context/RecipeContext'; 
import './NewRecipeForm.css';

const NewRecipeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { addRecipe } = useContext(RecipeContext); 

    const onSubmit = (data) => {
        const newRecipe = {
            idMeal: Date.now(), 
            strMeal: data.name,
            strInstructions: data.instructions,
            strIngredient1: data.ingredient1,
            strIngredient2: data.ingredient2,
            strIngredient3: data.ingredient3 || '', 
            strIngredient4: data.ingredient4 || '', 
            strIngredient5: data.ingredient5 || '', 
            strCategory: data.category || '', 
            strArea: data.area || '', 
        };
        addRecipe(newRecipe); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input 
                    {...register('name', { required: 'Recipe name is required' })} 
                    placeholder="Recipe Name" 
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <textarea 
                    {...register('instructions', { required: 'Instructions are required' })} 
                    placeholder="Instructions" 
                />
                {errors.instructions && <p>{errors.instructions.message}</p>}
            </div>
            <div>
                <input 
                    {...register('ingredient1', { required: 'Ingredient 1 is required' })} 
                    placeholder="Ingredient 1" 
                />
                {errors.ingredient1 && <p>{errors.ingredient1.message}</p>}
            </div>
            <div>
                <input 
                    {...register('ingredient2')} 
                    placeholder="Ingredient 2" 
                />
            </div>
            <div>
                <input 
                    {...register('ingredient3')} 
                    placeholder="Ingredient 3" 
                />
            </div>
            <div>
                <input 
                    {...register('ingredient4')} 
                    placeholder="Ingredient 4" 
                />
            </div>
            <div>
                <input 
                    {...register('ingredient5')} 
                    placeholder="Ingredient 5" 
                />
            </div>
            <div>
                <input 
                    {...register('category')} 
                    placeholder="Category" 
                />
            </div>
            <div>
                <input 
                    {...register('area')} 
                    placeholder="Area" 
                />
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default NewRecipeForm;