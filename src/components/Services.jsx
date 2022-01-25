import React from 'react';

function Services() {
  return (
    <div className="w-11/12 mx-auto">
        <h1 className="underline text-center text-2xl">Proyectos.</h1>
      <div className="flex flex-col md:flex-row md:justify-around lg:flex-row lg:justify-between">
        <div className="w-full md:w-1/2 md:mx-3 lg:w-1/2 lg:mx-2 h-36 rounded-md mx-auto mt-2 bg-red-200 shadow-lg"></div>
        <div className="w-full md:w-1/2 md:mx-3 lg:w-1/2 lg:mx-2 h-36 rounded-md mx-auto mt-2 bg-orange-200 shadow-lg"></div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around lg:flex-row lg:justify-between">
        <div className="w-full sm:w-full h-36 md:w-1/2 md:mx-3 lg:w-1/2 lg:mx-2 rounded-md mx-auto mt-2 bg-blue-200 shadow-lg"></div>
        <div className="w-full sm:w-full h-36 md:w-1/2 md:mx-3 lg:w-1/2 lg:mx-2 rounded-md mx-auto mt-2 bg-fuchsia-200 shadow-lg"></div>
      </div>
        <h1 className="underline text-center mt-3 flex-row text-2xl">Servicios</h1>
      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row mx-auto my-5">
        <div className="w-4/5 h-48 md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 border-2 border-blue-400 rounded-md mx-auto mt-3"></div>
        <div className="w-4/5 h-48 md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 border-2 border-blue-400 rounded-md mx-auto mt-3"></div>
      </div>
      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row mx-auto my-5">
        <div className="w-4/5 h-48 md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 border-2 border-blue-400 rounded-md mx-auto mt-3"></div>
        <div className="w-4/5 h-48 md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 border-2 border-blue-400 rounded-md mx-auto mt-3"></div>
      </div>
    </div>
  );
}

export default Services;
