import React, { useState, useCallback } from 'react';
import ProductList from './ProductList';
import { products } from '../data/data';

const Search = () => {
    const [search, setSearch] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  
  const resetFilters = useCallback(() => {
    console.log("your function is called")
    setSearch('');
    setShowInStock(false);
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">📦 Product Search</h1>

      <input
        className="border p-2 w-full"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={showInStock}
          onChange={() => setShowInStock(prev => !prev)}
        />
        <span>Show In-Stock Only</span>
      </label>

     
      <button
        onClick={resetFilters}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Reset Filters
      </button>

      <ProductList
        products={products}
        search={search}
        showInStock={showInStock}
      />
    </div>
  );
}

export default Search;