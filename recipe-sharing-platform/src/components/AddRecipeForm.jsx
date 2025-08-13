import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required!");
      return;
    }

    const ingredientList = ingredients.split(",").map(item => item.trim());
    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients (comma separated).");
      return;
    }

    // Clear error
    setError("");

    // Pass the new recipe to parent
    const newRecipe = { title, ingredients: ingredientList, steps };
    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Add New Recipe</h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-400"
      />

      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full border rounded-lg p-2 h-24 focus:outline-none focus:ring focus:border-blue-400"
      ></textarea>

      <textarea
        placeholder="Preparation Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full border rounded-lg p-2 h-32 focus:outline-none focus:ring focus:border-blue-400"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
