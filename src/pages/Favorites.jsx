import { useFavorites } from "../context/FavoriteContext";
import { RecipeCard } from "../components/RecipeCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>

      {favorites.length === 0 ? (
        <p>You haven't saved any recipes yet.</p>
      ) : (
        <div className="recipe-grid">
          {favorites.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
