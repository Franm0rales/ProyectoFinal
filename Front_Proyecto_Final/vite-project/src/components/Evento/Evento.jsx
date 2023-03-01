import { useState, useEffect } from "react";

export default function Evento({
  evento,
  percentage,
  setInProgressNum,
  inProgressNum,
  pendingNum,
  setPendingNum,
  setCompletedNum,
  completedNum,
}) {
  //const [inProgressNum, setInProgressNum] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  //const [pendingNum, setPendingNum] = useState(0);
  const [pending, setPending] = useState(false);
  //const [completedNum, setCompletedNum] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [alumnos, setAlumnos] = useState(true);
  const [idTarjeta, setIdTarjeta] = useState(evento.id);
  const [id, setId] = useState(0);
  const [eventoAlumnos, setEventoAlumnos] = useState([]);
  const [visible, setVisible] = useState("d-none");
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
  const dia = ("0" + fechaActual.getDate()).slice(-2);
  const fechaEnFormatoYYYYMMDD = `${anio}-${mes}-${dia}`;

  useEffect(() => {
    const fecha = () => {
      if (
        evento.fechaInicio.split("T")[0] <= fechaEnFormatoYYYYMMDD &&
        evento.fechaFin.split("T")[0] >= fechaEnFormatoYYYYMMDD
      ) {
        setInProgress(true);
      } else if (evento.fechaInicio.split("T")[0] > fechaEnFormatoYYYYMMDD) {
        setPending(true);
      } else if (evento.fechaFin.split("T")[0] < fechaEnFormatoYYYYMMDD) {
        setCompleted(true);
      }
    };
    const fetchEventoAlumno = async () => {
      const responseEventoAlumnos = await fetch(
        `http://localhost:3000/tarjeta/eventosAlumnos/${idTarjeta}`
      );
      const jsonEventoAlumnos = await responseEventoAlumnos.json();
      jsonEventoAlumnos.sort((a, b) => a.id - b.id);
      setEventoAlumnos(jsonEventoAlumnos);
      //   if (eventoAlumnos.length < 1) {
      //     setAlumnos(false);
      //   }
    };
    fecha();
    fetchEventoAlumno();
  }, []);

  function deleteEvento() {
    fetch(`http://localhost:3000/tarjeta/deleteEvento/${id}`, {
      method: "DELETE",
    });
  }
  function toggleVisible(x) {
    if (visible === "d-none") {
      setVisible("");
    } else {
      setVisible("d-none");
    }
    setId(x);
  }
  return (
    <tbody>
      <tr className="">
        <th scope="row">{evento.id}</th>
        <td>{evento.nombre}</td>
        <td>
          {evento.fechaInicio.split("T")[0].split("-")[2]}-
          {evento.fechaInicio.split("T")[0].split("-")[1]}-
          {evento.fechaInicio.split("T")[0].split("-")[0]}
        </td>
        <td>
          {evento.fechaFin.split("T")[0].split("-")[2]}-
          {evento.fechaFin.split("T")[0].split("-")[1]}-
          {evento.fechaFin.split("T")[0].split("-")[0]}
        </td>
        <td>
          {completed ? (
            <span className="text-success font-12">Completado</span>
          ) : inProgress ? (
            <span className="text-primary font-12">En progreso</span>
          ) : pending ? (
            <span className="text-black font-12">Pendiente</span>
          ) : (
            <p>undefined</p>
          )}
        </td>
        <td>
          <div className="team avatar-group">
            {alumnos ? (
              eventoAlumnos.map((alumno) => (
                <button className="border-0 bg-transparent p-0">
                  <img
                    src={`https://bootdey.com/img/Content/avatar/avatar${alumno.avatar}.png`}
                    className="avatar "
                    key={alumno.id}
                    alt={alumno.nombre}
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                    }}
                  />
                </button>
              ))
            ) : (
              <p>No alumnos apuntados</p>
            )}
          </div>
        </td>
        <td>
          <div className="progress-bar rounded">
            {completed ? (
              <div
                className="filler rounded "
                style={{ width: `100%`, background: "green" }}
              ></div>
            ) : inProgress ? (
              <div
                className="filler "
                style={{ width: `${percentage}%` }}
              ></div>
            ) : pending ? (
              <span className="text-black font-12 font-weight-bold">
                <b>Pendiente</b>
              </span>
            ) : (
              <p>undefined</p>
            )}
          </div>
        </td>
        <td style={{ width: "20%" }}>
          <div className="d-flex justify-content-center">
            <button
              onClick={() => toggleVisible(evento.id)}
              className="action text-center table-link danger border-0 bg-transparent p-0"
            >
              <i className="bi bi-x-square-fill text-danger"></i>
            </button>
          </div>
          {id == evento.id ? (
            <div className={`alert alert-danger ${visible}`} role="alert">
              Eliminar usuario ¿Estas seguro?
              <button
                className="btn btn-outline-secondary mx-1 text-white rounded-2"
                onClick={() => deleteEvento(evento.id)}
              >
                Si
              </button>
              <button
                className="btn btn-outline-secondary mx-1 text-white rounded-2"
                onClick={() => toggleVisible(0)}
              >
                No
              </button>
            </div>
          ) : (
            <p></p>
          )}
        </td>
      </tr>
    </tbody>
  );
}
