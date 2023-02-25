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
            <div className="col-12 d-flex justify-content-between">
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
            <div className="section-title">
              <h1>¿Qué es Horizons?</h1>
              <p>
              <b>¡Bienvenidos a nuestra página web de empresas que reciben días de voluntariado!</b> Aquí encontrarás una gran variedad de oportunidades para que los estudiantes puedan conocer y experimentar diferentes puestos de trabajo antes de decidir qué estudiar. En nuestro sitio web, podrás encontrar una lista detallada de empresas que ofrecen días de voluntariado, con información sobre las áreas de trabajo, los proyectos en los que se puede participar, los requisitos y los beneficios que se obtienen al realizar estas actividades. Creemos que esta experiencia puede ser una excelente oportunidad para que los estudiantes puedan explorar sus intereses, descubrir nuevas habilidades y conocer el mundo laboral desde una perspectiva práctica. ¡Esperamos que disfruten navegando por nuestra página y encuentren la oportunidad perfecta para ustedes!
              </p>
              <div>
                <p>
                Además, crear un feedback con las empresas que ofrecen oportunidades de voluntariado puede ser una herramienta poderosa para mejorar los programas de voluntariado y promover el trabajo de las empresas, al mismo tiempo que ayuda a los estudiantes a encontrar oportunidades de trabajo y desarrollar habilidades valiosas.
                </p>
              </div>
              <table className="mt-5" style={{borderCollapse: 'collapse'}}>
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
  );
}
