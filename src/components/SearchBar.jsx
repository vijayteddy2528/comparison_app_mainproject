import React, { useState, useEffect } from 'react';
import { Search, Plus, X, Smartphone, Laptop, Headphones, Watch, Star } from "lucide-react";

const SearchBar = ({ searchTerm, onSearchChange, onCategoryFilter, selectedCategory }) => {
  const categories = ['all', 'smartphone', 'laptop', 'headphones', 'smartwatch'];
  
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'smartphone': return <Smartphone size={16} />;
      case 'laptop': return <Laptop size={16} />;
      case 'headphones': return <Headphones size={16} />;
      case 'smartwatch': return <Watch size={16} />;
      default: return null;
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search products by name, brand, or features..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryFilter(category)}
          >
            {getCategoryIcon(category)}
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar
