import React, { useState, useEffect } from 'react';
import { Search, Plus, X, Smartphone, Laptop, Headphones, Watch, Star } from "lucide-react";



    const ComparisonTable = ({ comparisonProducts, onRemoveProduct, onClearAll }) => {
  if (comparisonProducts.length === 0) {
    return (
      <div className="comparison-empty">
        <p>No products selected for comparison. Add products to compare their features.</p>
      </div>
    );
  }

  // Get all unique features from all products
  const allFeatures = [...new Set(
    comparisonProducts.flatMap(product => Object.keys(product.features))
  )];

  return (
    <div className="comparison-container">
      <div className="comparison-header">
        <h2>Product Comparison ({comparisonProducts.length})</h2>
        <button className="btn btn-clear" onClick={onClearAll}>
          Clear All
        </button>
      </div>
      
      <div className="comparison-table">
        <div className="comparison-row header-row">
          <div className="feature-label-cell">Features</div>
          {comparisonProducts.map(product => (
            <div key={product.id} className="product-header-cell">
              <div className="product-image">{product.image}</div>
              <div>
                <h4>{product.name}</h4>
                <p>{product.brand}</p>
                <div className="price">${product.price}</div>
                <div className="rating">
                  <Star className="star-icon" size={14} fill="currentColor" />
                  {product.rating}
                </div>
              </div>
              <button 
                className="remove-btn"
                onClick={() => onRemoveProduct(product.id)}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
        
        {allFeatures.map(feature => (
          <div key={feature} className="comparison-row">
            <div className="feature-label-cell">{feature}</div>
            {comparisonProducts.map(product => (
              <div key={`${product.id}-${feature}`} className="feature-value-cell">
                {product.features[feature] || 'N/A'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


export default ComparisonTable
