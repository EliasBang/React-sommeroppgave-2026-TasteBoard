import { useState, useEffect, useCallback } from "react";
import { getRandom } from "../api/mealApi.js";

export function useRandomRecipes(count = 6) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomRecipes = useCallback(
    async (isCancelled = () => false) => {
      setIsLoading(true);
      setError(null);

      try {
        const requests = Array.from({ length: count }, () => getRandom());
        const results = await Promise.all(requests);

        const validRecipes = results.filter((meal) => meal !== null);

        if (!isCancelled()) {
          setRecipes(validRecipes);
        }
      } catch (err) {
        if (!isCancelled()) {
          setError(err);
        }
      } finally {
        if (!isCancelled()) {
          setIsLoading(false);
        }
      }
    },
    [count],
  );
  useEffect(() => {
    let cancelled = false;
    fetchRandomRecipes(() => cancelled);

    return () => {
      cancelled = true;
    };
  }, [fetchRandomRecipes]);

  return { recipes, isLoading, error, refresh: fetchRandomRecipes };
}
