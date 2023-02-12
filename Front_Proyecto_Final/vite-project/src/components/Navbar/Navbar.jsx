import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import NavbarSuperior from "./NavbarSuperior";

export default function Navbar() {
  const { logout, authorization } = useAuthContext();
  return (
    <>
    {authorization?.role==2 ?(
      <>
      <NavbarSuperior />
      <header id="header" className="d-flex align-items-center sticky-top">
        <div className="container d-flex align-items-center">
          <div className="logo me-auto mt-3">
            <h1>
              <a className="">horizons</a>
            </h1>

            <a href="index.html">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/" className="nav-link scrollto active text-dark">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link scrollto text-dark">
                  Nosotros
                </a>
              </li>

              <li>
                <Link
                  to="buscarempresa"
                  className="nav-link scrollto text-dark"
                >
                  Eventos
                </Link>
              </li>
              <li className="dropdown">
                <Link to="/empresas" className="text-decoration-none">
                  <span>Empresas</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="contacto"
                  className="nav-link scrollto text-dark"
                  href="#contact"
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            {!authorization?.email ? (
              <Link to="login" className="nav-link scrollto text-dark">
                Login
              </Link>
            ) : (
              <Link
                className="nav-link scrollto text-dark"
                aria-current="page"
                to="/"
              >
                <div className=" dropdown text-end mt-1 text-info fs-6 badge d-flex justify-content-center ">
                  {" "}
                  {authorization.email}
                  <ul className="dropdown-menu text-small">
                    <li>
                      <a className="dropdown-item" href="#">
                        New project
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="editar">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="test">
                        Test vocacional
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link onClick={logout} className="dropdown-item" to="/">
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </Link>
            )}
          </nav>
        </div>
      </header>
      </>

    ): 
    <>
    <NavbarSuperior />
    <header id="header" className="d-flex align-items-center sticky-top">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto mt-3">
          <h1>
            <a className="">horizons</a>
          </h1>

          <a href="index.html">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto active text-dark">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link scrollto text-dark">
                Nosotros
              </a>
            </li>

            <li>
              <Link
                to="eventos"
                className="nav-link scrollto text-dark"
              >
                Eventos
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/empresas" className="text-decoration-none">
                <span>Empresas</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="contacto"
                className="nav-link scrollto text-dark"
                href="#contact"
              >
                Contacto
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
          {!authorization?.email ? (
            <Link to="login" className="nav-link scrollto text-dark">
              Login
            </Link>
          ) : (
            <Link
              className="nav-link scrollto text-dark"
              aria-current="page"
              to="/"
            >
              <div className=" dropdown text-end mt-1 text-info fs-6 badge d-flex justify-content-center ">
                {" "}
                {authorization.email}
                <ul className="dropdown-menu text-small">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="editarempresa">
                      Perfil Empresa
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="agendaeventos">
                      Agenda Eventos
                    </Link>
                  </li>
                  <li></li>
                  <li>
                    <Link onClick={logout} className="dropdown-item" to="/">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </Link>
          )}
        </nav>
      </div>
    </header>
    </>
    }
      
      <header className="header">
        <div className="container h-100">
          <div className="row  justify-content-center justify-content-lg-between text-light p-4">
            {/* <div className="contenido-hero align-self-end text-center text-md-right w-100 ">
            <h1 className="position-relative bottom-100" >Planifica tu futuro</h1>
            <h3>Tu destino lo escribes tú mismo con cada decisión que tomas.</h3>
          </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
