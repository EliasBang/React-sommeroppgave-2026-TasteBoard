<source_code>
.oxlintrc.json
```
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

index.html
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>react-sommeroppgave-2026-tasteboard</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

package.json
```
{
  "name": "react-sommeroppgave-2026-tasteboard",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-router-dom": "^7.18.1"
  },
  "devDependencies": {
    "@babel/core": "^7.29.7",
    "@rolldown/plugin-babel": "^0.2.3",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "babel-plugin-react-compiler": "^1.0.0",
    "oxlint": "^1.71.0",
    "vite": "^8.1.1"
  }
}
```

vite.config.js
```
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
```

src/App.css
```
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

src/App.jsx
```
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { FavoriteProvider } from "./context/FavoriteContext";
import "./App.css";

function App() {
  return (
    <FavoriteProvider>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </FavoriteProvider>
  );
}

export default App;
```

src/index.css
```
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

body {
  margin: 0;
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}
```

src/main.jsx
```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```

src/api/mealApi.js
```
const baseUrl = "https://www.themealdb.com/api/json/v1/1";

const normalizeList = (data, key) => {
  return Array.isArray(data[key]) ? data[key] : [];
};

export async function searchByName(name) {
  const response = await fetch(`${baseUrl}/search.php?s=${name}`);
  const data = await response.json();
  return normalizeList(data, "meals");
}

export async function getById(id) {
  const response = await fetch(`${baseUrl}/lookup.php?i=${id}`);
  const data = await response.json();
  return Array.isArray(data.meals) ? data.meals[0] : null;
}

export async function getRandom() {
  const response = await fetch(`${baseUrl}/random.php`);
  const data = await response.json();
  return Array.isArray(data.meals) ? data.meals[0] : null;
}
export async function filterByCategory(category) {
  const response = await fetch(`${baseUrl}/filter.php?c=${category}`);
  const data = await response.json();
  return normalizeList(data, "meals");
}

export async function filterByArea(area) {
  const response = await fetch(`${baseUrl}/filter.php?a=${area}`);
  const data = await response.json();
  return normalizeList(data, "meals");
}

export async function filterByIngredient(ingredient) {
  const response = await fetch(`${baseUrl}/filter.php?i=${ingredient}`);
  const data = await response.json();
  return normalizeList(data, "meals");
}

export async function getCategories() {
  const response = await fetch(`${baseUrl}/categories.php`);
  const data = await response.json();
  return normalizeList(data, "categories");
}

export async function getAreas() {
  const response = await fetch(`${baseUrl}/list.php?a=list`);
  const data = await response.json();
  return normalizeList(data, "meals");
}

export async function getIngredients() {
  const response = await fetch(`${baseUrl}/list.php?i=list`);
  const data = await response.json();
  return normalizeList(data, "meals");
}
```

src/api/mealTransforms.js
```
export function mealToIngredientList(meal) {
  if (!meal) return [];

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (!ingredient?.trim()) continue;

    ingredients.push({
      ingredient: ingredient.trim(),
      measure: measure?.trim() || "to taste",
    });
  }
  return ingredients;
}

export function getYoutubeLink(meal) {
  return meal?.strYoutube || null;
}

export function getSourceLink(meal) {
  return meal?.strSource || null;
}

export function getTags(meal) {
  if (!meal?.strTags) return [];

  return meal.strTags
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
}
```

src/components/ErrorState.jsx
```
export function ErrorState({ error, message = "Something went wrong." }) {
  <div className="error-state">
    <p>{message}</p>
    {error?.message && <p className="error-detail">{error.message}</p>}
  </div>;
}
```

src/components/FavoriteButton.jsx
```
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
```

src/components/FilterPanel.jsx
```
import { useSearchParams } from "react-router-dom";
import { useFilterOptions } from "../hooks/useFilterOptions";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";

export function FilterPanel() {
  const { categories, areas, ingredients, isLoading, error } =
    useFilterOptions();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeType = searchParams.get("filterType");
  const activeValue = searchParams.get("filterValue");

  function applyFilter(type, value) {
    const next = new URLSearchParams(searchParams);
    next.set("filterType", type);
    next.set("filterValue", value);

    next.delete("q");
    setSearchParams(next);
  }

  function clearFilter() {
    const next = new URLSearchParams(searchParams);
    next.delete("filterType");
    next.delete("filterValue");
    setSearchParams(next);
  }

  if (isLoading) return <LoadingState message="Loading filters..." />;
  if (error)
    return <ErrorState error={error} message="Couldn't load filters." />;

  return (
    <div className="filter-panel">
      {activeType && (
        <button type="button" onClick={clearFilter} className="clear-filter">
          Clear filter ({activeValue})
        </button>
      )}

      <section>
        <h4>Categories</h4>
        <div className="filter-options">
          {categories.map((category) => (
            <button
              type="button"
              key={category.strCategory}
              className={
                activeType === "category" &&
                activeValue === category.strCategory
                  ? "active"
                  : ""
              }
              onClick={() => applyFilter("category", category.strCategory)}
            >
              {category.strCategory}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h4>Areas</h4>
        <div className="filter-options">
          {areas.map((area) => (
            <button
              type="button"
              key={area.strArea}
              className={
                activeType === "area" && activeValue === area.strArea
                  ? "active"
                  : ""
              }
              onClick={() => applyFilter("area", area.strArea)}
            >
              {area.strArea}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h4>Ingredients</h4>
        <div className="filter-options">
          {ingredients.map((ingredient) => (
            <button
              type="button"
              key={ingredient.strIngredient}
              className={
                activeType === "ingredient" &&
                activeValue === ingredient.strIngredient
                  ? "active"
                  : ""
              }
              onClick={() =>
                applyFilter("ingredient", ingredient.strIngredient)
              }
            >
              {ingredient.strIngredient}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
```

src/components/IngredientList.jsx
```
import { mealToIngredientList } from "../api/mealTransforms";

export function IngredientList({ meal }) {
  const ingredients = mealToIngredientList(meal);

  if (ingredients.lenght === 0) {
    return <p>No ingredient information availbale</p>;
  }

  return (
    <ul className="ingredient-list">
      {ingredients.map(({ ingredient, measure }) => (
        <li key={ingredient}>
          <span className="ingredient-name">{ingredient}</span>
          <span className="ingredient-measure">{measure}</span>
        </li>
      ))}
    </ul>
  );
}
```

src/components/LoadingState.jsx
```
export function LoadingState({ message = "Loading..." }) {
  return (
    <div className="loading-state">
      <p>{message}</p>
    </div>
  );
}
```

src/components/NavBar.jsx
```
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
}
```

src/components/RecipeCard.jsx
```
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
```

src/components/SearchBar.jsx
```
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) return;

    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Search for a recipe..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
```

src/context/FavoriteContext.jsx
```
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
```

src/hooks/useFilterOptions.js
```
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
          setIngredients(ingredients);
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
```

src/hooks/useLocalStorage.js
```
import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);

  return [value, setValue];
};
```

src/hooks/useRandomRecipes.js
```
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
```

src/hooks/useRecipeDetails.js
```
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
```

src/hooks/useRecipeNotes.js
```
import { useLocalStorage } from "./useLocalStorage.js";

export function useRecipeNotes(id) {
  const [note, setNote] = useLocalStorage(`note:${id}`, "");

  return { note, setNote };
}
```

src/hooks/useRecipeSearch.js
```
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
```

src/pages/Favorites.jsx
```
import { useFavorites } from "../context/FavoriteContext";
import { RecipeCard } from "../components/RecipeCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>

      {favorites.length === 0 ? (
        <p>You haven't saved any recipes yet.</p>
      ) : (
        <div className="recipe-grid">
          {favorites.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
```

src/pages/Home.jsx
```
import { useRandomRecipes } from "../hooks/useRandomRecipes";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/SearchBar";
import { LoadingState } from "../components/LoadingState";
import { ErrorState } from "../components/ErrorState";

export default function Home() {
  const { recipes, isLoading, error, refresh } = useRandomRecipes(6);

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
```

src/pages/RecipeDetails.jsx
```
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
```

src/pages/SearchResults.jsx
```
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
```

src/router/index.jsx
```
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import RecipeDetails from "../pages/RecipeDetails";
import Favorites from "../pages/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <SearchResults /> },
      { path: "recipe/:id", element: <RecipeDetails /> },
      { path: "favorites", element: <Favorites /> },
      { path: "*", element: <h1>404 - Page not found</h1> },
    ],
  },
]);
```

</source_code>