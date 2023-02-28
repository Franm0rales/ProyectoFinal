import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import NavbarSuperior from "../Navbar/NavbarSuperior";

// import "./NavbarAdmin.css";
export default function NavbarAdmin() {
  const { logout, authorization } = useAuthContext();
  return (
    <>
      {authorization?.role == 0 ? (
        <>
          <NavbarSuperior />
          <header id="header" className="d-flex align-items-center sticky-top">
            <div className="container d-flex align-items-center">
              <div className="logo me-auto mt-3">
                <h1>
                  <Link to="/admin" className="">
                    horizons
                  </Link>
                </h1>

                <a href="index.html">
                  <img src="assets/img/logo.png" alt="" className="img-fluid" />
                </a>
              </div>

              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <Link
                      to="alumnosadmin"
                      className="nav-link scrollto active text-dark"
                    >
                      Candidatos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="empresasadmin"
                      className="nav-link scrollto active text-dark"
                    >
                      Empresas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin"
                      className="nav-link scrollto active text-dark"
                    >
                      Eventos
                    </Link>
                  </li>

                  <li>
                    <Link onClick={logout} className="dropdown-item" to="/">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </>
      ) : authorization?.role == 2 ? (
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
                    <Link to="nosotros" className="nav-link scrollto text-dark">
                      Nosotros
                    </Link>
                  </li>

                  <li>
                    <Link to="eventos" className="nav-link scrollto text-dark">
                      Eventos
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/empresas" className="text-decoration-none">
                      <span>Empresas</span>{" "}
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
                    <div
                      id="botones"
                      className=" dropdown text-end mt-1 fs-6 badge d-flex justify-content-center "
                    >
                      {" "}
                      {authorization.email}
                      <ul className="dropdown-menu text-small">
                        <li>
                          <Link className="dropdown-item" to="editar">
                            Perfil usuario
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="test"
                            aria-current="page"
                          >
                            Test aptitudes
                          </Link>
                        </li>
                        <li></li>
                        <li>
                          <Link
                            onClick={logout}
                            className="dropdown-item"
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
          </header>
        </>
      ) : (
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
                    <Link to="nosotros" className="nav-link scrollto text-dark">
                      Nosotros
                    </Link>
                  </li>

                  <li>
                    <Link to="eventos" className="nav-link scrollto text-dark">
                      Eventos
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/empresas" className="text-decoration-none">
                      <span>Empresas</span>{" "}
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
                    <div
                      id="botones"
                      className=" dropdown text-end mt-1 fs-6 badge d-flex justify-content-center "
                    >
                      {" "}
                      {authorization.email}
                      <ul className="dropdown-menu text-small">
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
                          <Link
                            onClick={logout}
                            className="dropdown-item"
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
          </header>
        </>
      )}
    </>
  );
}
