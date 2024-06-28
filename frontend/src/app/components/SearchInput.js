// src/app/components/SearchInput.js
import { useState } from "react";

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center my-4"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for events..."
        className="p-2 border rounded-l-md text-white-500"
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded-r-md">
        Search
      </button>
    </form>
  );
}
