import "./Quedadas.css";

export default function Quedadas() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="pt-5 pb-5 text-center ">Conoce nuestras quedadas</h1>
        </div>
      </div>

      <div className="row no-gutters modelo basico align-items-end mt-4">
        <div className="col-md-6">
          <div className="contenido bg-white p-5 px-md-0  rounded">
            <h1>Babel</h1>
            <p className="fs-5">
              Somos un equipo internacional formado por cerca de más de 2.700
              profesionales altamente especializados en tecnología de
              vanguardia.
            </p>
            <p className=" text-muted">
              Nuestra misión es acompañar a grandes clientes en sus retos y
              procesos de negocio digitales. Unimos a nuestras capacidades
              tecnológicas un profundo conocimiento sectorial que, combinado con
              una gran agilidad en la toma de decisiones, consigue que aspiremos
              a ser una de las principales compañías tecnológicas en nuestras
              geografías.
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
          <div className="contenido bg-white p-5  rounded-bottom">
            <h1>Talan</h1>
            <p className="fs-5">
              Os ayudamos a valorizar sus datos y a tener beneficio de
              Tecnologías innovadoras para realizar sus proyectos de
              transformación y crear valor de forma sostenible
            </p>
            <p className=" text-muted">
              Le ayudamos a integrar software de editores en el corazón de su
              negocio, recursos humanos, transformaciones de marketing... como
              SAP, SalesForce, Microsoft, Oracle... Y cooperemos con sus
              sistemas de información construidos en estas plataformas
              digitales.
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
            <h1>Indra</h1>
            <p className="fs-5">
              Una de las principales compañías globales de tecnología y
              consultoría y el socio tecnológico para las operaciones clave de
              los negocios de sus clientes en todo el mundo.
            </p>
            <p className="text-muted">
              Es un proveedor líder mundial de soluciones propias en segmentos
              específicos de los mercados de Transporte y Defensa, y la empresa
              líder en consultoría de transformación digital y Tecnologías de la
              Información en España y Latinoamérica a través de su filial
              Minsait.
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
