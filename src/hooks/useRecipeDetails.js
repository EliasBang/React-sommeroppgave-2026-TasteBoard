import { useState, useEffect } from "react";
import { getById } from "../api/mealApi.js";

export function useRecipeDetails(id) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setRecipe(null);
      setError(null);
      return;
    }

    let cancelled = false;

    async function fetchRecipe() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getById(id);
        if (!cancelled) {
          setRecipe(data);
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

    fetchRecipe();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return { recipe, isLoading, error };
}
