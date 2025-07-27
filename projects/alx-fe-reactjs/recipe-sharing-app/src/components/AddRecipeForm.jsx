// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore'; // Path from components to src/recipeStore.js

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please enter both title and description for the recipe.');
      return;
    }
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '5px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>Add New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
        style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
        rows="4"
        style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
      />
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
