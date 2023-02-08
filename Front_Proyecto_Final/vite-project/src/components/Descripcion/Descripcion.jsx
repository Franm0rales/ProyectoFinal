import imgvideo from "../../assets/modelo1.jpg"
export default function Descripcion(){

    return(
      <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row no-gutters">
          <div class="col-lg-6 video-box">
            <img src={imgvideo} class="img-fluid pt-4" alt=""/>
            <a href="https://youtu.be/kK7LeYwpoQ8" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center about-content">

            <div class="section-title">
              <h2>¿Qué hacemos?</h2>
              <p>En Horizons estamos tratando de activar todo el potencial de los jóvenes, 
              enriquecer sus conocimientos, ayudarlos a adquirir experiencia para poder decidir sobre su futuro trabajo, 
              así como ayudarlos a comprender las posibles posibilidades futuras de carrera y educación.
              A la vez dar a conocer a las empresas que se prestan a intercambiar su dia a dia en sus trabajos.</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bi bi-briefcase"></i></div>
              <h4 class="title"><a href="">Empresas</a></h4>
              <p class="description">
Filtra entre los inscritos y contacta con los que más te interesen.</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bi bi-person-circle"></i></div>
              <h4 class="title"><a href="">Candidatos</a></h4>
              <p class="description">Inscríbete en las mejores empresas </p>
            </div>

          </div>
        </div>

      </div>
    </section>
        
    
    )
}