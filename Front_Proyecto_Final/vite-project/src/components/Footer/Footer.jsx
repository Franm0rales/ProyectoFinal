import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container h-100">
        <div className="row h-100 juntify-content-center justify-content-lg-between align-items-end pb-4 text-light">
          <div className="col-lg-4 d-flex justify-content-center">
            <h1 className="nombre-sitio">
              Future<span>Present</span>
            </h1>
          </div>
          <div className="col-lg-7 d-flex justify-content-center justify-content-lg-end">
            <div className="contenido text-center">
              <nav className="navegacion d-flex flex-column flex-lg-row text-center">
                <a href="#" className="nav-link px-3" role="button">
                  <i className="bi bi-facebook fa-lg"></i>
                </a>

                <a href="#" className="nav-link px-3" role="button">
                  <i className="bi bi-twitter fa-lg"></i>
                </a>

                <a href="#" className="nav-link px-3" role="button">
                  <i className="bi bi-google"></i>
                </a>

                <a href="#" className="nav-link px-3" role="button">
                  <i className="bi bi-instagram"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
