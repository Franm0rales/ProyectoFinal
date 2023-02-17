import { useState } from "react";
import Swal from "sweetalert2";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
export default function ContadorVisitas({ evento, idTarjeta }) {
  const { authorization } = useAuthContext();
  const [visitCount, setVisitCount] = useState(0);
  const [buttonState, setButtonState] = useState("Asistiré");
  const [isDisabled, setIsDisabled] = useState(false);
  const maxVisitors = evento.plazas;

  async function onSubmit() {
    try {
      await fetch(`http://localhost:3000/user/unirseEvento`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          idUsuario: authorization.id,
          idEvento: evento.id,
        }),
      });

      // const responseContador = await fetch(
      //   `http://localhost:3000/user/getAllTarjetas/tarjetas`
      // );
      // const json = await responseContador.json();
      // setVisitCount(json);
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
    setVisitCount(visitCount + 1);

    setButtonState("No asistiré");
    setIsDisabled(true);
  };
  const handleUnclick = () => {
    Swal.fire({
      title: "Te has eliminado del evento correctamente",
      icon: "success",
      confirmButtonColor: "#5295ce",
    });
    setVisitCount(visitCount - 1);
    setButtonState("Asistiré");
    setIsDisabled(false);
  };

  return (
    <>
      <div>
        <p>
          <i className="bi bi-people-fill fs-2"></i> {visitCount}/{maxVisitors}
        </p>
        {idTarjeta.idTarjeta !== evento.id ? (
          <button
            id="botones"
            className="rounded mt-2 mb-5"
            onClick={handleUnclick}
          >
            Asistir
          </button>
        ) : (
          <button
            id="botones"
            className="rounded mt-2 mb-5"
            onClick={handleClick}
          >
            Borrar Curso
          </button>
        )}
      </div>
    </>
  );
}
