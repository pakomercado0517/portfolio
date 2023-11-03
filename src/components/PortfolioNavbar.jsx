import { Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";
import { Link } from "react-router-dom";

export default function PortfolioNavbar() {
  return (
    <section>
      <div className="">
        <Navbar fluid rounded className="bg-transparent dark:bg-transparent">
          <Navbar.Brand></Navbar.Brand>
          <div className="flex md:order-2 lg:flex-row">
            <Flowbite>
              <DarkThemeToggle className="text-white bg-martinique-950 ml-4" />
            </Flowbite>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="lg:hidden">
            <Navbar.Link>
              <Link to="/portfolio/about">Perfil</Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to="/portfolio/projects">Proyectos</Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to="/portfolio/contact">Contacto</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </section>
  );
}
