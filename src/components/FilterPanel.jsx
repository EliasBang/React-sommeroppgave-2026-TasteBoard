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
          {areas.map((area, index) => (
            <button
              type="button"
              key={`${area.strArea}-${index}`}
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
