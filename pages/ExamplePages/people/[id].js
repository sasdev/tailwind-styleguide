import { useRouter } from "next/router";
import people from "@data/people.js";
import MainContainer from "@components/MainContainer.js";
import Card1 from "@components/cards/card1.js";
import Image from "next/image";
import OrderHistory from "@components/OrderHistory.js";
import orders from "@data/orders";

const PersonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const person = people.find((p) => p.id === parseInt(id));

  if (!person) {
    return <div>Person not found</div>;
  }

    // Filter the orders for the specific person ID
    const personOrders = orders.filter((order) => order.person_id === parseInt(id));

  return (
    <MainContainer heading="Person Detail" usePadding={true}>
      {/* Add edit button */}
      <Card1 showPadding={false}>
      <div className="relative">
          <button
            // onClick={handleEditClick}
            className="absolute top-2 right-2 bg-zinc-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        </div>
        <div>
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">First Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {person.first_name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Last Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {person.last_name}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {person.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {person.phone}
              </dd>
            </div>

          </dl>
        </div>
      </Card1>

      <div class="flex flex-row gap-4">
        <div class="basis-1/2">
          <OrderHistory orders={personOrders} />
        </div>
        <div class="basis-1/2">
          <Card1 heading="Placeholder"></Card1>
        </div>
      </div>
    </MainContainer>
  );
};

export default PersonDetail;
