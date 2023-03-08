export default function EmpresasParaVista({ empresas }) {
  return (
    <div id="fondo" className="pt-5 pb-5">
      <div className="container col-10 ">
        {empresas.map((empresa) => (
          <div className="container meetup-card " key={empresa.id}>
            <div className=" ">
              <div className="card-body text-start d-flex">
                <div className="d-flex flex-column col-8">
                  <h5 className="card-title  ">{empresa.nombre}</h5>
                  <div className="gap-5">
                    <ul className="list-inline d-flex gap-4">
                      <li className="list-inline-item">
                        <i className="bi bi-buildings text-primary fs-5"></i>{" "}
                        <small>{empresa.ciudad}</small>{" "}
                      </li>
                      <li>
                        <i className="bi bi-geo-alt text-primary fs-5"></i>{" "}
                        <small>{empresa.direccion} </small>{" "}
                      </li>
                      <li>
                        <i className="bi bi-envelope text-primary fs-5"></i>{" "}
                        <small>{empresa.email}</small>{" "}
                      </li>
                      <li>
                        <i className="bi bi-telephone  text-primary fs-5"></i>{" "}
                        <small>{empresa.telefono}</small>{" "}
                      </li>
                    </ul>
                  </div>

                  <p className="card-text ">{empresa.descripcion}</p>
                  <div className="col-7">
                    <a
                      id="botones"
                      className=" mb-3"
                      href={`https://${empresa.urlEmpresa}/`}
                    >
                      {" "}
                      Enlace web
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-end align-items-center col-4">
                  <img
                    className="empresas-img"
                    src={`http://localhost:3000/${empresa.pathLogo}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
