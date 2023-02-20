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
    }
  }
  return (
    <>
      <div class="container pt-5 eventoscard position-relative">
        <div class="row row-striped">
          <div class="col-10">
            <h3 class="text-uppercase">
              <strong>{evento.title}</strong>
            </h3>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="bi bi-envelope text-primary fs-4"></i>{" "}
                {comentarios.email}
              </li>
              <li class="list-inline-item">
                <i class="bi bi-telephone-fill  text-primary fs-4"></i>{" "}
                {evento.telefono}
              </li>

              <li class="list-inline-item">
                <i class="bi bi-clock text-primary fs-4 "></i>{" "}
                {evento.start.split("T")[0]}
              </li>
            </ul>
            <p>{evento.descripcion}</p>
          </div>
        </div>
        {displayState ? (
          <button
            onClick={() => (toggleComments(display), setIdTarjeta(evento.id))}
            className="border-0 rounded bg-transparent text-primary d-flex position-absolute bottom-0 end-0 "
          >
            <i class="bi bi-chat-square-text-fill fs-1  "></i>
          </button>
        ) : (
          <button
            onClick={() => (toggleComments(display), setIdTarjeta(0))}
            className="border-0 rounded bg-transparent text-primary  d-flex position-absolute bottom-0 end-0 "
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
