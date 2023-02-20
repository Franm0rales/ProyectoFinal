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
      <section class="section-medium section-arrow--bottom-center section-arrow-primary-color bg-primary ">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-white text-center">
              <h2 class="section-title "> {evento.title}</h2>
              <p class="section-sub-title">{evento.horaInicio}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section-primary t-bordered">
        <div class="row testimonial-three testimonial-three--col-three ">
          {comentarios.length > 0 && evento.id === comentarios[0].IdTarjeta ? (
            <ComentariosPerfil comentarios={comentarios} />
          ) : (
            <p></p>
          )}

          <div class="container">
            <button
              onClick={() => (setComments(!comments), setIdTarjeta(evento.id))}
            >
              comentarios
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
