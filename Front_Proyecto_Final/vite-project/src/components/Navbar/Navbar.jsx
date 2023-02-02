import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container h-100">
        <div className="row h-100 justify-content-center justify-content-lg-between text-light p-4">
          <div className="col-lg-4 d-flex justify-content-center">
            <h1 className="nombre-sitio">
              Future<span>Present</span>
            </h1>
          </div>
          <div className="col-lg-7 d-flex justify-content-center justify-content-lg-end">
            <div className="contenido text-center">
              <div className="navbar-expand-lg navbar-light bg-transparent">
                <button
                  className="navbar-toggler bg-light"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navegacion"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navegacion">
                  <nav className="navegacion d-flex flex-column flex-lg-row text-center ">
                    <Link to="/" className="nav-link px-2">
                      Inicio
                    </Link>
                    <a href="#" className="nav-link px-2">
                      Nosotros
                    </a>
                    <a href="#" className="nav-link px-2">
                      Quedadas
                    </a>
                    <Link to="login" className="nav-link px-2">
                      Login
                    </Link>
                    <a href="#" className="nav-link pr-0 px-2">
                      Contacto
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="contenido-hero align-self-end text-center text-md-right w-100">
            <h1>Planifica tu futuro</h1>
            <p>Tu destino lo escribes tú mismo con cada decisión que tomas.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
