import React from 'react';

function ProfileCard() {
  return (
    <div className='w-11/12 h-60 bg-gradient-to-r from-blue-400 to-slate-900 text-white rounded-md mx-auto flex justify-around'>
      <div className="w-32 flex">
        <img className='w-28 h-28 rounded-full my-auto mx-5' src="https://avatars.githubusercontent.com/u/22185306?v=4" alt="Profile_photo" />
      </div>
      <div className="w-auto flex-col my-auto text-justify">
        <span className="text-base "><strong>Hola</strong></span>
        <h2 className='py-3 text-2xl '>Soy <strong>Francisco Mercado</strong></h2>
        <span className='pt-0 text-lg'>Fullstack Developer</span>
      </div>
    </div>
  );
}

export default ProfileCard;
