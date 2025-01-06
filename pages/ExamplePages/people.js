import React from "react";
import { useRouter } from "next/router";
import MainContainer from "@components/MainContainer.js";
import people from "@data/people.js";
import Card1 from "@components/notcards/card1.js";

function People() {
  const router = useRouter();

  const handleRowClick = (id) => {
    router.push(`/ExamplePages/people/${id}`);
  };

  return (
    <MainContainer heading="People">
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
                  First Name
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Name
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {people.map((person) => (
                <tr
                  key={person.id}
                  onClick={() => handleRowClick(person.id)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.id}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.first_name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.last_name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.phone}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card1>
    </MainContainer>
  );
}

export default People;