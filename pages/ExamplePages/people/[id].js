import { useRouter } from "next/router";
import people from "../../../data/people.js";
import MainContainer from "../../../components/MainContainer.js";
import Card1 from "../../../components/cards/Card1.js";
import Image from "next/image";

const PersonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const person = people.find((p) => p.id === parseInt(id));

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <MainContainer heading="Person Detail" usePadding={true}>
      <Card1 showPadding={false}>
        <div>
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {person.first_name} {person.last_name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Role</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {person.role}
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
                Current Salary
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {person.salary}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {person.about}
              </dd>
            </div>
          </dl>
        </div>
      </Card1>

      <div class="flex flex-row gap-4">
        <div class="basis-1/2">
          <Card1 heading="Orders">
            <ul class="divide-y divide-gray-200">
              <li class="p-3 cursor-pointer  hover:bg-gray-200 ">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0 full">
                    <Image
                      className="w-8 h-8 rounded-full"
                      src="https://reqres.in/img/faces/2-image.jpg"
                      alt="avatar"
                      width={32} // specify width
                      height={32} // specify height
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate">
                      Order #435
                    </p>
                    <p class="text-sm text-gray-500 truncate">2 Items</p>
                  </div>
                  <div class="inline-flex items-center text-base text-gray-800">
                    $ 400
                  </div>
                </div>
              </li>
            </ul>
          </Card1>
        </div>
        <div class="basis-1/2">
          <Card1 heading="Placeholder"></Card1>
        </div>
      </div>
    </MainContainer>
  );
};

export default PersonDetail;
