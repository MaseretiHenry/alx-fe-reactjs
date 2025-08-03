import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="space-y-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{recipe.title}</h2>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} className="text-blue-500 underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
