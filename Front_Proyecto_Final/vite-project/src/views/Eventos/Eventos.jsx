import BuscarEmpresa from "../../components/BuscarEmpresa/BuscarEmpresa";
import ContadorVisitas from "../../components/ContadorVisitas/Contadorvisitas";
import { useEffect, useState } from "react";

export default function Eventos() {
  const [eventos, setEventos] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const responseAptitudes = await fetch(`http://localhost:3000/user/`);

      const jsonAptitudes = await responseAptitudes.json();
      setAptitudes(jsonAptitudes);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="mt-5 mb-5 text-center">Eventos</h1>
      <BuscarEmpresa />
      <div className="container meetup-card">
        <div class=" mb-3">
          <img
            src="https://d1.awsstatic.com/aws-cloud-financial-managment/600x400_Verisk_Logo_Transparent.9b8b98cb92c3642aecfa51f38351d258ef0590e0.png"
            class="card-img-top"
            alt="Meetup event image"
          />
          <div class="card-body">
            <h5 class="card-title">Título del evento:</h5>
            <p class="card-text">Fecha inico/Fecha fin:</p>
            <p class="card-text">Hora:</p>
            <p class="card-text">Ciudad:</p>
            <p class="card-text">Dirección:</p>
            <p class="card-text">Descripción:</p>
          </div>
          <div class="card-footer">
            <a href="#" id="botones" className="btn text-white col-3 ">
              Ver más detalles
            </a>
          </div>
        </div>
        <ContadorVisitas />
      </div>
    </>
  );
}
