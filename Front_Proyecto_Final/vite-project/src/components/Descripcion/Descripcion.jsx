import imgvideo from "../../assets/releevant.jpeg";
import img2 from "../../assets/Carousel2.jpg"
import img3 from "../../assets/Carousel3.jpg"

export default function Descripcion() {
  return (
  <>
    <h1 className="text-center pt-5 texto-contacto">¿Qué es Horizons?</h1>
    <section id="about" className="about ">
      <div className="container rounded" data-aos="fade-up">
        <div className="row no-gutters ">
          <div className="col-lg-12 d-flex">
            <div className="imagen">
            
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <img src={imgvideo} className="img-fluid pt-3 pb-5 img-releevant" alt="" />    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img src={img2} className="img-fluid pt-3 pb-5 img-releevant" alt="" />    </div>

    <div class="carousel-item">
    <img src={img3} className="img-fluid pt-3 pb-5 img-releevant" alt="" />    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            <div className="col-lg-6 d-flex  about-content">
            <div className="section-title  ">
             <h5><b>¿Estás preparado?</b></h5>
              <p className="  mt-2 fs-5">
               Nuestra página web ofrece a los estudiantes oportunidades para conocer y experimentar diferentes puestos de trabajo a través de días de voluntariado en empresas. Proporcionamos información detallada sobre las empresas que ofrecen estas oportunidades, los proyectos en los que se puede participar y los beneficios que se obtienen. Creemos que esta experiencia puede ser valiosa para los estudiantes para explorar sus intereses, descubrir nuevas habilidades y conocer el mundo laboral desde una perspectiva práctica. También ofrecemos un feedback con las empresas para mejorar los programas de voluntariado y ayudar a los estudiantes a encontrar oportunidades de trabajo y desarrollar habilidades valiosas.
              </p>
              
            </div>
          </div>
        
          </div>
          <table className="mt-2 mb-3 col-12 " style={{borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{borderRight: '2px solid #d9e8f4', padding: '8px'}}>Empresas que ofrecen días de voluntariado</th>
      <th style={{borderRight: '2px solid #d9e8f4', padding: '8px'}}>Beneficios para los estudiantes</th>
      <th style={{borderRight: '2px solid #d9e8f4', padding: '8px'}}>Habilidades emocionales y sociales que se pueden desarrollar</th>
      <th style={{ padding: '8px'}}>Feedback con las empresas</th>
    </tr>
  </thead>
  
</table>
      
        </div>
      </div>
    </section>
    </>
  );
}
