import React, { useState, useEffect } from 'react';
import { Search, Plus, X, Smartphone, Laptop, Headphones, Watch, Star } from "lucide-react";

const ProductCard = ({ product, onAddToCompare, isInComparison, onRemoveFromCompare }) => {
  return (
    <div className="product-card">
      <div className="product-header">
        <div className="product-image">{product.image}</div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-brand">{product.brand}</p>
          <div className="product-rating">
            <Star className="star-icon" size={16} fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
        <div className="product-price">${product.price}</div>
      </div>
      
      <div className="product-features">
        {Object.entries(product.features).slice(0, 4).map(([key, value]) => (
          <div key={key} className="feature-item">
            <span className="feature-label">{key}:</span>
            <span className="feature-value">{value}</span>
          </div>
        ))}
      </div>
      
      <div className="product-actions">
        {isInComparison ? (
          <button 
            className="btn btn-remove"
            onClick={() => onRemoveFromCompare(product.id)}
          >
            <X size={16} />
            Remove from Compare
          </button>
        ) : (
          <button 
            className="btn btn-add"
            onClick={() => onAddToCompare(product)}
          >
            <Plus size={16} />
            Add to Compare
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard
