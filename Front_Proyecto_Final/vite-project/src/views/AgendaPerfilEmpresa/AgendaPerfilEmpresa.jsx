import { useState, useEffect } from "react";
import CrearEvento from "../../components/CrearEvento/CrearEvento";
import EventoEmpresas from "../../components/EventosEmpresas/EventosEmpresas";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { Container } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Swal from "sweetalert2";

moment.locale("es-Es");
const localizer = momentLocalizer(moment);

export default function AgendaPerfilEmpresa() {
  const [test, setTest] = useState([]);
  const { authorization } = useAuthContext();
  const [evento, setEvento] = useState([]);

  useEffect(() => {
    const fetchCalendario = async () => {
      const response = await fetch(
        `http://localhost:3000/user/getTarjeta/${authorization.id}`
      );
      const json = await response.json();
      setTest(json);
    };
    fetchCalendario();
  }, [evento]);

  const onSelectEvent = (test) =>
    Swal.fire({
      title: `${test.title}`,
      confirmButtonColor: "#5e96ff",
    });

  return (
    <>
      <h1 className="text-center mt-5 mb-5">Añadir eventos</h1>
      <div className="container">
        <div className="d-flex">
          <CrearEvento setEvento={setEvento} />
          <Container className=" pt-4 ">
            <Calendar
              className="eventos calendario "
              views={["day", "work_week", "month"]}
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={test}
              style={{ height: "60vh", width: "80vh" }}
              onSelectEvent={onSelectEvent}
            />
            {/* <div className="text-center">
                <button
                  onClick={() => fetchCalendario()}
                  id="botones"
                  className="btn text-white mt-3  "
                  type="submit"
                >
                  Actualizar agenda
                </button>
              </div> */}
          </Container>
        </div>
      </div>
    </>
  );
}
