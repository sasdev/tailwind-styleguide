import { useRouter } from "next/router";
import { useState } from "react";
import people from "@data/people.js";
import MainContainer from "@components/MainContainer.js";
import Card1 from "@components/cards/card1.js";
import Image from "next/image";
import OrderHistory from "@components/OrderHistory.js";
import orders from "@data/orders";
import { Tab } from "@headlessui/react";
import Timeline from "@components/Timeline";
import Link from 'next/link';
import Popup from "@components/Popup";
import { useEffect } from "react";

const PersonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const person = people.find((p) => p.id === parseInt(id));

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (person) {
      setFirstName(person.first_name);
      setLastName(person.last_name);
      setEmail(person.email);
      setPhone(person.phone);
    }
  }, [person]);


  const handleEditClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  if (!person) {
    return <div>Person not found</div>;
  }

  // Filter the orders for the specific person ID
  const personOrders = orders.filter(
    (order) => order.person_id === parseInt(id)
  );

  return (
    <MainContainer heading="Person Detail" usePadding={true}>
      {/* Tabs */}
      <Tab.Group defaultIndex={0}>
        <Tab.List className="rounded-lg bg-white inline-flex flex-wrap px-1 py-1 gap-2 shadow">
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-white rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-700 shadow outline-none"
                : "rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-500 hover:bg-white hover:text-gray-700 outline-none"
            }
          >
            Profile
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-white rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-700 shadow outline-none"
                : "rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-500 hover:bg-white hover:text-gray-700 outline-none"
            }
          >
            History
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-6">
          <Tab.Panel>
            <Card1 showPadding={false}>
              <div className="relative">
                <button
                  onClick={handleEditClick}
                  className="absolute top-2 right-2 bg-zinc-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
              </div>
              <div>
                <dl>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      First Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {person.first_name}
                    </dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Last Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {person.last_name}
                    </dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {person.email}
                    </dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {person.phone}
                    </dd>
                  </div>
                </dl>
              </div>
            </Card1>

            <div className="flex flex-row gap-4">
              <div className="basis-1/2">
                <OrderHistory orders={personOrders} />
              </div>
              <div className="basis-1/2">
                {/* <Card1 heading="Placeholder"></Card1> */}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <Card1 heading="History">
              <Timeline
                date="2021-01-01"
                title="Person created"
                description=""
              />
              <Timeline
                date="2021-02-01"
                title="Order created"
                description={
                  <>
                  Order #0032 was created
                  <Link href="/ExamplePages/orders/1" legacyBehavior>
                    <a className="text-blue-500 underline pl-2">View</a>
                  </Link>
                </>
                }
              />
              <Timeline
                date="2021-03-01"
                title="Person updated"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, nisl nec efficitur ultricies, ligula nisi ultricies nunc, vel tincidunt justo felis et nunc."
              />
              <Timeline
                date="2021-04-01"
                title="Person updated"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, nisl nec efficitur ultricies, ligula nisi ultricies nunc, vel tincidunt justo felis et nunc."
              />
            </Card1>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <Popup isOpen={isPopupOpen} onRequestClose={handleClosePopup}>
        <h2 className="text-xl font-bold mb-4">Edit Person</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="button"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </form>
      </Popup>


    </MainContainer>



  );
};

export default PersonDetail;
