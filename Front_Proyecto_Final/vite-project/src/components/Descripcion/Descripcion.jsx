import Nosotros from "../../assets/nosotros.jpg";
export default function Descripcion() {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1>Welcome to Day</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
      <section id="about" class="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
              <img src={Nosotros} class="img-fluid" alt="" />
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                En FuturePresent estamos tratando de activar todo el potencial
                de los jóvenes, enriquecer sus conocimientos, ayudarlos a
                adquirir experiencia para poder decidir sobre su futuro trabajo,
                así como ayudarlos a comprender las posibles posibilidades
                futuras de carrera y educación. A la vez dar a conocer a las
                empresas que se prestan a intercambiar su dia a dia en sus
                trabajos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
