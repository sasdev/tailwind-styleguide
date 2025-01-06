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

export default Products;