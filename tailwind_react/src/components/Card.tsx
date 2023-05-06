import { employees } from '../data/data'
const Card = () => {
  return (
    <div className='bg-slate-900 text-center px-10 py-20 rounded-xl'>
      <h3 className='text-4xl font-bold text-white'>Meet our team</h3>
      <p className='text-xl text-gray-400'>
        We are a dynamic group of individuals who are passionate about what we
        do.
      </p>

      <div className=' mt-10 grid grid-cols-3 place-items-center gap-5  '>
        {employees.map((employee) => {
          const { name, role, imageUrl } = employee
          return (
            <div
              className='bg-slate-700 mb-5 flex justify-center flex-col  rounded-md px-16 py-10  min-w-fit'
              key={name}
            >
              <img
                src={imageUrl}
                alt='image url'
                className='rounded-full mb-10 w-full'
              />
              <h4 className='text-2xl text-gray-300 font-semibold'>{name}</h4>
              <p className='text-gray-400'>{role}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
