<<<<<<< HEAD
import React from "react";
import MainContainer from "@components/MainContainer.js";
import products from "@data/products.js";
import Heading1 from "@components/headings/heading1.js";
import Link from "next/link";

function Products() {
  return (
    <MainContainer heading="Products" usePadding={true}>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Id
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr
                key={product.id}
                onClick={() => {window.location.href = `/ExamplePages/products/${product.id}`}}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.id}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  <img src={product.image} alt={product.name} className="w-10 h-10" />
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.name}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.price}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainContainer>
  );
}
=======
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
>>>>>>> gh-pages

export default Products;