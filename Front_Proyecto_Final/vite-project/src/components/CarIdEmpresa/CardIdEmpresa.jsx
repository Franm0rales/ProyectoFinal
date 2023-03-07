import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CardIdEmpresa({ users }) {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  async function deleteUser() {
    let idUsuario = users.idUsuario;

    await fetch(`http://localhost:3000/user/deleteEmpresa/${idUsuario}`, {
      method: "PATCH",
    });
    logout();
    navigate("/");
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
      <div id="card" className="mb-5 d-flex gap-5">
        <div class="left">
          <img
            src={`http://localhost:3000/${users.pathLogo}`}
            style={{ maxHeight: "300px", maxWidth: "420px" }}
            alt=""
            className="p-3"
          />
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
      <div className="d-flex justify-content-end">
        <button
          onClick={() => toggleVisible()}
          type="button"
          className="btn btn-danger btn-sm  "
        >
          <i className="bi bi-trash3 text-white fs-5 "></i>
        </button>
      </div>
      <div className="d-flex justify-content-end">
        <div
          className={`alert alert-danger mt-5 col-4  ${visible}`}
          role="alert"
        >
          Eliminar usuario ¿Estas seguro?
          <button
            id="botones"
            className="btn  mx-1 text-white rounded"
            onClick={() => deleteUser()}
          >
            Si
          </button>
          <button
            id="botones"
            className="btn mx-1 text-white rounded"
            onClick={() => toggleVisible()}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}
