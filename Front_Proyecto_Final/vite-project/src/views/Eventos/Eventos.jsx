import BuscarEmpresa from "../../components/BuscarEmpresa/BuscarEmpresa";
import ContadorVisitas from "../../components/ContadorVisitas/Contadorvisitas";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [unirse, setUnirse] = useState(false);
  const { authorization } = useAuthContext();
  const [filtro, setFiltro] = useState(null);
  const [selectedCiudades, setSelectedCiudades] = useState([]);
  const [empresaABuscar, setEmpresaABuscar] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [contadorPersonas, setContadorPersonas] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const EVENTS_PER_PAGE = 5;
  const eventsToShow = eventos.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  let jsoneventos;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseEventos = await fetch(
          `http://localhost:3000/tarjeta/getAllTarjetas/tarjetas`
        );
        jsoneventos = await responseEventos.json();
        setEventos(jsoneventos);
        setError(null);

        const responseData = await fetch(
          `http://localhost:3000/user/${authorization.id}`
        );
        const json = await responseData.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRutaABuscar = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/tarjeta/getTarjetaFilters`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify([selectedCiudades, empresaABuscar]),
          }
        );
        const data = await response.json();
        setEventos(data);
        setError(null);
        setCurrentPage(1);
      } catch (error) {
        console.log(error);
        setError("La ruta no existe");
        setEventos([]);
      }
    };
    if (empresaABuscar !== "" || selectedCiudades.length > 0) {
      fetchRutaABuscar();
    } else {
      setEmpresaABuscar("");
      fetchData();
    }
  }, [unirse, empresaABuscar, filtro]);

  function handleChange(event) {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
    const dia = ("0" + fechaActual.getDate()).slice(-2);
    const fechaEnFormatoYYYYMMDD = `${anio}-${mes}-${dia}`;
    let options = event.target.value;

    if (options === "fecha") {
      options = `"${fechaEnFormatoYYYYMMDD}"<fechaInicio`;
    }
    for (let i = 0; i < selectedCiudades.length; i++) {
      if (selectedCiudades[i] == options) {
        return;
      }
    }
    selectedCiudades[selectedCiudades.length] = options;
    setFiltro(options);
  }
  return (
    <>
      <div id="fondo" className="pb-5">
        <div className="pt-5 d-flex justify-content-center">
          <BuscarEmpresa
            empresaABuscar={empresaABuscar}
            setEmpresaABuscar={setEmpresaABuscar}
          />

          <div className="form-label col-1 pt-5">
            <select
              name="ciudad"
              onChange={(e) => handleChange(e)}
              value={selectedCiudades}
              className="form-select "
              aria-label="Default select exampl e"
            >
              <option value="">Selecciona ciudades</option>
              <option value="alumnos<plazas">Plazas disponibles</option>
              <option name="fecha" value="fecha">
                fecha
              </option>
              <option value="Cordoba">Cordaba</option>
              <option value="Granada">Granada</option>
              <option value="Huelva">Huelva</option>
              <option value="Jaen">Jaen</option>
              <option value="Malaga">Malaga</option>
              <option value="Sevilla">Sevilla</option>
            </select>
          </div>
        </div>
        <div className="container col-10 "></div>
        {eventsToShow.map((evento) => (
          <>
            <div className="container meetup-card col-6" key={evento.id}>
              <div className=" mb-3 d-flex">
                <div className="card-body text-start ">
                  <p className="card-text mb-4 ">
                    <i class="bi bi-buildings text-primary fs-5"></i>{" "}
                    <small>{evento.ciudad} </small>
                    <i className="bi bi-geo-alt text-primary fs-5"></i>{" "}
                    <small>{evento.direccion} </small>
                    <i class="bi bi-clock text-primary fs-5"></i>{" "}
                    <small>{evento.horaInicio}</small>
                  </p>

                  <h2 className="card-title fs-1 mb-3">{evento.nombre}</h2>
                  <p className="card-text">
                    <i class="bi bi-calendar3 text-primary fs-5"></i>
                    <b className="text-primary">
                      {" "}
                      {evento.fechaInicio.split("T")[0].split("-")[2]}-
                      {evento.fechaInicio.split("T")[0].split("-")[1]}-
                      {evento.fechaInicio.split("T")[0].split("-")[0]} /{" "}
                      {evento.fechaFin.split("T")[0].split("-")[2]}-
                      {evento.fechaFin.split("T")[0].split("-")[1]}-
                      {evento.fechaFin.split("T")[0].split("-")[0]}
                    </b>
                  </p>

                  <p className="card-text ">{evento.descripcion}</p>
                </div>
                <div className="">
                  <img
                    className="eventos-img"
                    src={`http://localhost:3000/${evento.imagen}`}
                  />
                </div>
              </div>

              <div className="pb-2 text-center ">
                <ContadorVisitas
                  plazas={evento.plazas}
                  setContadorPersonas={setContadorPersonas}
                  contadorPersonas={evento.alumnos}
                  idTarjeta={evento.id}
                  setUnirse={setUnirse}
                  unirse={unirse}
                  data={data.idTarjeta}
                  fechaInicio={evento.fechaInicio}
                  avatar={data.avatar}
                  nombre={data.nombre}
                  apellidos={data.apellidos}
                  correo={data.email}
                />
              </div>
            </div>
          </>
        ))}
        <div className="d-flex justify-content-center pt-5">
          <button
            className="btn btn-outline-primary"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage * EVENTS_PER_PAGE >= eventos.length}
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
}
