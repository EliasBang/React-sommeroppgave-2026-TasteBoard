import { useState, useEffect } from "react";
import { getCategories, getAreas, getIngredients } from "../api/mealApi.js";

export function useFilterOptions() {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchOptions() {
      setIsLoading(true);
      setError(null);

      try {
        const [categoriesData, areasData, ingredientsData] = await Promise.all([
          getCategories(),
          getAreas(),
          getIngredients(),
        ]);

        if (!cancelled) {
          setCategories(categoriesData);
          setAreas(areasData);
          setIngredients(ingredientsData);
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

    fetchOptions();

    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, areas, ingredients, isLoading, error };
}
