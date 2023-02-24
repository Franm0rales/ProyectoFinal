export default function EmpresasParaVista({ empresas }) {
  return (
    <div className="container mt-5">
      {empresas.map((empresa, index) => (
        <div
          className={`row align-items-center event-block no-gutters margin-40px-bottom ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          <div className="col-lg-5 col-md-6 col-sm-12 order-md-2">
            <div className="position-relative">
              <img
                className="img-fluid object-fit-cover h-100"
                src={`http://localhost:3000/${empresa.pathLogo}`}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 order-md-1">
            <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
              <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                <a href="#" className="text-theme-color">
                  {empresa.nombre}
                </a>
              </h5>
              <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
                <li>
                  <h5>{empresa.ciudad}</h5>
                </li>
                <li>
                  <small>{empresa.direccion}</small>
                </li>
              </ul>
              <p>{empresa.descripcion}</p>
              <div className="d-flex justify-content-end">
                <a
                  id="botones"
                  className="small margin-10px-top md-no-margin-top rounded "
                  href={empresa.web}
                >
                  Read More{" "}
                  <i className="fas fa-long-arrow-alt-right margin-10px-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
