import BuscarEmpresa from "../../components/BuscarEmpresa/BuscarEmpresa";
import ContadorVisitas from "../../components/ContadorVisitas/Contadorvisitas";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const { authorization } = useAuthContext();
  const [empresaABuscar, setEmpresaABuscar] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseEventos = await fetch(
          `http://localhost:3000/user/getAllTarjetas/tarjetas`
        );
        const jsoneventos = await responseEventos.json();
        setEventos(jsoneventos);
        setError(null);
        const responseData = await fetch(
          `http://localhost:3000/user/${authorization.id}`
        );
        const json = await responseData.json();
        setData(json);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRutaABuscar = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/user/getTarjetaByNombre/${empresaABuscar}`
        );

        const data = await response.json();
        setEventos(data);
        setError(null);
      } catch (error) {
        console.log(error);
        setError("La ruta no existe");
        setEventos([]);
      }
    };

    if (empresaABuscar !== "") {
      fetchRutaABuscar();
    } else {
      fetchData();
    }
  }, [empresaABuscar]);

  return (
    <>
      <div id="fondo" className="pb-5">
        <div className="pt-5">
          <BuscarEmpresa
            empresaABuscar={empresaABuscar}
            setEmpresaABuscar={setEmpresaABuscar}
          />
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
                <h2 className="card-title fs-1">{evento.nombre}</h2>
                <p className="card-text ">
                  <i class="bi bi-calendar3 text-primary fs-3"></i> Fecha inico:{" "}
                  {evento.fechaInicio.split("T")[0].split("-")[2]}-
                  {evento.fechaInicio.split("T")[0].split("-")[1]}-
                  {evento.fechaInicio.split("T")[0].split("-")[0]}
                </p>
                <p className="card-text ">
                  <i class="bi bi-calendar3 text-primary fs-3"></i> Fecha fin:{" "}
                  {evento.fechaFin.split("T")[0].split("-")[2]}-
                  {evento.fechaFin.split("T")[0].split("-")[1]}-
                  {evento.fechaFin.split("T")[0].split("-")[0]}
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
                <p className="card-text ">
                  <b> Descripción:</b> {evento.descripcion}
                </p>
              </div>
              {/* <div className="card-footer">
                <a href="#" id="botones" className="btn text-white col-4 ">
                  Ver más
                </a>
              </div> */}
            </div>
            <div className="pb-2 text-center">
              <ContadorVisitas evento={evento} idTarjeta={data} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
