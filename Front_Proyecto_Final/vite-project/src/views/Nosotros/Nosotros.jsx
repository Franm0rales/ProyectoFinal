import Contacto from "../../components/Contacto/Contacto";
import { useEffect, useState } from "react";
import CarouselOpiniones from "../../components/Carouselopiniones/CarouselOpiniones";

export default function Nosotros() {
  const [alumnos, setAlumnos] = useState("");
  const [eventos, setEventos] = useState("");
  const [comentarios, setComentarios] = useState("");
  useEffect(() => {
    async function fetchAlumnos() {
      const response = await fetch(
        `http://localhost:3000/user/getNumberOfUsers/all`
      );
      const json = await response.json();
      setAlumnos(json);
    }

    async function fetchEventos() {
      const response = await fetch(
        `http://localhost:3000/tarjeta/getNumberOfEventos`
      );
      const json = await response.json();
      setEventos(json);
    }

    async function fetchComentarios() {
      const response = await fetch(
        `http://localhost:3000/tarjeta/getAllComentarios`
      );
      const json = await response.json();
      const shuffledArray = json.sort(() => Math.random() - 0.5);
      setComentarios(shuffledArray);
    }
    fetchEventos();
    fetchAlumnos();
    fetchComentarios();
  }, []);

  return (
    <div id="fondo">
      <div className="container">
        <p className=" text-animado text-center fs-5">
          ¿ Quieres saber como sería el trabajo de tus sueños?
          <span className="texto-contacto text-center">Horizons</span>
          &mdash; Contacta con empresas &mdash;
        </p>
        <div className="pt-5 d-flex align-items-center justify-content-center gap-5 ">
          <div className="col-5 ">
            <h1 className="pb-3">¿Qué hacemos?</h1>
            <h4>
              En Horizons estamos tratando de activar todo el potencial de los
              <b> jóvenes</b>, enriquecer sus conocimientos, ayudarlos a
              adquirir experiencia para poder decidir sobre su futuro trabajo,
              así como ayudarlos a comprender las posibles posibilidades futuras
              de carrera y educación. A la vez dar a conocer a las{" "}
              <b>empresas</b> que se prestan a intercambiar su dia a dia en sus
              trabajos.
            </h4>
          </div>
          {eventos ? (
            <div class="data-card col-5 mb-5">
              <h3 className="text-primary">{eventos.contador}</h3>
              <h4>Eventos creados</h4>
              <p>Acude a cualquier evento y aclara tu futuro.</p>
              <a href="http://127.0.0.1:5173/eventos" class="link-text">
                Ver eventos
              </a>

              <hr />

              <h3 className="text-primary">{alumnos.contador}</h3>
              <h4>Candidatos</h4>
              <p>
                Muchos candidatos ya han decidido, y <b>¿TÚ?</b>
              </p>
              <a href="http://127.0.0.1:5173/login" class="link-text">
                Regístrate
              </a>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        {comentarios ? (
          <CarouselOpiniones comentarios={comentarios} />
        ) : (
          <p>Cargando...</p>
        )}

        <div>
          <h1 className="text-center">Contáctanos</h1>
        </div>
        <Contacto />
      </div>
    </div>
  );
}
