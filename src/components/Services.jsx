import React from 'react';

function Services() {
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h1 className="underline text-center">Proyectos.</h1>
        <div className="w-full h-36 rounded-md mx-auto mt-2 bg-red-200"></div>
        <div className="w-full h-36 rounded-md mx-auto mt-2 bg-orange-200"></div>
        <div className="w-full h-36 rounded-md mx-auto mt-2 bg-blue-200"></div>
        <div className="w-full h-36 rounded-md mx-auto mt-2 bg-fuchsia-200"></div>
      </div>
      <div>
        <h1 className="underline text-center mt-3 flex-row">Servicios</h1>
        <div className="w-10/12 h-40 border-2 border-blue-400 rounded-md mx-auto mt-3"></div>
        <div className="w-10/12 h-40 border-2 border-blue-400 rounded-md mx-auto mt-3"></div>
        <div className="w-10/12 h-40 border-2 border-blue-400 rounded-md mx-auto mt-3"></div>
      </div>
    </div>
  );
}

export default Services;
