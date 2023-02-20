export default function ComentariosPerfil({ comentarios }) {
  let star = comentarios[0].rating;
  let ratingStar = [];
  for (let i = 0; i < comentarios.length; i++) {
    let stars = "";
    for (let z = 0; z < comentarios[i].rating; z++) {
      stars += `<i className=" bi bi-star-fill"></i>`;
    }
    ratingStar[i] = stars;
  }
  console.log(star);

  return comentarios.map((comentario) => (
    <div class="col-md-4 testimonial-three-col">
      <div class="testimonial-inner">
        <div class="testimonial-image" itemprop="image">
          <img
            className="img-coment"
            width="180"
            height="180"
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
          />
        </div>
        <div class="testimonial-content">
          {comentarios.map((comentario, index) => (
            <i
              key={index}
              className={`bi bi-star-fill text-warning * ${star}`}
            ></i>
          ))}
          {/* <i className=" bi bi-star-fill"></i>
          {comentario.rating} */}
        </div>
        <div class="testimonial-meta">
          <strong class="testimonial-name" itemprop="name">
            {comentario.comentario}
          </strong>
          <span class="testimonial-job-title" itemprop="jobTitle">
            CEO
          </span>{" "}
          –{" "}
          <a class="testimonial-link" href="#">
            Media Wiki
          </a>
        </div>
      </div>
    </div>
  ));
}
