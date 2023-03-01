import { useEffect, useState } from "react";
import Evento from "../Evento/Evento";
import "./EventosAdmin.css";

export default function EventosAdmin() {
  const [percentage, setPercentage] = useState(0);
  const [eventos, setEventos] = useState([]);
  const [deleteEvento, setDeleteEvento] = useState(true);
  let [inProgressNum, setInProgressNum] = useState(0);
  let [pendingNum, setPendingNum] = useState(0);
  let [completedNum, setCompletedNum] = useState(0);
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
  const dia = ("0" + fechaActual.getDate()).slice(-2);
  const fechaEnFormatoYYYYMMDD = `${anio}-${mes}-${dia}`;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const responseEventos = await fetch(
          `http://localhost:3000/tarjeta/getAllTarjetas/tarjetas`
        );
        const jsonEventos = await responseEventos.json();
        jsonEventos.sort((a, b) => a.id - b.id);
        setEventos(jsonEventos);
      };

      fetchData();

      console.log(eventos);
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const responseEventos = await fetch(
          `http://localhost:3000/tarjeta/getAllTarjetas/tarjetas`
        );
        const jsonEventos = await responseEventos.json();
        jsonEventos.sort((a, b) => a.id - b.id);
        setEventos(jsonEventos);
        console.log("entreo", eventos);
      };
      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, [deleteEvento]);

  useEffect(() => {
    let inProgressCount = 0;
    let pendingCount = 0;
    let completedCount = 0;

    for (let i = 0; i < eventos.length; i++) {
      if (
        eventos[i].fechaInicio.split("T")[0] <= fechaEnFormatoYYYYMMDD &&
        eventos[i].fechaFin.split("T")[0] >= fechaEnFormatoYYYYMMDD
      ) {
        inProgressCount++;
      } else if (
        eventos[i].fechaInicio.split("T")[0] > fechaEnFormatoYYYYMMDD
      ) {
        pendingCount++;
      } else if (eventos[i].fechaFin.split("T")[0] < fechaEnFormatoYYYYMMDD) {
        completedCount++;
      }
    }

    setInProgressNum(inProgressCount);
    setPendingNum(pendingCount);
    setCompletedNum(completedCount);
  }, [eventos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => prevPercentage + 1);
    }, 100);

    if (percentage === 103) {
      clearInterval(interval);
      setPercentage(0);
    }

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <>
      {eventos ? (
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-xl-3 col-md-6">
              <div className="card-admin bg-pattern">
                <div className="card-body">
                  <div className="float-right">
                    <i className="fa fa-archive text-primary h4 ml-3"></i>
                  </div>
                  <h1 className=" mt-0 pt-1">{eventos.length}</h1>
                  <p className="text-muted mb-0">Eventos totales</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card-admin bg-pattern">
                <div className="card-body">
                  <div className="float-right">
                    <i className="fa fa-th text-primary h4 ml-3"></i>
                  </div>
                  <h1 className="mt-0 pt-1">{completedNum}</h1>
                  <p className="text-muted mb-0">Eventos completados</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card-admin bg-pattern">
                <div className="card-body">
                  <div className="float-right">
                    <i className="fa fa-th text-primary h4 ml-3"></i>
                  </div>
                  <h1 className="mt-0 pt-1">{pendingNum}</h1>
                  <p className="text-muted mb-0">Eventos pendientes</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card-admin bg-pattern">
                <div className="card-body">
                  <div className="float-right">
                    <i className="fa fa-file text-primary h4 ml-3"></i>
                  </div>
                  <h1 className="mt-0 pt-1">{inProgressNum}</h1>
                  <p className="text-muted mb-0">Eventos en progreso</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card-admin">
                <div className="card-body"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card-admin">
                <div className="card-body">
                  <div className="table-responsive project-list">
                    <table className="table project-table table-centered table-nowrap shadow-none">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Eventos</th>
                          <th scope="col">Fecha inicio evento</th>
                          <th scope="col">Fecha fin evento</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Asistentes</th>
                          <th scope="col">Progreso</th>
                          <th scope="col"> </th>
                        </tr>
                      </thead>
                      {eventos.map((evento, index) => (
                        <Evento
                          evento={evento}
                          percentage={percentage}
                          setDeleteEvento={setDeleteEvento}
                          deleteEvento={deleteEvento}
                          index={index}
                        />
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}
