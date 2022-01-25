import React from 'react';

function AboutMe() {
  return (
    <div className="flex flex-col w-11/12 h-auto py-10 mx-auto mt-5 bg-blue-50 text-gray-600">
      <div className="text-justify justify-center">
          <div className="w-full mx-auto justify-center">
            <img className="w-28 h-28 mx-auto" src="https://img.icons8.com/stickers/100/000000/user.png"/>
          </div>
          <br />
          <hr/>
          <h1 className="text-center text-2xl py-1 px-3 mt-4">Acerca de mi.</h1>
          <p className="mt-4 px-3">Alrededor de hace 5 años, inicié por mi cuenta, como autodidacta, a conocer el mundo de la programación web. Al igual, me llamaron la atención las bases de los lenguajes como C, C++ y obviamente Javascript. <br/>

Tuve que dejarlo de lado, ya que por cuestiones de fuerza mayor (mi hija menor tuvo una lesión que le provocó parálisis cerebral) y me enfoqué 100% en darle la atención necesaria.
Al transcurso de un par de años quise retomar el aprender a desarrollar Apps e inicie creando una página web para el negocio con el que tengo sociedad con un primo acerca de servicios turísticos llamado "Náutica SerCyn" conociendo y resolviendo los desafíos que presenta entre desarrollar y llevar a producción una Web (www.sercyn.com). 
Hasta hace poco que encontré la oportunidad de entrar a Henry y cursar la carrera de Full Stack Developer. <br />
 
Actualmente soy desarrollador Full Stack, haciendo travesía en el Bootcamp de Henry, aplicando las bases que se me han otorgado haciendo uso de librerías y tecnologías como React.Js, Redux, Node.Js, Express.js, PostgreSQL y Sequelize, para la creación de Aplicaciones web en diferentes ámbitos (Individual y grupalmente). <br />

Yo realmente soy consiente que en la red, hay miles de perfiles que sorprenden con la preparación que pueden llegar a tener, pero en mi, sin duda, van a encontrar a una persona motivada, con ganas de sobra de seguir avanzando, aprendiendo, enseñando, resolviendo problemas y sobre todo, el gusto de trabajar en equipo para cumplir metas.</p>
        </div>
        <div className="my-5 mx-auto">
          <button className="w-36 h-10 bg-blue-500 mx-3 text-white rounded-lg shadow-xl">
            <a href="https://api.whatsapp.com/send?phone=+527831046697">Contáctame</a>
          </button>
          <button className="w-36 h-10 border-2 border-blue-500 mx-3 text-blue-500 rounded-lg shadow-xl">
            <a href="CV-2022-NP.pdf" target="_blank">Ver mi CV o Resume</a>
          </button>
        </div>
    </div>
  );
}

export default AboutMe;
