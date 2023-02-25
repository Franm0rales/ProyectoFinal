import "./Quedadas.css";

export default function Quedadas() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="pt-5 pb-5 text-center ">Conoce nuestras quedadas</h1>
        </div>
      </div>

      <div className="row no-gutters modelo basico align-items-end mt-4">
        <div className="col-md-6">
          <div className="contenido bg-white p-5 px-md-0 rounded">
            <h1>Releevant</h1>
            <p>
            Releevant ofrece el mejor bootcamp de la Málaga tecnológica. Somos pioneros. En 2016 trajimos el modelo de bootcamp tecnológico a Málaga, iniciando un tenaz camino que ha estado lleno de aprendizaje, pero también repleto de éxitos; podemos presumir que gracias al modelo de cómo aprender a programar desde 0, más de 200 programadores en activo han pasado por nuestras formaciones.
            </p>
            <a
              href="#"
              id="botones"
              className="btn btn-outline-dark text-uppercase"
            >
              Más información
            </a>
          </div>
        </div>
      </div>

      <div className="row no-gutters modelo premier justify-content-end mt-4">
        <div className="col-md-6">
          <div className="contenido bg-white p-5 rounded-bottom">
            <h1>Pwc</h1>
            <p>
            El propósito de PwC es generar confianza en la sociedad y resolver problemas importantes. Somos una red de firmas presente en 152 países con más de 327.000 profesionales comprometidos en ofrecer servicios de calidad en auditoría, asesoramiento fiscal y legal, consultoría y transacciones.
            </p>
            <a
              href="#"
              id="botones"
              className="btn btn-outline-dark text-uppercase"
            >
              Más información
            </a>
          </div>
        </div>
      </div>

      <div className="row no-gutters modelo elite mt-4">
        <div className="col-md-6">
          <div className="contenido bg-white p-5 px-md-0 rounded">
            <h1>Accenture</h1>
            <p>
            El propósito de Accenture llevar adelante los avances de la tecnología y el ingenio humano, que son necesarios para el cambio. Con nuestra estrategia de ofrecer un valor de 360⁰ podemos lograrlo.
            </p>
            <a
              href="#"
              id="botones"
              className="btn btn-outline-dark text-uppercase"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
