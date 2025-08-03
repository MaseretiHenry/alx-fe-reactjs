import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.' },
    { id: 2, title: 'Chicken Tikka Masala', description: 'Roasted chunks of chicken in a spiced sauce.' },
  ],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));
