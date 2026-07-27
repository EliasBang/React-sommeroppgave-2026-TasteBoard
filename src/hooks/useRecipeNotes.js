import { useLocalStorage } from "./useLocalStorage.js";

export function useRecipeNotes(id) {
  const [note, setNote] = useLocalStorage(`note:${id}`, "");

  return { note, setNote };
}
