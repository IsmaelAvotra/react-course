import { employees } from "../data/data";
const Card = () => {
  return (
    <div className="bg-slate-900 text-center px-10 py-20 rounded-xl">
      <h3 className="text-4xl font-bold text-white">Meet our team</h3>
      <p className="text-xl text-gray-400">
        We are a dynamic group of individuals who are passionate about what we
        do.
      </p>

      <div className=" mt-10 flex gap-5">
        {employees.map((employee) => {
          const { name, role, imageUrl } = employee;
          return (
            <div className="bg-slate-700 mb-5 flex-column rounded-md">
              <img src={imageUrl} alt="image url" className="rounded-full" />
              <h4>{name}</h4>
              <p>{role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
