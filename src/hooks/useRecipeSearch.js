import { useState, useEffect } from "react";
import {
  searchByName,
  filterByCategory,
  filterByArea,
  filterByIngredient,
} from "../api/mealApi.js";

export function useRecipeSearch(query, filter) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query && !filter) {
      setResults([]);
      setError(null);
      return;
    }

    let cancelled = false;

    async function runSearch() {
      setIsLoading(true);
      setError(null);

      try {
        let data;

        if (filter) {
          if (filter.type === "category") {
            data = await filterByCategory(filter.value);
          } else if (filter.type === "area") {
            data = await filterByArea(filter.value);
          } else if (filter.type === "ingredient") {
            data = await filterByIngredient(filter.value);
          }
        } else {
          data = await searchByName(query);
        }

        if (!cancelled) {
          setResults(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    runSearch();

    return () => {
      cancelled = true;
    };
  }, [query, filter?.type, filter?.value]);

  return { results, isLoading, error };
}
