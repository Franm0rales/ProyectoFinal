export default function EmpresasParaVista({ empresas }) {
  return (
    <div id="fondo" className="pt-5 pb-5">
      <div className="container col-10 ">
        {empresas.map((empresa, index) => (
          <div className="container meetup-card " key={empresa.id}>
            <div className=" ">
              <div className="card-body text-start d-flex">
                <div className="d-flex flex-column">
                  <h5 className="card-title  ">{empresa.nombre}</h5>
                  <p className="card-text  ">
                    <i class="bi bi-buildings text-primary fs-5"></i>{" "}
                    <small>{empresa.ciudad} </small>
                    <i className="bi bi-geo-alt text-primary fs-5"></i>{" "}
                    <small>{empresa.direccion} </small>
                    <i class="bi bi-envelope text-primary fs-5"></i>{" "}
                    <small>{empresa.email}</small>
                    <i class="bi bi-telephone-fill  text-primary fs-4"></i>{" "}
                    <small>{empresa.telefono}</small>
                  </p>

                  <p className="card-text ">{empresa.descripcion}</p>
                  <div className="col-7">
                    <a
                      id="botones"
                      className="rounded mb-3"
                      href="https://www.pwc.es/"
                    >
                      {" "}
                      Enlace web
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <img
                    className="empresas-img "
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
