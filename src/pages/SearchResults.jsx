import { useSearchParams } from "react-router-dom";
import { useRecipeSearch } from "../hooks/useRecipeSearch";
import { RecipeCard } from "../components/RecipeCard";
import { FilterPanel } from "../components/FilterPanel";
import { LoadingState } from "../components/LoadingState";
import { ErrorState } from "../components/ErrorState";

export default function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");
  const filterType = searchParams.get("filterType");
  const filterValue = searchParams.get("filterValue");

  const filter =
    filterType && filterValue ? { type: filterType, value: filterValue } : null;

  const { results, isLoading, error } = useRecipeSearch(query, filter);

  return (
    <div className="search-results-page">
      <FilterPanel />

      <div className="search-results">
        {isLoading && <LoadingState message="Searching..." />}
        {error && <ErrorState error={error} message="Search failed." />}

        {!isLoading && !error && !query && !filter && (
          <p>Search for recipe or pick a filter to get started.</p>
        )}

        {!isLoading && !error && (query || filter) && results.length === 0 && (
          <p>No recipes found. Try a different search or filter.</p>
        )}

        {!isLoading && !error && results.length > 0 && (
          <div className="recipe-grid">
            {results.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
