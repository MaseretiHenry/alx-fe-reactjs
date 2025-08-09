import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, searchTerm } = useRecipeStore(state => ({
    recipes: state.recipes,
    searchTerm: state.searchTerm,
  }));

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredRecipes.map(recipe => (
            <li key={recipe.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.description}</p>
              <Link
                to={`/recipes/${recipe.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
