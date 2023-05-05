import { people } from "../data/data";

const People = () => {
  return (
    <div className="mb-20">
      <h3 className="text-lg leading-6 font-medium text-yellow-100 mb-1">
        Example 1
      </h3>
      <ul className="divide-y divide-gray-200 bg-red-200  rounded-lg">
        {people.map((person) => (
          <li key={person.email} className="py-4 flex">
            <img
              className="h-10 w-10 rounded-full ml-1 "
              src={person.image}
              alt=""
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;
