import { useState } from "react";
import { useAuthContext } from "../../../../context/AuthContext/AuthContext";

export default function Campo({ etiqueta, campo }) {
  const [inputName, setInputName] = useState(false);
  const { authorization } = useAuthContext();
  async function onSubmit(values, actions) {
    fetch(`http://localhost:3000/user/updateUser/${authorization.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      console.log(values);
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        alert(`usuario ${authorization.id} modificado correctamente`);
      } else if (response.status === 409) {
        alert("usuario ya modificado");
      }
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  }
  return (
    <div className="media">
      <label>{etiqueta}</label>
      <button className="btn " onClick={() => setInputName(!inputName)}>
        <i className="bi bi-pencil text-primary"></i>
      </button>
      <button className="btn" onClick={() => onSubmit}></button>

      <div className="d-flex align-text-center gap-3">
        {inputName ? (
          <input className="form-control" placeholder={`${campo}`}></input>
        ) : (
          <p>{campo}</p>
        )}
      </div>
    </div>
  );
}
