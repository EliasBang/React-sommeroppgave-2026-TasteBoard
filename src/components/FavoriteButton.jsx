import { useFavorites } from "../context/FavoriteContext";

export function FavoriteButton({ meal }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(meal.idMeal);

  return (
    <button
      type="button"
      className={`favorite-button ${favorited ? "is-favorite" : ""}`}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        toggleFavorite(meal);
      }}
    >
      {favorited ? "❤️" : "🤍"}
    </button>
  );
}
