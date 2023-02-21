import { Link } from "react-router-dom";
import galeria1 from "../../assets/galeria1.jpg";

export default function CardEmpresa(user) {
  return (
    <div className="container-fluid">
      <div
        className="card mb-3 mt-4 ml-4 d-flex  flex-wrap d-grip gap-5"
        style={{ width: "90%" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4 ">
            <img className="clase-prioridad" src={galeria1} />
          </div>
          <div className="col-md-8 d-flex">
            <div className="card-body">
              <h5 className="card-title">{user.nombre}</h5>
              <p className="card-text">{user.ciudad}</p>
              <p className="card-text">{user.direccion}</p>
              <p className="card-text">{user.descripcion}</p>
              <p className="card-text">
                <small className="text-muted">{user.telefono}</small>
              </p>
            </div>
          </div>
          <Link
            to={`/admin/settingsempresa/${user.idUsuario}`}
            className="btn btn-primary"
          >
            Editar tarjeta de visita
          </Link>
        </div>
      </div>
    </div>
  );
}
