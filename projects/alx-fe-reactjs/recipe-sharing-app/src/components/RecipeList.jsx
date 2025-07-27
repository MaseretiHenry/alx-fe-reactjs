// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore'; // Path from components to src/recipeStore.js

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ margin: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet. Add some!</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id} style={{ marginBottom: '10px', borderBottom: '1px dashed #eee', paddingBottom: '5px' }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
