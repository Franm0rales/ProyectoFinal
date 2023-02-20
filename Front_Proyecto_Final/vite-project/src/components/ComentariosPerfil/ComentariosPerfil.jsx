export default function ComentariosPerfil({ comentarios }) {
  let star = comentarios[0].rating;
  console.log(comentarios, "holaaaaa");
  return comentarios.map((comentario) => (
    <div class="col-md-4 testimonial-three-col overflow-auto ">
      <div class="testimonial-inner">
        <div class="testimonial-image" itemprop="image">
          <img
            className="img-coment"
            width="180"
            height="180"
            src={`https://bootdey.com/img/Content/avatar/avatar${comentario.avatar}.png`}
          />
        </div>
        <div>
          <div class="testimonial-content">
            <i className=" bi bi-star-fill text-warning"></i>
            {comentario.rating}
          </div>
          <div class="testimonial-meta">
            <span class="testimonial-job-title" itemprop="jobTitle">
              {comentario.nombre} {comentario.apellidos}
            </span>{" "}
          </div>

          <div>
            <small class="text-start fst-italic" itemprop="jobTitle">
              {comentario.email}
            </small>{" "}
          </div>
          <div>
            <small class="text-start fst-italic" itemprop="jobTitle">
              {comentario.telefono}
            </small>{" "}
          </div>
          <div className="">
            <strong class="testimonial-name" itemprop="name">
              {comentario.comentario}
            </strong>
          </div>
        </div>
      </div>
    </div>
  ));
}
