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
  const [isCheckedPlazas, setIsCheckedPlazas] = useState(false);
  const [isCheckedFecha, setIsCheckedFecha] = useState(false);
  const EVENTS_PER_PAGE = 5;
  const [allUndefined, setAllUndefined] = useState(true);
  const [encode, setEncode] = useState();
  const eventsToShow = eventos.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );
  let query;
  useEffect(() => {
    let undefinedTrueFalse = 0;
    for (let i = 0; i < selectedCiudades.length; i++) {
      if (selectedCiudades[i] !== undefined) {
        undefinedTrueFalse = allUndefined + 1;
        break;
      }
    }
    setAllUndefined(undefinedTrueFalse);
  }, [selectedCiudades]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseEventos = await fetch(
          "http://localhost:3000/tarjeta/getAllTarjetas/tarjetas"
        );
        let jsoneventos = await responseEventos.json();
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
    const crearQuery = async () => {
      try {
        let x = 20;
        for (let i = 0; i < 4; i++) {
          if (selectedCiudades[i] !== undefined && x == 20) {
            x = i;
          }
        }
        if (selectedCiudades[x] !== undefined) {
          query = `where ${selectedCiudades[x]}`;
        }
        for (let i = x + 1; i < selectedCiudades.length; i++) {
          if (selectedCiudades[i] !== undefined)
            query += " and " + selectedCiudades[i] + " ";
        }
        if (query === `where ${undefined}`) {
          query = " ";
        }

        setEncode(encodeURI(query));
      } catch (e) {
        console.log(e.message);
      }
    };
    const fetchRutaABuscar = async () => {
      try {
        let x = 20;
        for (let i = 0; i < 4; i++) {
          if (selectedCiudades[i] !== undefined && x == 20) {
            x = i;
          }
        }
        if (selectedCiudades[x] !== undefined) {
          query = `where ${selectedCiudades[x]}`;
        }
        for (let i = x + 1; i < selectedCiudades.length; i++) {
          if (selectedCiudades[i] !== undefined)
            query += " and " + selectedCiudades[i] + " ";
        }
        if (
          query === `where ${undefined}` ||
          query === `where nombre like "%%"`
        ) {
          query = " ";
        }
        console.log(query);

        // await crearQuery();
        const response = await fetch(
          `http://localhost:3000/tarjeta/getTarjetaFilters/${encodeURI(query)}`
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
    const fetchBuscarNombre = async () => {
      const objetosFiltrados = eventos.filter((evento) =>
        evento.nombre
          .toLowerCase()
          .includes(selectedCiudades[3].toLocaleLowerCase())
      );
      setEventos(objetosFiltrados);
    };
    if (allUndefined == 0) {
      fetchData();
    } else {
      fetchRutaABuscar();
      if (selectedCiudades[3] !== undefined) {
        fetchBuscarNombre();
      }
    }
  }, [unirse, allUndefined]);

  function handleCheckBoxFecha(x) {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
    const dia = ("0" + fechaActual.getDate()).slice(-2);
    const fechaEnFormatoYYYYMMDD = `${anio}-${mes}-${dia}`;
    if (isCheckedFecha) {
      selectedCiudades[x] = undefined;
      setIsCheckedFecha(!isCheckedFecha);
    } else {
      selectedCiudades[x] = `"${fechaEnFormatoYYYYMMDD}"<fechaInicio`;
      setIsCheckedFecha(!isCheckedFecha);
    }
    setSelectedCiudades([...selectedCiudades]);
  }
  function handleCheckBoxPlazas(event, x) {
    let options = event.target.value;
    if (isCheckedPlazas) {
      selectedCiudades[x] = undefined;
      setIsCheckedPlazas(!isCheckedPlazas);
    } else {
      selectedCiudades[x] = options;
      setIsCheckedPlazas(!isCheckedPlazas);
    }
    setSelectedCiudades([...selectedCiudades]);
  }
  function handleChangeCiudad(event, x) {
    let options = event.target.value;
    if (options == "Selecciona ciudades") {
      options = undefined;
    }
    selectedCiudades[x] = options;
    setSelectedCiudades([...selectedCiudades]);
  }
  function deleteFilters(e) {
    e.preventDefault();
    setSelectedCiudades([undefined]);
    setIsCheckedPlazas(false);
    setIsCheckedFecha(false);
  }
  function handleInputNombre(nombre) {
    //let cambio = { ...selectedCiudades[3], nombre };
    selectedCiudades[3] = `nombre like "%${nombre}%"`;
    setSelectedCiudades([...selectedCiudades]);
    console.log(selectedCiudades);
  }

  return (
    <>
      <div id="fondo" className="pb-5">
        <div className="pt-5 d-flex justify-content-center gap-3">
          {/* <BuscarEmpresa handleInputNombre={handleInputNombre} /> */}
          <div class="col-2">
            <input
              onChange={(e) => handleInputNombre(e.target.value)}
              type="text"
              class="form-control  col-6 mt-5 d-flex mb-5"
              placeholder="Search"
              name="nombre"
            />
          </div>
          <div className="form-label col-1 pt-5">
            <select
              name="ciudad"
              onChange={(e) => handleChangeCiudad(e, 0)}
              value={selectedCiudades[0]}
              className="form-select col-2"
              aria-label="Default select example"
            >
              <option value={undefined}>Selecciona ciudades</option>
              <option value="ciudad = 'Almeria'">Almería</option>
              <option value="ciudad = 'Cadiz'">Cadiz</option>
              <option value="ciudad = 'Cordoba'">Córdoba</option>
              <option value="ciudad = 'Granada'">Granada</option>
              <option value="ciudad = 'Huelva'">Huelva</option>
              <option value="ciudad = 'Jaen'">Jaen</option>
              <option value="ciudad = 'Malaga'">Málaga</option>
              <option value="ciudad = 'Sevilla'">Sevilla</option>
            </select>
          </div>
          {authorization?.email ? (
            <div className="d-flex align-items-center gap-2">
              <label>Plazas disponibles</label>
              <input
                type="checkbox"
                name="plazas"
                value="alumnos<plazas"
                checked={isCheckedPlazas}
                onClick={(e) => handleCheckBoxPlazas(e, 1)}
              />
            </div>
          ) : (
            <p></p>
          )}

          <div className="d-flex align-items-center gap-2">
            <label>Fecha disponible</label>
            <input
              type="checkbox"
              name="scales"
              value="fecha"
              checked={isCheckedFecha}
              onClick={() => handleCheckBoxFecha(2)}
            />
          </div>
          <button
            className="border-0 bg-transparent"
            onClick={(e) => deleteFilters(e)}
          >
            <i class="bi bi-x-square-fill text-danger fs-4"></i>
          </button>
        </div>
        <div className="container col-10 "></div>
        {eventsToShow.map((evento) => (
          <>
            <div className="container meetup-card col-6" key={evento.id}>
              <div className=" mb-0 d-flex">
                <div className="card-body text-start ">
                  <ul className="card-text mb-4 gap-4 d-flex list-unstyled">
                    <li>
                      <i class="bi bi-buildings text-primary fs-5"></i>{" "}
                      <small>{evento.ciudad} </small>
                    </li>
                    <li>
                      <i className="bi bi-geo-alt text-primary fs-5"></i>{" "}
                      <small>{evento.direccion} </small>
                    </li>
                    <li>
                      <i class="bi bi-clock text-primary fs-5"></i>{" "}
                      <small>{evento.horaInicio}</small>
                    </li>
                  </ul>

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
              {authorization?.role ? (
                authorization?.role == 2 ? (
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
                ) : (
                  <div></div>
                )
              ) : (
                <p>
                  <a href="http://127.0.0.1:5173/login">Registrate</a> para
                  poder apuntarte a los eventos.
                </p>
              )}
            </div>
          </>
        ))}
        <div className="d-flex justify-content-center gap-2 pt-5 ">
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
