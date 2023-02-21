import Contacto from "../../components/Contacto/Contacto";

export default function Nosotros() {
  return (
    <div id="fondo">
      <div className="container">
        <p className=" text-animado text-center fs-5">
          ¿ Quieres saber como seria el trabajo de tus sueños?
          <span className="texto-contacto text-center">Horizons</span>
          &mdash; Contacta con empresas &mdash;
        </p>
        <div className="pt-5 d-flex align-items-center justify-content-center gap-5 ">
          <div className="col-5 ">
            <h1 className="pb-3">¿Qué hacemos?</h1>
            <h4>
              En Horizons estamos tratando de activar todo el potencial de los
              jóvenes, enriquecer sus conocimientos, ayudarlos a adquirir
              experiencia para poder decidir sobre su futuro trabajo, así como
              ayudarlos a comprender las posibles posibilidades futuras de
              carrera y educación. A la vez dar a conocer a las empresas que se
              prestan a intercambiar su dia a dia en sus trabajos.
            </h4>
          </div>
          <div class="data-card col-5 mb-5">
            <h3 className="text-primary">270</h3>
            <h4>Eventos Disponibles</h4>
            <p>Acude a cualquier evento y acalara tu futuro.</p>
            <a href="http://127.0.0.1:5173/eventos" class="link-text">
              Ver eventos
            </a>

            <hr />

            <h3 className="text-primary">12,000</h3>
            <h4>Alumnos</h4>
            <p>Muchos alumnos ya han decidido, y ¿Tú?.</p>
            <a href="http://127.0.0.1:5173/login" class="link-text">
              Registrate
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-center">Contactanos</h1>
        </div>
        <Contacto />
      </div>
    </div>
  );
}
