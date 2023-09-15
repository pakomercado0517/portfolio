import React from "react";

function AboutMe() {
  return (
    <>
      <div className="flex flex-col w-11/12 h-auto lg:flex-row py-10 mx-auto mt-5 bg-blue-50 text-gray-600">
        <div className="w-full lg:w-1/2 lg:my-auto mx-auto justify-center">
          {/* <img className="w-28 h-28 md:w-36 md:h-36  lg:w-44 lg:h-44  mx-auto" src="https://img.icons8.com/stickers/100/000000/user.png"/> */}
          <img
            className="w-44 h-44 lg:w-72 lg:h-72 rounded-full mx-auto"
            src="https://avatars.githubusercontent.com/u/22185306?v=4"
            alt="Profile_photo"
          />
        </div>
        <div className="lg:w-1/2 text-justify justify-center">
          <br />
          <h1 className="text-center text-2xl py-1 px-3 mt-4">Acerca de mi.</h1>
          <p className="mt-4 px-5 lg:mr-10 lg:w-full">
            Alrededor del año 2016, inicié por mi cuenta, como autodidacta, a
            conocer el mundo de la programación web. Al igual, me llamaron la
            atención las bases de los lenguajes como C, C++ y obviamente
            Javascript. <br />
            Tuve que dejarlo de lado, ya que por cuestiones de fuerza mayor (mi
            hija menor tuvo una lesión que le provocó parálisis cerebral) y me
            enfoqué 100% en darle la atención necesaria. Al transcurso de un par
            de años quise retomar el aprender a desarrollar Apps e inicie
            creando una página web para el negocio con el que tengo sociedad con
            un primo acerca de servicios turísticos llamado "Náutica SerCyn"
            conociendo y resolviendo los desafíos que presenta entre desarrollar
            y llevar a producción una Web (www.sercyn.com). Hasta hace poco que
            encontré la oportunidad de entrar a Henry y cursar la carrera de
            Full Stack Developer. <br />
            Actualmente soy desarrollador Full Stack, haciendo travesía en el
            Bootcamp de Henry, aplicando las bases que se me han otorgado
            haciendo uso de librerías y tecnologías como React.Js, Redux,
            Node.Js, Express.js, PostgreSQL y Sequelize, para la creación de
            Aplicaciones web en diferentes ámbitos (Individual y grupalmente).{" "}
            <br />
            Yo realmente soy consiente que en la red, hay miles de perfiles que
            sorprenden con la preparación que pueden llegar a tener, pero en mi,
            sin duda, van a encontrar a una persona motivada, con ganas de sobra
            de seguir avanzando, aprendiendo, enseñando, resolviendo problemas y
            sobre todo, el gusto de trabajar en equipo para cumplir metas.
          </p>
        </div>
      </div>
      <div className="w-11/12 my-5 mx-auto flex justify-center">
        <button className="w-36 h-10 flex flex-row justify-center items-center bg-blue-500 mx-3 text-white rounded-lg shadow-xl cursor-pointer">
          <img
            src="https://img.icons8.com/material-outlined/24/ffffff/whatsapp--v3.png"
            alt="contact me"
          />
          <a
            className="ml-3"
            href="https://api.whatsapp.com/send?phone=+527831046697"
          >
            Contáctame
          </a>
        </button>
        <button className="w-44 h-10 flex flex-row justify-center items-center border-2 border-blue-500 mx-3 text-blue-500 rounded-lg shadow-xl cursor-pointer">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/ios/50/3b83f6/set-as-resume.png"
            alt="resume"
          />
          <a
            className="ml-2"
            href="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/documents%2FCV-2022-NP.pdf?alt=media&token=4cb6f02a-6b0e-4a55-a3c0-c2e7591a791e"
            target="_blank"
            rel="noreferrer"
          >
            CV o Resume
          </a>
        </button>
      </div>
    </>
  );
}

export default AboutMe;
