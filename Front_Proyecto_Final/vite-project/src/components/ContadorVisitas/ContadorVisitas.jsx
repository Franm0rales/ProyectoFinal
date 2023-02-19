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
  fechaInicio,
  avatar,
  nombre,
  apellidos,
  correo,
}) {
  const { authorization } = useAuthContext();
  const [buttonState, setButtonState] = useState("Asistiré");
  const [isDisabled, setIsDisabled] = useState(false);
  const [contador, setContador] = useState(true);
  const [abierto, setAbierto] = useState("d-none");
  const [comentario, setComentario] = useState("");
  const [rating, setRating] = useState(0);
  const maxVisitors = plazas;
  const ratingStars = [0, 1, 2, 3, 4];

  async function onSubmit(x) {
    try {
      setUnirse(!unirse);
      await fetch(`http://localhost:3000/user/unirseEvento`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          idUsuario: authorization.id,
          idEvento: x,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  }

  function cambioTextArea() {
    setAbierto("");
  }

  async function enviarComentario() {
    try {
      const response = await fetch(`http://localhost:3000/user/addComentario`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          idUsuario: authorization.id,
          idTarjeta: idTarjeta,
          comentario: comentario,
          rating: rating,
        }),
      });

      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Comentario enviado correctamente ",
          showConfirmButton: false,   
          timer: 1500,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleClick = (x) => {
    onSubmit(x);
    Swal.fire({
      title: "Registrado al Evento",
      icon: "success",
      confirmButtonColor: "#5295ce",
    });
    setContador(!contador);
    setButtonState("No asistiré");
    setIsDisabled(true);
  };
  const handleUnclick = (x) => {
    onSubmit(x);
    Swal.fire({
      title: "Te has eliminado del evento correctamente",
      icon: "success",
      confirmButtonColor: "#5295ce",
    });

    setButtonState("Asistiré");
    setIsDisabled(false);
  };

  function handleInput(e) {
    let escribiendo = { ...comentario, [e.target.name]: e.target.value };
    setComentario(escribiendo);
  }
  function handleStarClick(starIndex) {
    setRating(starIndex + 1);
    console.log(rating);
    // Post con el estado de estrellas marcadas y listo caniooo!!!
  }
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
  const dia = ("0" + fechaActual.getDate()).slice(-2);
  const fechaEnFormatoYYYYMMDD = `${anio}-${mes}-${dia}`;

  let diaEmpiezaEvento = fechaInicio.split("T")[0];

  return (
    
    <>
      <div>
        <p>
          <i className="bi bi-people-fill fs-2"></i> {contadorPersonas || 0}/
          {maxVisitors}
        </p>

        {fechaEnFormatoYYYYMMDD > diaEmpiezaEvento ? (
          data == idTarjeta ? (
            <div>
              <button
                id="botones"
                className="rounded mt-2 mb-5 col-3"
                onClick={() => cambioTextArea()}
              >
                Escribir una reseña
              </button>
              <div>
                <small>
                  <i class="bi bi-asterisk text-primary"></i>Para poder
                  participar en otro evento debes dejar tu comentario
                </small>
              </div>
              <div className={`${abierto} mt-3`}>
                <div class="verified_customer_section">
                  <div class="image_review">
                    <div class="customer_image">
                      <img
                        src={`https://bootdey.com/img/Content/avatar/avatar${avatar}.png`}
                        alt="customer image"
                      />
                    </div>

                    <div class="customer_name_review_status">
                      <div class="customer_name">
                        {nombre} {""} {apellidos}
                      </div>
                      <div class=" fst-italic text-start">{correo}</div>

                      <div className="star-rating text-start">
                        {ratingStars.map((index) => (
                          <i
                            key={index}
                            className={
                              index < rating
                                ? `bi bi-star-fill selected`
                                : `bi bi-star-fill`
                            }
                            onClick={() => handleStarClick(index)}
                          />
                        ))}

                        {/* {[...Array(5)].map((_, index) => (
                          <i
                            key={index}
                            className={`bi bi-star-fill${
                              index < rating ? " selected" : ""
                            }`}
                            onClick={() => handleStarClick(index)}
                          />
                        ))} */}
                      </div>

                      <div class="customer_status"></div>
                    </div>
                  </div>

                  <div class="customer_comment">
                    <textarea
                      className="rounded "
                      name="comentario"
                      id=""
                      cols="60"
                      rows="5"
                      onChange={handleInput}
                    ></textarea>
                  </div>
                </div>
                <button
                  onClick={() => enviarComentario()}
                  id="botones"
                  className="rounded mt-3"
                >
                  Enviar
                </button>
              </div>
            </div>
          ) : (
            <p>Evento ya finalizado</p>
          )
        ) : data == 0 && contadorPersonas < maxVisitors ? (
          <button
            id="botones"
            className="rounded mt-2 mb-5 col-3"
            onClick={() => handleClick(idTarjeta)}
          >
            Asistir
          </button>
        ) : data == idTarjeta ? (
          <button
            id="botones"
            className="rounded mt-2 mb-5 col-3"
            onClick={() => handleUnclick(0)}
          >
            Borrar Curso
          </button>
        ) : contadorPersonas < maxVisitors ? (
          <p>Antes debes eliminarte del curso</p>
        ) : (
          <p>Plazas cubiertas</p>
        )}
      </div>
    </>
  );
}
