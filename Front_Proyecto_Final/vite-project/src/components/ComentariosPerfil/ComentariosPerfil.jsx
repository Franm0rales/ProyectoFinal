import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

export default function ComentariosPerfil({ comentarios, idEvento }) {
  const [id, setId] = useState(null);
  const { authorization } = useAuthContext();
  const [comentarioEmpresa, setComentarioEmpresa] = useState("");
  function renderStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i className="bi bi-star-fill text-warning" />);
      } else {
        stars.push(<i className="bi bi-star" />);
      }
    }
    return stars;
  }
  function handleInput(e) {
    let cambio = { ...comentarioEmpresa, [e.target.name]: e.target.value };
    setComentarioEmpresa(cambio);
  }

  async function fecthComentario(comentario, idComentario) {
    try {
      const response = await fetch(
        `http://localhost:3000/tarjeta/addComentario`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            idUsuario: authorization.id,
            idTarjeta: idEvento,
            comentario: comentario,
            id: idComentario,
          }),
        }
      );

      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Comentario enviado correctamente ",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setId(null);
    } catch (e) {
      console.log(e);
    }
  }
  function toggleDisplay(idUser) {
    setId(idUser);
  }

  return comentarios.map((comentario) => (
    <div
      key={comentario.id}
      className="col-md-4 testimonial-three-col overflow-auto position-relative"
    >
      <div className="testimonial-inner">
        <div className="testimonial-image" itemprop="image">
          <img
            className="img-coment"
            width="180"
            height="180"
            src={`https://bootdey.com/img/Content/avatar/avatar${comentario.avatar}.png`}
          />
        </div>
        <div>
          <div className="testimonial-content">
            {renderStars(comentario.rating)}
          </div>
          <div className="testimonial-meta">
            <span className="testimonial-job-title" itemprop="jobTitle">
              {comentario.nombre} {comentario.apellidos}
            </span>
          </div>
          <div>
            <small className="text-start fst-italic" itemprop="jobTitle">
              {comentario.email}
            </small>{" "}
          </div>
          <div>
            <small className="text-start fst-italic" itemprop="jobTitle">
              {comentario.telefono}
            </small>{" "}
          </div>
          <div className="">
            <strong className="testimonial-name" itemprop="name">
              {comentario.comentario}
            </strong>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          className="border-0 bg-transparent "
          onClick={() => toggleDisplay(comentario.idComentario)}
        >
          <i class="bi bi-send-plus text-primary fs-3 text-end"></i>
        </button>
      </div>
      {comentario.idComentario == id && (
        <>
          <textarea
            name="comentario"
            onChange={(e) => handleInput(e)}
            className="form-control d-flex flex-fill"
            placeholder={`Escribe tu respuesta a ${comentario.nombre}`}
          ></textarea>
          <div className="d-flex justify-content-center mt-2">
            <button
              id="botones"
              className="rounded"
              onClick={() =>
                fecthComentario(comentarioEmpresa, comentario.idComentario)
              }
            >
              Enviar
            </button>
          </div>
        </>
      )}
    </div>
  ));
}
