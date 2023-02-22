export default function CarouselOpiniones({ comentarios }) {
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
  return (
    <>
      <div class="container ">
        <h1 class="text-center mt-4">
          Comentarios de candidatos que ya han asistido a eventos
        </h1>
        <div className="d-flex justify-content-center">
          <div class="col-6">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                {comentarios
                  .map((comentario, index) => (
                    <div
                      class={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={comentario.id}
                    >
                      <div class="p-4">
                        <div class="t-card">
                          <p class="fs-4">{comentario.comentario}</p>
                          <br />
                        </div>
                        <div class="row">
                          <div class="col-2 pt-3">
                            <img
                              src={`https://bootdey.com/img/Content/avatar/avatar${comentario.avatar}.png`}
                              class="rounded-circle img-responsive img-fluid"
                            />
                          </div>
                          <div class="col-sm-10">
                            <div class="arrow-down"></div>
                            <h4>
                              <strong>
                                {comentario.nombre} {comentario.apellidos}
                              </strong>
                            </h4>
                            <p class="testimonial_subtitle">
                              <span>{comentario.titulo}</span>
                              <br />
                              <span>{renderStars(comentario.rating)}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <a class="" href="#carouselExampleCaptions" data-bs-slide="prev">
                <i class="bi bi-arrow-left rounded" id="botones"></i>
              </a>
              <a
                class="mb-5 "
                href="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <i class="bi bi-arrow-right text-end rounded" id="botones"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
