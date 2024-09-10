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
      </Card1>
    </MainContainer>
  );
}

export default Orders;