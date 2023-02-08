import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import NavbarSuperior from "./NavbarSuperior";

export default function Navbar() {
  const { logout, authorization } = useAuthContext();
  return (
    <>
      <NavbarSuperior />
      <header id="header" class="d-flex align-items-center sticky-top">
        <div class="container d-flex align-items-center">
          <div class="logo me-auto mt-3">
            <h1>
              <a className="">horizons</a>
            </h1>

            <a href="index.html">
              <img src="assets/img/logo.png" alt="" class="img-fluid" />
            </a>
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <Link to="/" className="nav-link scrollto active text-dark">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" class="nav-link scrollto text-dark">
                  Nosotros
                </a>
              </li>

              <li>
                <a class="nav-link scrollto text-dark" href="#portfolio">
                  Eventos
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Empresas</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
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
                <a class="nav-link scrollto text-dark" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
            {!authorization?.email ? (
              <Link to="login" className="nav-link scrollto text-dark">
                Login
              </Link>
            ) : (
              <Link
                class="nav-link scrollto text-dark"
                aria-current="page"
                to="/"
              >
                <div className=" dropdown text-end mt-1 text-info fs-6 badge d-flex justify-content-center ">
                  {" "}
                  {authorization.email}
                  <ul class="dropdown-menu text-small">
                    <li>
                      <a class="dropdown-item" href="#">
                        New project
                      </a>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="editar">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li></li>
                    <li>
                      <Link onClick={logout} class="dropdown-item" to="/">
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
