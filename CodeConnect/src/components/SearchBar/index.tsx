import { useState } from "react";
import "./styles.css";

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <input
      type="search"
      placeholder="Digite o que você procura"
      className="search-bar"
      value={search}
      onChange={(evt) => setSearch(evt.target.value)}
    />
  )
}

export default SearchBar;