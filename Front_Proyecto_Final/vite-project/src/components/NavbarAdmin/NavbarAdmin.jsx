import { Link } from "react-router-dom";
import CardAdmin from "../CardAdmin/CardAdmin";
// import "./NavbarAdmin.css";
export default function NavbarAdmin() {
  return (
    <div className="">
      <div className="row flex-nowrap">
        <div className="px-0 bg-dark">
          <div className="flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link to="/admin" className="nav-link align-middle px-0">
                  <i className="bi bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li>
                <Link to="alumnosadmin" className="nav-link px-0 align-middle">
                  <i className="bi bi-file-person"></i>
                  <span className="ms-1 d-none d-sm-inline">Alumnos</span>
                </Link>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                ></ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="bi bi-building"></i>
                  <span className="ms-1 d-none d-sm-inline">Empresas</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle "
                >
                  <i className="bi bi-card-checklist"></i>
                  <span className="ms-1 d-none d-sm-inline">
                    Tarjetas visita
                  </span>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu2"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item</span> 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item</span> 2
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#submenu3"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i class="bi bi-images"></i>
                  <span className="ms-1 d-none d-sm-inline">Imagenes</span>{" "}
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu3"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 4
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i class="bi bi-person-dash"></i>
                  <span className="ms-1 d-none d-sm-inline">Log out</span>{" "}
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
