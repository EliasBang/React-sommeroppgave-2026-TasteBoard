import { useParams } from "react-router-dom";
import { useRecipeDetails } from "../hooks/useRecipeDetails";
import { useRecipeNotes } from "../hooks/useRecipeNotes";
import { getYoutubeLink, getSourceLink, getTags } from "../api/mealTransforms";
import { IngredientList } from "../components/IngredientList";
import { FavoriteButton } from "../components/FavoriteButton";
import { LoadingState } from "../components/LoadingState";
import { ErrorState } from "../components/ErrorState";

export default function RecipeDetails() {
  const { id } = useParams();
  const { recipe, isLoading, error } = useRecipeDetails(id);
  const { note, setNote } = useRecipeNotes(id);

  if (isLoading) return <LoadingState message="Loading recipe..." />;
  if (error)
    return <ErrorState error={error} message="Couldn't load this recipe" />;

  if (!recipe) return <p>Recipe not found.</p>;

  const youtubeUrl = getYoutubeLink(recipe);
  const sourceUrl = getSourceLink(recipe);
  const tags = getTags(recipe);

  return (
    <div className="recipe-details-page">
      <div className="recipe-header">
        <h1>{recipe.strMeal}</h1>
        <FavoriteButton meal={recipe} />
      </div>

      {recipe.strMealThumb ? (
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="recipe-image"
        />
      ) : (
        <div className="recipe-no-image">No image available</div>
      )}

      <div className="recipe-meta">
        {recipe.strCategory && <span>{recipe.strCategory}</span>}
        {recipe.strArea && <span>{recipe.strArea}</span>}
      </div>

      {tags.length > 0 && (
        <div className="recipe-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <h2>Ingredients</h2>
      <IngredientList meal={recipe} />

      <h2>Instructions</h2>
      <p className="recipe-instructions">
        {recipe.strInstructions || "No instructions available."}
      </p>

      <div className="recipe-links">
        {youtubeUrl && (
          <a href={youtubeUrl} target="_blank" rel="noreferrer">
            Watch on YouTube
          </a>
        )}
        {sourceUrl && (
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Original recipe
          </a>
        )}
      </div>

      <h2>Your notes</h2>
      <textarea
        value={note}
        onChange={(event) => setNote(event.target.value)}
        placeholder="Write a note about this recipe..."
        className="recipe-notes"
      />
    </div>
  );
}
