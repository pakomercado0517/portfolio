import React from 'react';
import s from './styles/ProfileCard.module.css';

function ProfileCard() {
  return (
    <div className={`${s.card_header} w-11/12 h-60 bg-blend-lighten bg-center bg-auto bg-slate-900 text-white rounded-md mx-auto mt-4 flex flex-col items-center`}>
      <div className="w-32 flex">
        {/* <img className='w-28 h-28 rounded-full my-auto mx-5 mt-3' src="https://avatars.githubusercontent.com/u/22185306?v=4" alt="Profile_photo" /> */}
      </div>
      <div className="flex flex-col my-auto text-center lg:items-end lg:justify-end lg:ml-96 ">
        {/* <span className="text-base "><strong>Hola</strong></span> */}
        <h2 className='py-3 text-3xl lg:text-6xl'><strong>Francisco Mercado</strong></h2>
        <span className='pt-0 text-2xl lg:text-4xl'>Fullstack Developer</span>
      </div>
    </div>
  );
}

export default ProfileCard;
