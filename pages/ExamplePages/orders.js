<<<<<<< HEAD
import React from "react";
import MainContainer from "../../components/MainContainer.js";
import orders from "../../data/orders.js";
import Link from "next/link";
import TableLink from "../../components/TableLink";
import Card1 from "../../components/Cards/card1.js";

function Orders() {
  return (
    <MainContainer heading="Orders">
      <Card1 showPadding={false}>
        <table className="border border-gray-300 w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300 w-10">
                Id
              </th>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">
                Customer Name
              </th>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">
                Order Date
              </th>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">
                Status
              </th>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border-b border-gray-300 p-0">
                  <TableLink href={`/ExamplePages/orders/${order.id}`}>
                    {order.id}
                  </TableLink>
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {order.customer_name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {order.order_date}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {order.status}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {order.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
=======
import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer.js";
import ordersData from "../../data/orders.js";
import Link from "next/link";
import TableLink from "../../components/TableLink";
import Card1 from "../../components/cards/card1.js";
import { useRouter } from "next/router";

function Orders() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const handleRowClick = (id) => {
    router.push(`/ExamplePages/orders/${id}`);
  };

  return (
    <MainContainer heading="Orders">
      <Card1 showPadding={false}>
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
                  Customer Name
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order Date
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  onClick={() => handleRowClick(order.id)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.id}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customer_name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.order_date}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.status}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
>>>>>>> gh-pages
      </Card1>
    </MainContainer>
  );
}

export default Orders;