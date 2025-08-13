import React, { useState } from "react";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
      <div className="mt-6">
        {recipes.map((r) => (
          <div key={r.id} className="border p-2 mb-2 rounded">
            <h2 className="font-bold">{r.title}</h2>
            <p><strong>Ingredients:</strong> {r.ingredients.join(", ")}</p>
            <p><strong>Steps:</strong> {r.steps}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
