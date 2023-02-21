import galeria1 from "../../assets/galeria1.jpg";
import { useState } from "react";
export default function CardIdEmpresa({ users }) {
  async function deleteUser() {
    let idUsuario = users.idUsuario;

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
      <div id="card" className="mb-5">
        <div class="left">
          <img src={galeria1} alt="" />
        </div>
        <div class="right">
          <div className=" d-flex">
            <div className="card-body">
              <h1 className="text-start pt-2 fs-3"> {users.nombre}</h1>
              <p className="text-start">
                <i class="bi bi-textarea-resize text-primary fs-5"></i> CIF:{" "}
                {users.CIF}
              </p>
              <p className="">
                {" "}
                <i class="bi bi-buildings text-primary fs-5"></i> Ciudad:{" "}
                {users.ciudad}
              </p>
              <p className="">
                <i className="bi bi-geo-alt text-primary fs-5" /> Direccion:{" "}
                {users.direccion}
              </p>
              <p className="">
                <i class="bi bi-envelope text-primary fs-5"></i> Email:{" "}
                {users.email}
              </p>

              <p className="card-text">
                <small className="text-start">
                  <i class="bi bi-telephone text-primary fs-5"></i>{" "}
                  {users.telefono}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container d-flex justify-content-center">
        <div className=" mb-3 mt-5 ml-4 " style={{ width: "90%" }}>
          <div className="row no-gutters ">
            <div className="col-md-4">
              <img className="img-fluid" src={galeria1} />
            </div>
            <div className="col-md-8 d-flex">
              <div className="card-body">
                <h5 className="card-title">{users.nombre}</h5>
                <p className="card-text">CIF: {users.CIF}</p>
                <p className="card-text">Ciudad: {users.ciudad}</p>
                <p className="card-text">Email: {users.email}</p>
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
      */}
    </>
  );
}
