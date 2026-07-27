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
