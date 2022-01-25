import React from 'react';
import s from './styles/ProfileCard.module.css';

function ProfileCard() {
  return (
    <div className={`${s.card_header} w-11/12 h-60 bg-blend-screen bg-center bg-auto bg-slate-900 text-white rounded-md mx-auto mt-4 flex flex-col items-center`}>
      <div className="w-32 flex">
        <img className='w-28 h-28 rounded-full my-auto mx-5 mt-3' src="https://avatars.githubusercontent.com/u/22185306?v=4" alt="Profile_photo" />
      </div>
      <div className="w-auto flex-col my-auto text-center">
        {/* <span className="text-base "><strong>Hola</strong></span> */}
        <h2 className='py-3 text-2xl'><strong>Francisco Mercado</strong></h2>
        <span className='pt-0 text-lg'>Fullstack Developer</span>
      </div>
    </div>
  );
}

export default ProfileCard;
