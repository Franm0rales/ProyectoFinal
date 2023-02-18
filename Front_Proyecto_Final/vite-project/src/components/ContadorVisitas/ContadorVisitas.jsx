import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
export default function ContadorVisitas({
  plazas,
  idTarjeta,
  contadorPersonas,
  setUnirse,
  unirse,
  data,
}) {
  const { authorization } = useAuthContext();
  const [buttonState, setButtonState] = useState("Asistiré");
  const [isDisabled, setIsDisabled] = useState(false);
  const [contador, setContador] = useState(true);
  const maxVisitors = plazas;

  async function onSubmit() {
    try {
      setUnirse(!unirse);
      await fetch(`http://localhost:3000/user/unirseEvento`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          idUsuario: authorization.id,
          idEvento: idTarjeta,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  }

  const handleClick = () => {
    onSubmit();

    Swal.fire({
      title: "Registrado al Evento",
      icon: "success",
      confirmButtonColor: "#5295ce",
    });
    setContador(!contador);
    setButtonState("No asistiré");
    setIsDisabled(true);
  };
  const handleUnclick = () => {
    Swal.fire({
      title: "Te has eliminado del evento correctamente",
      icon: "success",
      confirmButtonColor: "#5295ce",
    });

    setButtonState("Asistiré");
    setIsDisabled(false);
  };

  return (
    <>
      <div>
        <p>
          <i className="bi bi-people-fill fs-2"></i> {contadorPersonas || 0}/
          {maxVisitors}
        </p>
        {data != idTarjeta ? (
          <button
            id="botones"
            className="rounded mt-2 mb-5 col-3"
            onClick={() => handleClick()}
          >
            Asistir
          </button>
        ) : (
          <button id="botones" className="rounded mt-2 mb-5 col-3" onClick="">
            Borrar Curso
          </button>
        )}
      </div>
    </>
  );
}
