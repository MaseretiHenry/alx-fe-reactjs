import { useRecipeStore } from './store/recipeStore';
import { Link } from 'react-router-dom';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
