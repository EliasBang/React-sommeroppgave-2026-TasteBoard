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
