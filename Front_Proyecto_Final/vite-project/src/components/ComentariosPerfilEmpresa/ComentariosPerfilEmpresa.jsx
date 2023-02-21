import { useState } from "react";
import ComentariosPerfil from "../ComentariosPerfil/ComentariosPerfil";

export default function ComentariosPerfilEmpresa({
  evento,
  setIdTarjeta,
  comentarios,
}) {
  const [display, setDisplay] = useState("d-none");
  const [displayState, setDisplayState] = useState(true);
  function toggleComments(state) {
    if ((state = "")) {
      setDisplay("d-none");
      setDisplayState(!displayState);
    } else {
      setDisplay("");
      setDisplayState(!displayState);
      console.log(comentarios, evento, "holaa paco");
    }
  }
  return (
    <>
    
      <div class="container pt-5 eventoscard position-relative pb-5 ">
        <div class="row row-striped">
          <div class="col-10">
            <h3 class="text-uppercase">
              <strong>{evento.title}</strong>
            </h3>
            <ul class="list-inline d-flex">
              <li class="list-inline-item">
                <i class="bi bi-people-fill text-primary fs-4 px-1"></i>{" "}
                {comentarios.alumnos} / {evento.plazas}{" "}
              </li>{" "}
              <li>
                {" "}
                <i class="bi bi-calendar3 text-primary fs-4 px-1"></i>{" "}
                {evento.start.split("T")[0]}
                {"        "}
              </li>{" "}
              <li class="list-inline-item">
                {"   "}
                <i class="bi bi-clock text-primary fs-4 px-1"></i>{" "}
                {evento.horaInicio}{" "}
              </li>
            </ul>
          </div>
        </div>
        {displayState ? (
          <button
            onClick={() => (toggleComments(display), setIdTarjeta(evento.id))}
            className="border-0 rounded bg-transparent text-primary d-flex position-absolute bottom-50 end-0 "
          >
            <i class="bi bi-chat-square-text-fill fs-1  "></i>
          </button>
        ) : (
          <button
            onClick={() => (toggleComments(display), setIdTarjeta(0))}
            className="border-0 rounded bg-transparent text-primary  d-flex position-absolute bottom-50 end-0 "
          >
            <i class="bi bi-x-circle fs-1  "></i>
          </button>
        )}
      </div>

      <section class={`section-primary t-bordered ${display}`}>
        <div class="row testimonial-three testimonial-three--col-three ">
          {comentarios.length > 0 && evento.id === comentarios[0].idTarjeta ? (
            <ComentariosPerfil comentarios={comentarios} />
          ) : (
            <p></p>
          )}
        </div>
      </section>
    </>
  );
}
