import React from "react";

function ProjectCard() {
  return (
    <div className="w-11/12 mx-auto text-gray-600">
      <h1 className="underline text-center text-2xl">Portfolio</h1>
      <div>
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-blue-50">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%205.26.41%20p.m..png?alt=media&token=bcffe6c5-2aa3-4f5f-856b-9c4db6fbe89f"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                      >
                        Proyecto grupal ServIO
                      </a>
                    </h3>
                    <p className="text-base text-justify text-body-color leading-relaxed mb-7">
                      Una aplicaición hecha en el bootcamp de #soyHenry. Su fin,
                      brindar un servicio donde puedes cubrir algun tipo de
                      necesidad recurriendo a diferentes tipos de profesionales.
                      Al igual, puedes registrarte como profesional y poder así
                      generar un ingreso extra. La aplicación mantiene un
                      control de calidad en la relación cliente-profesional
                      brindando la meojor garantía posible en ambas partes.
                    </p>
                    <a
                      href="https://serv-io.surge.sh"
                      target="_blank"
                      className="
                        inline-block
                        py-2
                        px-7
                        border border-[#E5E7EB]
                        rounded-full
                        text-base text-body-color
                        font-medium
                        hover:border-primary hover:bg-primary hover:text-white
                        transition
                        "
                    >
                      Visitar Página
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%205.26.14%20p.m..png?alt=media&token=41332a5c-441d-4904-a307-2513c63336c5"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                      >
                        Catálogos de Sissy.
                      </a>
                    </h3>
                    <p className="text-base text-justify text-body-color leading-relaxed mb-7">
                      Esta aplicación te ayuda a tener un mejor alcance de
                      clientes, si te dedicas a vender productos por catálogo.
                      Se crea una propia API Rest con la información y enlcaes a
                      los diferentes catálogos, y así poder mostrarlos de manera
                      online a más personas. Además, tiene un formulario para el
                      contacto con el vendedor para cotizaciones.
                    </p>
                    <a
                      href="https://catalogos-de-sissy.surge.sh"
                      target="_blank"
                      className="
                        inline-block
                        py-2
                        px-7
                        border border-[#E5E7EB]
                        rounded-full
                        text-base text-body-color
                        font-medium
                        hover:border-primary hover:bg-primary hover:text-white
                        transition
                        "
                    >
                      Visitar Página
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%205.25.38%20p.m..png?alt=media&token=09e7a9af-88a1-48dc-8419-9de0bc84e5f9"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                      >
                        Náutica SerCyn
                      </a>
                    </h3>
                    <p className="text-base text-justify text-body-color leading-relaxed mb-7">
                      Es una página web, orientada a servicios turísticos, de
                      acuerdo a un negocio local donde se da servicios náuticos
                      a diferentes destinos. También, tiene un método de
                      contacto y verificación del clima, ya que al ser un
                      servicio náutico, depende mucho del estado metereológico.
                    </p>
                    <a
                      href="https://www.sercyn.com"
                      target="_blank"
                      className="
                        inline-block
                        py-2
                        px-7
                        border border-[#E5E7EB]
                        rounded-full
                        text-base text-body-color
                        font-medium
                        hover:border-primary hover:bg-primary hover:text-white
                        transition
                        "
                    >
                      Visitar Página
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%207.04.14%20p.m.%20(2).png?alt=media&token=d23317a1-3694-49c3-8f8b-16302c46577f"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                      >
                        McLovIT
                      </a>
                    </h3>
                    <p className="text-base text-justify text-body-color leading-relaxed mb-7">
                      Esta es una app hecha con React Native para los diferentes
                      dispositiovos móviles junto con el frameworf de Expo.io.
                      Desarrollada por un equipo formado en el bootcamp de
                      #soyHenry. Se trata de una aplicación de citas, pero esta
                      vez, para personas que estan en el rubro de IT. Donde se
                      aplican terminologías a fines de este rubro, por ejemplo
                      hacer un challenge (contestar un formulario) para poder
                      hacer match con la persona que te gusta. Tiene una
                      suscripción de pago, en la que tienes algunos beneficios
                      extras.
                    </p>
                    <a
                      href="https://github.com/carolnavia/Mc-Loving-ForEver"
                      target="_blank"
                      className="
                        inline-block
                        py-2
                        px-7
                        border border-[#E5E7EB]
                        rounded-full
                        text-base text-body-color
                        font-medium
                        hover:border-primary hover:bg-primary hover:text-white
                        transition
                        "
                    >
                      Ir al Repositorio
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%206.57.08%20p.m..png?alt=media&token=d8f07898-cc25-4edc-b300-0b095cfec178"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                      >
                        Henry Pokemon App
                      </a>
                    </h3>
                    <p className="text-base text-justify text-body-color leading-relaxed mb-7">
                      Esta es una SPA (Single Page Aplication) hecha
                      individualmente, para el bootcamp de #soyHenry donde se
                      pone a prueba lo aprendido a lo largo del mismo, acerca de
                      las herramientas que se utilizaron en la elaboración de la
                      App. Donde consume una API Rest de pokemon, para mostrar,
                      filtrar y/o buscar los pokemones más te gusten. También,
                      puedes crear el pokemon que más te agrade y mostrarlo en
                      el home de la App.
                    </p>
                    <a
                      href="https://pako-pokedex.surge.sh"
                      target="_blank"
                      className="
                        inline-block
                        py-2
                        px-7
                        border border-[#E5E7EB]
                        rounded-full
                        text-base text-body-color
                        font-medium
                        hover:border-primary hover:bg-primary hover:text-white
                        transition
                        "
                    >
                      Visitar Página
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectCard;
