import imgvideo from "../../assets/modelo1.jpg";
export default function Descripcion() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-6 video-box">
            <img src={imgvideo} className="img-fluid pt-4" alt="" />
            <a
              href="https://youtu.be/kK7LeYwpoQ8"
              className="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
            ></a>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
            <div className="section-title">
              <h1>¿Qué hacemos?</h1>
              <h5>
                En Horizons estamos tratando de activar todo el potencial de los
                jóvenes, enriquecer sus conocimientos, ayudarlos a adquirir
                experiencia para poder decidir sobre su futuro trabajo, así como
                ayudarlos a comprender las posibles posibilidades futuras de
                carrera y educación. A la vez dar a conocer a las empresas que
                se prestan a intercambiar su dia a dia en sus trabajos.
              </h5>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <a href="">Empresas</a>
              </h4>
              <p className="description">
                Filtra entre los inscritos y contacta con los que más te
                interesen.
              </p>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className="bi bi-person-circle"></i>
              </div>
              <h4 className="title">
                <a href="">Candidatos</a>
              </h4>
              <p className="description">Inscríbete en las mejores empresas </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
