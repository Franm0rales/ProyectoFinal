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
  const [eventoAlumnos, setEventoAlumnos] = useState([]);
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

        <td>
          <div className="action text-center">
            <i className="bi bi-x-square-fill  text-danger "></i>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
