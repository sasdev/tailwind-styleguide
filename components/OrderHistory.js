import React from "react";
import Image from "next/image";
import Card1 from "@components/cards/card1";
import { useRouter } from "next/router";

const OrderHistory = ({ orders }) => {
  const router = useRouter();

  const handleOrderClick = (orderId) => {
    router.push(`/ExamplePages/orders/${orderId}`);
  };

  return (
    <Card1 heading="Order History">
      <ul className="divide-y divide-gray-200">
        {orders.map((order) => (
          <li
            key={order.id}
            className="p-3 cursor-pointer hover:bg-gray-200"
            onClick={() => handleOrderClick(order.id)}
          >
            <div className="flex items-center space-x-4">
              {order.imageUrl && (
                <div className="flex-shrink-0">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={order.imageUrl}
                    alt="avatar"
                    width={32} // specify width
                    height={32} // specify height
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Order #00{order.id}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {order.description}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {order.products.length} {order.products.length === 1 ? 'product' : 'products'}
                </p>
              </div>
              <div className="inline-flex items-center text-base text-gray-800">
                {order.total}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card1>
  );
};

export default OrderHistory;