import ComentariosPerfil from "../ComentariosPerfil/ComentariosPerfil";

export default function ComentariosPerfilEmpresa({
  evento,
  setIdTarjeta,
  comentarios,
  setComments,
  comments,
}) {
  return (
    <>
      <section class="section-medium section-arrow--bottom-center section-arrow-primary-color section-eventos rounded position-relative ">
        <div class="container ">
          <div class="row">
            <div class="col-md-12 text-white text-center">
              <h2 class="section-title "> {evento.title}</h2>
              <p class="section-sub-title">{evento.horaInicio}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => (setComments(!comments), setIdTarjeta(evento.id))}
          className="border-0 rounded bg-transparent text-white d-flex position-absolute bottom-0 end-0 "
        >
          <i class="bi bi-chat-square-text-fill fs-1  "></i>
        </button>
      </section>
      <section class="section-primary t-bordered">
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
