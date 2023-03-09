import { useEffect, useState } from "react";
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
  function renderStars(rating) {
    const stars = [];
    const rate = rating % 1;
    let starsRating;
    if (rate >= 0.5) {
      starsRating = parseInt(rating) + 1;
    } else {
      starsRating = parseInt(rating);
    }
    for (let i = 0; i < 5; i++) {
      if (i < starsRating) {
        stars.push(<i className="bi bi-star-fill text-warning" />);
      } else {
        stars.push(<i className="bi bi-star" />);
      }
    }
    return stars;
  }
  return (
    <>
      <div class="container pt-5 eventoscard position-relative pb-5 ">
        <div class="row row-striped ">
          <div class="col-10">
            <h3 class="text-uppercase">
              <strong>{evento.title}</strong>
            </h3>
            <ul class="list-inline d-flex gap-5">
              <li class="list-inline-item">
                <i class="bi bi-people-fill text-primary fs-4 px-1"></i>{" "}
                {evento.alumnos} / {evento.plazas}{" "}
              </li>{" "}
              <li>
                <i class="bi bi-calendar3 text-primary fs-4 px-1"></i>{" "}
                {evento.start.split("T")[0].split("-")[2]}-
                {evento.start.split("T")[0].split("-")[1]}-
                {evento.start.split("T")[0].split("-")[0]}
              </li>{" "}
              <li class="list-inline-item">
                {"   "}
                <i class="bi bi-clock text-primary fs-4 px-1"></i>{" "}
                {evento.horaInicio}{" "}
              </li>
            </ul>
            <div class="list-inline-item ">
              <span key={evento.id}>
                {evento.mediaRating} {renderStars(evento.mediaRating)} (
                {evento.comentariosAlumnos})
              </span>
            </div>
          </div>
        </div>
        <div className="border-0 rounded bg-transparent text-primary d-flex position-absolute bottom-50 end-0 me-2">
          {displayState ? (
            <button
              onClick={() => (toggleComments(display), setIdTarjeta(evento.id))}
              className="border-0 rounded bg-transparent text-primary"
            >
              <i class="bi bi-chat-square-text-fill fs-1"></i>
            </button>
          ) : (
            <button
              onClick={() => (toggleComments(display), setIdTarjeta(0))}
              className="border-0 rounded bg-transparent text-primary"
            >
              <i class="bi bi-x-circle fs-1  "></i>
            </button>
          )}
        </div>
      </div>

      <section class={`section-primary t-bordered ${display}`}>
        <div class="row testimonial-three testimonial-three--col-three ">
          {comentarios.length > 0 && evento.id === comentarios[0].idTarjeta ? (
            <ComentariosPerfil idEvento={evento.id} comentarios={comentarios} />
          ) : (
            <p></p>
          )}
        </div>
      </section>
    </>
  );
}
