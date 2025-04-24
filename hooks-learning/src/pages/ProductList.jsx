
import React, { useMemo } from 'react';

const ProductList = ({ products, search, showInStock }) => {
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...'); // track when it runs
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesStock = showInStock ? product.inStock : true;
      return matchesSearch && matchesStock;
    });
  }, [products, search, showInStock]);

  return (
    <ul className="space-y-2">
      {filteredProducts.map(product => (
        <li key={product.id} className="p-2 rounded border shadow-sm">
          <span className="font-semibold">{product.name}</span> - ${product.price}
          {product.inStock ? (
            <span className="text-green-500 ml-2">In Stock</span>
          ) : (
            <span className="text-red-500 ml-2">Out of Stock</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
