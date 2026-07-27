import { Link } from "react-router-dom";
import { FavoriteButton } from "./FavoriteButton";

export function RecipeCard({ meal }) {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="recipe-card">
      {meal.strMealThumb ? (
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      ) : (
        <div className="recipe-card-no-image">No image available</div>
      )}
      <h3>{meal.strMeal}</h3>
      <FavoriteButton meal={meal} />
    </Link>
  );
}
