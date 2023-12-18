import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (input) => {
    setInput(input);
    handleSearch(input);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />

      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
