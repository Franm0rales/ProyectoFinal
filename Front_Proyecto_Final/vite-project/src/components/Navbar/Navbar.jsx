import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import NavbarSuperior from "./NavbarSuperior";

export default function Navbar() {
  const { logout, authorization } = useAuthContext();
  return (
    <>
      <NavbarSuperior />
      <header id="header" class="d-flex align-items-center sticky-top">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <a>FP.</a>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <Link to="/" className="a  nav-link px-2">
                  Inicio
                </Link>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  Empresas
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Contacto
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  About us
                </a>
              </li>
              <li>
                {!authorization?.email ? (
                  <Link to="login" className="a nav-link px-2">
                    Login
                  </Link>
                ) : (
                  <Link class="nav-link text-dark " aria-current="page" to="/">
                    <div
                      data-bs-toggle="dropdown"
                      className=" dropdown text-end mt-1  badge d-flex justify-content-center "
                    >
                      {" "}
                      {authorization.email.split("")[0].toUpperCase()}
                      <ul class="dropdown-menu text-small">
                        <li>
                          <a class="dropdown-item" href="#">
                            New project
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Settings
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Profile
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <Link onClick={logout} class="dropdown-item" to="/">
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Link>
                )}
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      {/* <header className="header">
        <div className="container h-100">
          <div className="row  justify-content-center justify-content-lg-between text-light p-4">
            <div className="col-lg-4 d-flex justify-content-center">
              <h1 className="nombre-sitio text">
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
                      <Link to="/" className="a  nav-link px-2">
                        Inicio
                      </Link>
                      <a href="#" className=" a nav-link px-2">
                        Nosotros
                      </a>
                      <a href="#" className="a nav-link px-2">
                        Quedadas
                      </a>
                      <a href="#" className="a nav-link pr-0 px-2">
                        Contacto
                      </a>
                      {!authorization?.email ? (
                        <Link to="login" className="a nav-link px-2">
                          Login
                        </Link>
                      ) : (
                        <Link
                          class="nav-link text-dark "
                          aria-current="page"
                          to="/"
                        >
                          <div
                            data-bs-toggle="dropdown"
                            className=" dropdown text-end mt-1 bg-dark rounded-pill badge d-flex justify-content-center "
                          >
                            {" "}
                            {authorization.email.split("")[0]}
                            <ul class="dropdown-menu text-small">
                              <li>
                                <a class="dropdown-item" href="#">
                                  New project
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Settings
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Profile
                                </a>
                              </li>
                              <li>
                                <hr class="dropdown-divider" />
                              </li>
                              <li>
                                <Link
                                  onClick={logout}
                                  class="dropdown-item"
                                  to="/"
                                >
                                  Log Out
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </Link>
                      )}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="contenido-hero align-self-end text-center text-md-right w-100">
              <h2 className="">Planifica tu futuro</h2>
              <p>
                Tu destino lo escribes tú mismo con cada decisión que tomas.
              </p>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
}
