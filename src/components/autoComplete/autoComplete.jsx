import React, { useState } from "react";

const AutoComplete = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredSuggestions = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    setSuggestions([]);
  };

  return (
    <div className="auto-complete">
      <input
        type="text"
        placeholder="Search Images"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => (
          <div key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.title}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
