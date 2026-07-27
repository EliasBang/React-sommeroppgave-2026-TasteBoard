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
