import React from 'react';

const Homecard = ({ home }) => {
  return (
    <div className='flex flex-col gap-2 items-center py-10 px-5 justify-center bg-white shadow-xl'>
      <div className=''>
        <img src={home.image} alt={home.name} className='' />
      </div>
      

      <h1 className='text-xl font-semibold font-[poppins]'>{home.name}</h1>
      <p className='text-gray-500 text-center font-[poppins]'>{home.content}</p>
     
    </div>
  );
};

export default Homecard;
