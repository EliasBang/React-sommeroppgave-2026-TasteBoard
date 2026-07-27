import { mealToIngredientList } from "../api/mealTransforms";

export function IngredientList({ meal }) {
  const ingredients = mealToIngredientList(meal);

  if (ingredients.length === 0) {
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
