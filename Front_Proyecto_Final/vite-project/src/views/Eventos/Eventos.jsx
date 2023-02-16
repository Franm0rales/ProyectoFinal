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
      <h1 classNameName="mt-5 mb-5 text-center">Eventos</h1>
      <div classNameName="container col-4">
        <BuscarEmpresa />
      </div>
      {eventos.map((evento) => (
        <div classNameName="container meetup-card col-6 mb-5" key={evento.id}>
          <div className=" mb-3">
            <img
              src="https://d1.awsstatic.com/aws-cloud-financial-managment/600x400_Verisk_Logo_Transparent.9b8b98cb92c3642aecfa51f38351d258ef0590e0.png"
              className="card-img"
              alt="Meetup event image"
            />
            <div className="card-body text-start">
              <h5 className="card-title">Título del evento:{evento.nombre}</h5>
              <p className="card-text">
                Fecha inico: {evento.fechaInicio} Fecha fin: {evento.fechaFin}
              </p>
              <p className="card-text">Hora: {evento.horaInicio}</p>
              <p className="card-text">Ciudad: {evento.ciudad}</p>
              <p className="card-text">
                <i className="bi bi-geo-alt"></i> Dirección: {evento.direccion}
              </p>
              <p className="card-text">Descripción: {evento.descripcion}</p>
            </div>
            <div className="card-footer">
              <a href="#" id="botones" classNameName="btn text-white col-3 ">
                Ver más detalles
              </a>
            </div>
          </div>
          <ContadorVisitas />
        </div>
      ))}
    </>
  );
}
