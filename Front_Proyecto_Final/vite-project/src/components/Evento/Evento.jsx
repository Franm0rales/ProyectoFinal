import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Evento({
  evento,
  percentage,
  setDeleteEvento,
  deleteEvento,
  index,
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
  function avatarPopup(index) {
    Swal.fire({
      title: `${eventoAlumnos[index].nombre} ${eventoAlumnos[index].apellidos}`,
      text: `${eventoAlumnos[index].email}`,
      confirmButtonColor: "#5295ce",
    });
  }

  function deleteEventos() {
    fetch(`http://localhost:3000/tarjeta/deleteEvento/${id}`, {
      method: "DELETE",
    });
    setDeleteEvento(!deleteEvento);
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
        <th scope="row">{index + 1}</th>
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
              eventoAlumnos.map((alumno, index) => (
                <button
                  className="border-0 bg-transparent p-0"
                  onClick={() => avatarPopup(index)}
                >
                  <img
                    src={`https://bootdey.com/img/Content/avatar/avatar${alumno.avatar}.png`}
                    className="avatar "
                    key={alumno.id}
                    alt={alumno.nombre}
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
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
          <div className="progress-bar " style={{ borderRadius: "50px" }}>
            {completed ? (
              <div
                className="filler"
                style={{
                  width: `100%`,
                  background: "green",
                  borderRadius: "50px",
                }}
              ></div>
            ) : inProgress ? (
              <div
                className="filler "
                style={{ width: `${percentage}%` }}
              ></div>
            ) : pending ? (
              <span className="text-black font-12 font-weight-bold px-2">
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
                onClick={() => deleteEventos(evento.id)}
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
