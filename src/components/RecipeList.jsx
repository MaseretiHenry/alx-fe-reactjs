import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recipes</h2>
      {recipes.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="py-4">
              <Link to={`/recipes/${recipe.id}`} className="block hover:bg-gray-50 p-2 rounded-md transition-colors duration-200">
                <h3 className="text-xl font-semibold text-teal-600">{recipe.title}</h3>
                <p className="text-gray-600 mt-1">{recipe.description.substring(0, 100)}...</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No recipes added yet. Add one above!</p>
      )}
    </div>
  );
};

export default RecipeList;
