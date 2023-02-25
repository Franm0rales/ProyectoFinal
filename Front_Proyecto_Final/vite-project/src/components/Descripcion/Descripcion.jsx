import imgvideo from "../../assets/releevant.jpeg";
export default function Descripcion() {
  return (
  <>
    <h1 className="text-center pt-5 texto-contacto">¿Qué es Horizons?</h1>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters rounded">
          <div className="col-lg-6 ">
            <div className="imagen">
            <img src={imgvideo} className="img-fluid pt-3 pb-5 img-releevant" alt="" />
            </div>
            <div className="col-12 d-flex justify-content-between align-items-center">
            <div className="icon-box pb-5 pt-2" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className="bi bi-person-circle"></i>
              </div>
              <h4 className="title">
                <a href="">Candidatos</a>
              </h4>
              <p className="description">Inscríbete en las mejores empresas </p>
            </div>
            <div className="icon-box pb-5 m-0" data-aos="fade-up" data-aos-delay="100">
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
            </div>
          </div>

          <div className="col-lg-6 d-flex  about-content">
            <div className="section-title ">
             
              <p className="mt-2 fs-5">
               Nuestra página web ofrece a los estudiantes oportunidades para conocer y experimentar diferentes puestos de trabajo a través de días de voluntariado en empresas. Proporcionamos información detallada sobre las empresas que ofrecen estas oportunidades, los proyectos en los que se puede participar y los beneficios que se obtienen. Creemos que esta experiencia puede ser valiosa para los estudiantes para explorar sus intereses, descubrir nuevas habilidades y conocer el mundo laboral desde una perspectiva práctica. También ofrecemos un feedback con las empresas para mejorar los programas de voluntariado y ayudar a los estudiantes a encontrar oportunidades de trabajo y desarrollar habilidades valiosas.
              </p>
              <hr></hr>
              <div>
               
              </div>
              <table className="mt-2" style={{borderCollapse: 'collapse'}}>
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
        </div>
      </div>
    </section>
    </>
  );
}
