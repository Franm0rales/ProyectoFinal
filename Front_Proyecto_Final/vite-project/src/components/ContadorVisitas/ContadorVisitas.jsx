import { useState } from "react";
import Swal from "sweetalert2";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
export default function ContadorVisitas({ plazas, idTarjeta }) {
  const { authorization } = useAuthContext();
  const [visitCount, setVisitCount] = useState(0);
  const [buttonState, setButtonState] = useState("Asistiré");
  const [isDisabled, setIsDisabled] = useState(false);
  const maxVisitors = plazas;
  let objetoFiltrado = 0;

  async function onSubmit() {
    try {
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

      const responseContador = await fetch(
        `http://localhost:3000/user/contador/eventosUsuario`
      );
      const json = await responseContador.json();
      setVisitCount(json);
      console.log(visitCount);
      objetoFiltrado = visitCount.filter(
        (visit) => visit.idTarjeta === idTarjeta
      );
      console.log(objetoFiltrado[0].contador, "idTarjeta");
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
    // setVisitCount(visitCount + 1);

    setButtonState("No asistiré");
    setIsDisabled(true);
  };
  const handleUnclick = () => {
    onSubmit();
    Swal.fire({
      title: "Te has eliminado del evento correctamente",
      icon: "success",
      confirmButtonColor: "#5295ce",
    });
    // setVisitCount(visitCount - 1);
    setButtonState("Asistiré");
    setIsDisabled(false);
  };

  return (
    <>
      <div>
        <p>
          <i className="bi bi-people-fill fs-2"></i> {objetoFiltrado.contador}/
          {maxVisitors}
        </p>

        <button
          id="botones"
          className="rounded mt-2 mb-5 col-3"
          onClick={onSubmit}
        >
          Asistir
        </button>

        <button
          id="botones"
          className="rounded mt-2 mb-5 col-3"
          onClick={onSubmit}
        >
          Borrar Curso
        </button>
      </div>
    </>
  );
}
