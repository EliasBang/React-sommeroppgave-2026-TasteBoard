import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import RecipeDetails from "../pages/RecipeDetails";
import Favorites from "../pages/Favorites";

export const router = createBrowserRouter(
  [
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
    {
      path: "*",
      element: <h1>404: Not found</h1>,
    },
  ],
  { basename: "/React-sommeroppgave-2026-TasteBoard" },
);
