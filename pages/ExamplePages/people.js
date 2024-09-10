import React from "react";
import MainContainer from "../../components/MainContainer.js";
import people from "../../data/people.js";
import Link from "next/link";
import TableLink from "../../components/TableLink";
import Card1 from "../../components/Cards/card1.js";

function People() {
  return (
    <MainContainer heading="People">
      <Card1 showPadding={false}>
        <table className="border border-gray-300 w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300 w-10">
                Id
              </th>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">
                First Name
              </th>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">
                Last Name
              </th>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">
                Phone
              </th>
              <th className="px-4 py-2 bg-gray-100 border-b border-gray-300">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.id}>
                <td className="border-b border-gray-300 p-0">
                  <TableLink href={`/ExamplePages/people/${person.id}`}>
                    {person.id}
                  </TableLink>
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {person.first_name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {person.last_name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {person.phone}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {person.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card1>
    </MainContainer>
  );
}

export default People;
