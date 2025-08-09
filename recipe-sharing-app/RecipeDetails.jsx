import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === id)
  );
  const [editing, setEditing] = useState(false);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      {!editing ? (
        <>
          <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
          <p className="mb-4">{recipe.description}</p>
          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
          >
            Edit
          </button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      ) : (
        <EditRecipeForm recipe={recipe} onCancel={() => setEditing(false)} />
      )}
    </div>
  );
};

export default RecipeDetails;
