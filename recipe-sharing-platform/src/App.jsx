import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Added import
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <AddRecipeForm onAddRecipe={handleAddRecipe} />

      <div className="max-w-lg mx-auto mt-8 space-y-4">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-lg"
          >
            <h3 className="text-xl font-bold">{recipe.title}</h3>
            <p className="text-sm text-gray-700">
              <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Steps:</strong> {recipe.steps}
            </p>

            {/* ✅ Added navigation link to details page */}
            <Link
              to={`/recipe/${index}`}
              className="text-blue-500 hover:underline mt-3 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
