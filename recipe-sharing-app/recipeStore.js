import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a recipe
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),

  // Update a recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Delete a recipe
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),

  // Get recipe by ID (optional helper)
  getRecipeById: (id) => {
    const { recipes } = useRecipeStore.getState();
    return recipes.find((recipe) => recipe.id === id);
  },
}));
