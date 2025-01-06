import { useRouter } from "next/router";
import orders from "../../../data/orders.js";
import MainContainer from "../../../components/MainContainer.js";
import Card1 from "@components/cards/card1"
import Image from "next/image";

const OrderDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const order = orders.find((o) => o.id === parseInt(id));

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <MainContainer heading="Order Detail" usePadding={true}>
      <Card1 showPadding={false}>
        <div>
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Order ID</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {order.id}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {order.customer_name}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Order Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {order.order_date}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {order.status}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Total</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {order.total}
              </dd>
            </div>
          </dl>
        </div>
      </Card1>

      <div className="flex flex-row gap-4">
        <div className="basis-1/2">
          <Card1 heading="Customer Details">
            <ul className="divide-y divide-gray-200">
              <li className="p-3 cursor-pointer hover:bg-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 full">
                    <Image
                      className="w-8 h-8 rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="avatar"
                      width={32} // specify width
                      height={32} // specify height
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {order.customer_name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">Order Date: {order.order_date}</p>
                  </div>
                  <div className="inline-flex items-center text-base text-gray-800">
                    {order.total}
                  </div>
                </div>
              </li>
            </ul>
          </Card1>
        </div>
        <div className="basis-1/2">
          <Card1 heading="Placeholder"></Card1>
        </div>
      </div>
    </MainContainer>
  );
};

export default OrderDetail;