import { useState } from "react";
import { useAuthContext } from "../../../../context/AuthContext/AuthContext";

export default function Campo({ etiqueta, campo }) {
  const [inputName, setInputName] = useState(false);
  const { authorization } = useAuthContext();

  const [editarUsuario, setEditarUsuario] = useState("");

  function handleInput(e) {
    setEditarUsuario(e.target.value);
  }

  async function onSubmit() {
    fetch(`http://localhost:3000/user/updateUser/${authorization.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editarUsuario),
    }).then((response) => {
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        setInputName(!inputName);
        alert(`usuario ${authorization.id} modificado correctamente`);
      } else if (response.status === 409) {
        alert("usuario ya modificado");
      }
    });
  }
  return (
    <div className="media">
      <label>{etiqueta}</label>
      <button className="btn " onClick={() => setInputName(!inputName)}>
        <i className="bi bi-pencil text-primary"></i>
      </button>

      {inputName ? (
        <button className="btn" onClick={() => onSubmit()}>
          {" "}
          <i class="bi bi-check-circle text-success"></i>
        </button>
      ) : (
        ""
      )}
      <div className="d-flex align-text-center gap-3">
        {inputName ? (
          <input
            name="nombre"
            onChange={handleInput}
            className="form-control"
            placeholder={`${campo}`}
          ></input>
        ) : (
          <p>{campo}</p>
        )}
      </div>
    </div>
  );
}
