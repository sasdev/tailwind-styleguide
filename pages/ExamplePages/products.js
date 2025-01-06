import React from 'react';
import products from '@data/products'; // Assuming you have a products data file

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => { window.location.href = `/ExamplePages/products/${product.id}` }}
            className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-500 text-sm mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;