import BuscarEmpresa from "../../components/BuscarEmpresa/BuscarEmpresa";
import ContadorVisitas from "../../components/ContadorVisitas/Contadorvisitas";
import { useEffect, useState } from "react";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseEventos = await fetch(
        `http://localhost:3000/user/getAllTarjetas/tarjetas`
      );

      const jsoneventos = await responseEventos.json();
      setEventos(jsoneventos);
    };
    fetchData();
  }, []);
  console.log(eventos);
  return (
    <>
      <div id="fondo" className="pb-5">
        <div className="pt-5">
          <BuscarEmpresa />
        </div>
        <div className="container col-10 "></div>
        {eventos.map((evento) => (
          <div className="container meetup-card mb-5 col-6" key={evento.id}>
            <div className=" mb-3 ">
              <img
                src="https://d1.awsstatic.com/aws-cloud-financial-managment/600x400_Verisk_Logo_Transparent.9b8b98cb92c3642aecfa51f38351d258ef0590e0.png"
                className="card-img-top"
                alt="Meetup event image"
              />
              <div className="card-body text-start">
                <h5 className="card-title">{evento.nombre}</h5>
                <p className="card-text ">
                  <i class="bi bi-calendar3 text-primary fs-3"></i> Fecha inico:{" "}
                  {evento.fechaInicio}
                </p>
                <p className="card-text ">
                  <i class="bi bi-calendar3 text-primary fs-3"></i> Fecha fin:{" "}
                  {evento.fechaFin}
                </p>
                <p className="card-text">
                  <i class="bi bi-clock text-primary fs-3 "></i> Hora:{" "}
                  {evento.horaInicio}
                </p>
                <p className="card-text">
                  <i class="bi bi-buildings text-primary fs-3"></i> Ciudad:{" "}
                  {evento.ciudad}
                </p>
                <p className="card-text">
                  <i className="bi bi-geo-alt text-primary fs-3"></i> Dirección:{" "}
                  {evento.direccion}
                </p>
                <p className="card-text">Descripción: {evento.descripcion}</p>
              </div>
              <div className="card-footer">
                <a href="#" id="botones" className="btn text-white col-4 ">
                  Ver más
                </a>
              </div>
            </div>
            <ContadorVisitas />
          </div>
        ))}
      </div>
    </>
  );
}
