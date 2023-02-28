import { useEffect, useState } from "react";
import Evento from "../Evento/Evento";
import "./EventosAdmin.css";

export default function EventosAdmin() {
  const [percentage, setPercentage] = useState(0);
  const [eventos, setEventos] = useState([]);
  const [inProgressNum, setInProgressNum] = useState(0);
  const [pendingNum, setPendingNum] = useState(0);
  const [completedNum, setCompletedNum] = useState(0);

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
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => prevPercentage + 1);
    }, 100);

    if (percentage === 100) {
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
                          <th scope="col">Fecha evento</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Asistentes</th>
                          <th scope="col">Progreso</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      {eventos.map((evento) => (
                        <Evento
                          evento={evento}
                          percentage={percentage}
                          setInProgressNum={setInProgressNum}
                          inProgressNum={inProgressNum}
                          pendingNum={pendingNum}
                          setPendingNum={setPendingNum}
                          setCompletedNum={setCompletedNum}
                          completedNum={completedNum}
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
