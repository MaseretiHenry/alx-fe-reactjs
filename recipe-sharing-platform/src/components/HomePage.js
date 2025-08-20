import data from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{recipe.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
