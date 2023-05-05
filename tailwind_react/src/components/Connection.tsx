import { employees } from "../data/data";

const Connection = () => {
  return (
    <div className=" bg-gray-300 px-4 py-4 rounded-md mb-20">
      <h3 className="text-lg leading-6 font-medium text-pink-800 mb-1">
        Example 2
      </h3>
      <ul role="list" className="divide-y divide-gray-100">
        {employees.map((employee) => {
          const { role, lastSeen, lastSeenDateTime, imageUrl, name, email } =
            employee;
          return (
            <li key={email} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {email}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{role}</p>
                {lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen{" "}
                    <time dateTime={lastSeenDateTime}>{lastSeen}</time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Connection;
