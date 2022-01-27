import React from "react";

function Services() {
  return (
    <div className="w-11/12 mx-auto text-gray-600">
      {/* <h1 className="underline text-center text-2xl">Proyectos.</h1>

      <div className="flex flex-col md:flex-row md:justify-around lg:flex-row lg:justify-between">
        <div className="w-full md:w-1/2 md:mx-3 lg:w-1/2 lg:mx-2 lg:h-80 h-44 rounded-md mx-auto mt-2 bg-red-200 shadow-2xl">
          <a href="https://serv-io.surge.sh" target="_blank">
            <img className='w-full h-full rounded-md' src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%205.26.41%20p.m..png?alt=media&token=bcffe6c5-2aa3-4f5f-856b-9c4db6fbe89f" alt="servIO" />
          </a>
        </div>
        <div className="w-full md:w-1/2 md:mx-3 lg:w-1/2 lg:mx-2 lg:h-80 h-44 rounded-md mx-auto mt-2 bg-orange-200 shadow-2xl">
          <a href="https://catalogos-de-sissy.surge.sh" target="_blank">
            <img className='w-full h-full rounded-md' src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%205.26.14%20p.m..png?alt=media&token=41332a5c-441d-4904-a307-2513c63336c5" alt="catalogos_app" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-around lg:flex-row lg:justify-between">
        <div className="w-full sm:w-full text-center h-44 md:w-1/2 md:mx-3 lg:w-1/2 lg:h-80 lg:mx-2 rounded-md mx-auto mt-2 bg-blue-200 shadow-2xl">
          <a href="https://www.sercyn.com" target="_blank">
            <img className='w-full max-h-full rounded-md' src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%205.25.38%20p.m..png?alt=media&token=09e7a9af-88a1-48dc-8419-9de0bc84e5f9" alt="sercyn" />
          </a>
        </div>
        <div className="w-full sm:w-full h-44 md:w-1/2 md:mx-3 lg:w-1/2 lg:h-80 lg:mx-2 rounded-md mx-auto mt-2 bg-fuchsia-200 shadow-2xl">
          <a href="https://github.com/carolnavia/Mc-Loving-ForEver" target="_blank">
            <img className='w-full h-full rounded-md' src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%207.04.14%20p.m.%20(2).png?alt=media&token=d23317a1-3694-49c3-8f8b-16302c46577f" alt="McLovIT_App" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-around lg:flex-row lg:justify-between">
        <div className="w-full md:w-1/2 md:mx-3 lg:w-1/2 lg:mx-2 lg:h-80 h-44 rounded-md mx-auto mt-2 bg-red-200 shadow-2xl">
          <a href="https://pako-pokedex.surge.sh" target="_blank">
            <img className='w-full h-full rounded-md' src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%206.57.08%20p.m..png?alt=media&token=d8f07898-cc25-4edc-b300-0b095cfec178" alt="Pako_pokedex" />
          </a>
        </div>
      </div> */}

      <h1 className="underline text-center mt-3 flex-row text-2xl">
        Servicios
      </h1>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row mx-auto my-5">
        <div className="w-full h-48 flex flex-row justify-center items-center md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 bg-yellow-200 shadow-lg rounded-md mx-auto mt-3">
          <img
            className="mx-1"
            src="https://img.icons8.com/ios-filled/64/000000/javascript.png"
            alt="javascript"
          />
          <h4 className="text-2xl mx-1">Javascript</h4>
        </div>
        <div className="w-full h-48 flex flex-row justify-center items-center md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 bg-blue-700 shadow-lg rounded-md mx-auto mt-3">
          <img
            className="mx-1"
            src="https://img.icons8.com/ios-glyphs/64/ffffff/react.png"
            alt="react"
          />
          <h4 className="text-white text-2xl mx-1">React JS</h4>
        </div>
        <div className="w-full h-48 flex flex-row justify-center items-center md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 bg-purple-500 shadow-lg rounded-md mx-auto mt-3">
          <img
            className="mx-1"
            src="https://img.icons8.com/material-outlined/64/ffffff/redux.png"
            alt="redux"
          />
          <h4 className="text-white text-2xl mx-1">Redux</h4>
        </div>
        <div className="w-full h-48 flex flex-row justify-center items-center md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 bg-orange-400 shadow-lg  rounded-md mx-auto mt-3">
          <img
            className="mx-1"
            src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/ffffff/external-web-design-online-business-photo3ideastudio-lineal-photo3ideastudio.png"
            alt="web_design"
          />
          <h4 className="text-white text-2xl mx-1">Web Design</h4>
        </div>
      </div>

      <div className="w-11/12 flex flex-col md:flex-row lg:flex-row mx-auto my-5">
        <div className="w-full h-48 flex flex-row justify-center items-center md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 border-2 border-green-600 shadow-lg rounded-md mx-auto mt-3">
          <img
            className=" mx-1"
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/64/000000/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-color-tal-revivo.png"
            alt="node"
          />
          <div className="flex flex-col">
            <h4 className="text-green-600 text-2xl mx-1">Node JS &</h4>
            <h4 className="text-green-600 text-2xl mx-1">Express</h4>
          </div>
        </div>
        <div className="w-full h-48 flex flex-row justify-center items-center md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 bg-blue-400 shadow-lg  rounded-md mx-auto mt-3">
          <img
            className="mx-1"
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-database-cyber-security-kiranshastry-lineal-kiranshastry-3.png"
            alt="sequelize"
          />
          <h4 className="text-2xl mx-1">Sequelize</h4>
        </div>
        <div className="w-full h-48 flex flex-row justify-center items-center md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 bg-slate-900 shadow-lg rounded-md mx-auto mt-3">
          <img
            className=" mx-1"
            src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/ffffff/external-team-work-project-work-icongeek26-outline-icongeek26.png"
            alt="team_work"
          />
          <h4 className="text-white text-2xl mx-1">Team Work</h4>
        </div>
        <div className="w-full h-48 flex flex-row justify-center items-center md:w-1/2 md:mx-5 lg:mx-5 lg:w-1/2 bg-indigo-700 shadow-lg rounded-md mx-auto mt-3">
          <img
            className=" mx-1"
            src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/ffffff/external-learning-online-education-wanicon-lineal-wanicon.png"
            alt="learn"
          />
          <h4 className="text-white text-xl mx-1">Constant Learning</h4>
        </div>
      </div>
    </div>
  );
}

export default Services;
