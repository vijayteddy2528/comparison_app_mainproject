import React, { useState, useEffect } from 'react';
import { Search, Plus, X, Smartphone, Laptop, Headphones, Watch, Star } from 'lucide-react';
import SearchBar from './components/SearchBar';
import Sampleproducts from './components/SampleData';
import ProductCard from './components/ProductCard';
import comparisonProducts from './components/ComparisonTable'
import ComparisonTable from './components/ComparisonTable';

const TechComparisonTool = () => {
  const [products] = useState(Sampleproducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [comparisonProducts, setComparisonProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeView, setActiveView] = useState('browse'); // 'browse' or 'compare'

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.values(product.features).some(feature =>
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  const handleAddToCompare = (product) => {
    if (comparisonProducts.length < 4 && !comparisonProducts.find(p => p.id === product.id)) {
      setComparisonProducts([...comparisonProducts, product]);
    }
  };

  const handleRemoveFromCompare = (productId) => {
    setComparisonProducts(comparisonProducts.filter(p => p.id !== productId));
  };

  const handleClearComparison = () => {
    setComparisonProducts([]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Tech Product Comparison Tool</h1>
        <p>Compare the latest tech products side-by-side</p>
      </header>

      <nav className="app-nav">
        <button 
          className={`nav-btn ${activeView === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveView('browse')}
        >
          Browse Products
        </button>
        <button 
          className={`nav-btn ${activeView === 'compare' ? 'active' : ''}`}
          onClick={() => setActiveView('compare')}
        >
          Compare ({comparisonProducts.length})
        </button>
      </nav>

      {activeView === 'browse' ? (
        <div className="browse-view">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onCategoryFilter={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCompare={handleAddToCompare}
                isInComparison={comparisonProducts.some(p => p.id === product.id)}
                onRemoveFromCompare={handleRemoveFromCompare}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="no-results">
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </div>
      ) : (
        <ComparisonTable
          comparisonProducts={comparisonProducts}
          onRemoveProduct={handleRemoveFromCompare}
          onClearAll={handleClearComparison}
        />
      )}
    </div>
  );
};

function App(){
  return(
    <div>
      <TechComparisonTool/>
    </div>
  )
}
export default App
