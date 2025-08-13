import React from "react";
import AddRecipeForm from "../components/AddRecipeForm";

const AddRecipePage = () => {
  const handleAddRecipe = (recipe) => {
    console.log("New recipe submitted:", recipe);
    // Here you can later integrate with backend or Zustand store
  };

  return (
    <div className="p-4">
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
    </div>
  );
};

export default AddRecipePage;

