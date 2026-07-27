import { useRandomRecipes } from "../hooks/useRandomRecipes";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/SearchBar";
import { LoadingState } from "../components/LoadingState";
import { ErrorState } from "../components/ErrorState";

export default function Home() {
  const { recipes, isLoading, error, refresh } = useRandomRecipes(8);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Find your next recipe</h1>
        <SearchBar />
      </section>

      <section className="inspiration">
        <div className="inspiration-header">
          <h2>Need inspiration?</h2>
          <button type="button" onClick={refresh}>
            Shuffle
          </button>
        </div>

        {isLoading && <LoadingState message="Finding recipies..." />}
        {error && <ErrorState error={error} message="Couldn't load recipes." />}

        {!isLoading && !error && (
          <div className="recipe-grid">
            {recipes.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
