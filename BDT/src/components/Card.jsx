import React from 'react';

function Card({ icon: Icon, title, description, bgColor }) {
  return (
    <div className='flex flex-col items-center w-[300px] h-[200px] p-4 border border-gray-200 rounded-lg shadow-2xl'>
      <div className={`p-2 rounded-md`} style={{ backgroundColor: bgColor }}>
        <Icon size={20} color="white" />
      </div>

      <div className="flex flex-col items-center mt-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className='font-light opacity-75 text-center' style={{ minHeight: '60px' }}>{description}</p>
      </div>
    </div>
  );
}

export default Card;