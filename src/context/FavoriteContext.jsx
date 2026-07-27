import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavoriteContext = createContext(null);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  function isFavorite(id) {
    return favorites.some((meal) => meal.idMeal === id);
  }

  function addFavorite(meal) {
    if (isFavorite(meal.idMeal)) return;
    setFavorites([...favorites, meal]);
  }

  function removeFavorite(id) {
    setFavorites(favorites.filter((meal) => meal.idMeal !== id));
  }

  function toggleFavorite(meal) {
    if (isFavorite(meal.idMeal)) {
      removeFavorite(meal.idMeal);
    } else {
      addFavorite(meal);
    }
  }

  const value = {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);
  if (context === null) {
    throw new Error("useFavorites must be used withing a FavoriteProvider");
  }
  return context;
}
