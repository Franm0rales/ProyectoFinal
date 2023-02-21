export default function CarouselOpiniones() {
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
                <div class="carousel-item active">
                  <div class=" p-4">
                    <div class="t-card">
                      <p class="fs-4">Review goes here...</p>

                      <br />
                    </div>
                    <div class="row">
                      <div class="col-2 pt-3">
                        <img
                          src="https://source.unsplash.com/300x300/?girl"
                          class="rounded-circle img-responsive img-fluid"
                        />
                      </div>
                      <div class="col-sm-10">
                        <div class="arrow-down"></div>
                        <h4>
                          <strong>Sunaina Samuel</strong>
                        </h4>
                        <p class="testimonial_subtitle">
                          <span>Associate Software Engineer</span>
                          <br />
                          <span>CodeHim</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
