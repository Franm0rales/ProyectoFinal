import galeria1 from "../../assets/galeria1.jpg";
import { useState } from "react";
export default function CardIdEmpresa({ users }) {
  async function deleteUser() {
    let idUsuario = users.idUsuario;
    console.log(idUsuario);
    await fetch(`http://localhost:3000/user/deleteEmpresa/${idUsuario}`, {
      method: "PATCH",
    });
  }
  const [visible, setVisible] = useState("d-none");
  function toggleVisible() {
    if (visible === "d-none") {
      setVisible("");
    } else {
      setVisible("d-none");
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div
          className="card mb-3 mt-4 ml-4 d-flex  flex-wrap d-grip gap-5"
          style={{ width: "90%" }}
        >
          <div className="row no-gutters ">
            <div className="col-md-4">
              <img className="img-fluid" src={galeria1} />
            </div>
            <div className="col-md-8 d-flex">
              <div className="card-body">
                <h5 className="card-title">{users.nombre}</h5>
                <p className="card-text">{users.CIF}</p>
                <p className="card-text">{users.ciudad}</p>
                <p className="card-text">{users.email}</p>
                <p className="card-text">{users.descripcion}</p>

                <p className="card-text">
                  <small className="text-muted">{users.telefono}</small>
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  onClick={toggleVisible}
                  type="button"
                  className="btn btn-danger btn-sm  "
                >
                  <i className="bi bi-trash3 text-white fs-5 "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`alert alert-danger ${visible}`} role="alert">
        Eliminar usuario ¿Estas seguro?
        <button
          className="btn btn-outline-secondary mx-1 text-white rounded-2"
          onClick={deleteUser}
        >
          Si
        </button>
        <button
          className="btn btn-outline-secondary mx-1 text-white rounded-2"
          onClick={toggleVisible}
        >
          No
        </button>
      </div>
    </>
  );
}
