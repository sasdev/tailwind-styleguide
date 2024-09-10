import React from "react";
import MainContainer from "../../components/MainContainer.js";
import products from "../../data/products.js";
import Heading1 from "../../components/headings/heading1.js";
import Link from "next/link";

function Products() {  
    return (
        <MainContainer heading="Products" usePadding={true}>
            <div className="p-2">
                <table className="mt-4 border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">Id</th>
                            <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">Image</th>
                            <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">Name</th>
                            <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">Price</th>
                            <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="px-4 py-2 border-b border-gray-300 cursor-pointer text-blue-500" 
                                    onClick={() => {window.location.href = `/ExamplePages/products/${product.id}`}}>
                                    {product.id}
                                </td>
                                <td className="px-4 py-2 border-b border-gray-300">
                                    <img src={product.image} alt={product.name} className="w-10 h-10" />
                                </td>
                                <td className="px-4 py-2 border-b border-gray-300">{product.name}</td>
                                <td className="px-4 py-2 border-b border-gray-300">{product.price}</td>
                                <td className="px-4 py-2 border-b border-gray-300">{product.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
       


    </MainContainer>
    )
}

export default Products;