import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
export default function ContadorVisitas({
  plazas,
  idTarjeta,
  contadorPersonas,
  setContadorPersonas,
}) {
  const { authorization } = useAuthContext();
  const [visitCount, setVisitCount] = useState(0);
  const [buttonState, setButtonState] = useState("Asistiré");
  const [isDisabled, setIsDisabled] = useState(false);
  const [contador, setContador] = useState(0);
  let objetoFiltrado = 0;
  const maxVisitors = plazas;

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
      const jsonContador = await responseContador.json();
      setVisitCount(jsonContador);

      console.log(visitCount);
      objetoFiltrado = visitCount.filter(
        (visit) => visit.idTarjeta === idTarjeta
      );
      setContadorPersonas(objetoFiltrado[0].contador);
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
          <i className="bi bi-people-fill fs-2"></i> {contadorPersonas}/
          {maxVisitors}
        </p>

        <button
          id="botones"
          className="rounded mt-2 mb-5 col-3"
          onClick={() => handleClick()}
        >
          Asistir
        </button>

        <button id="botones" className="rounded mt-2 mb-5 col-3" onClick="">
          Borrar Curso
        </button>
      </div>
    </>
  );
}
