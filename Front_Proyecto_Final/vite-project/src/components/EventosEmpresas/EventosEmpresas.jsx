import { useState } from "react";
import { Container } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Swal from "sweetalert2";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

moment.locale("es-Es");
const localizer = momentLocalizer(moment);

export default function EventoEmpresas() {
  const [test, setTest] = useState([]);
  const { authorization } = useAuthContext();

  async function fetchCalendario() {
    const response = await fetch(
      `http://localhost:3000/user/getTarjeta/${authorization.id}`
    );
    const json = await response.json();
    setTest(json);
  }
  const onSelectEvent = (test) => {
    console.log(test);
    Swal.fire({
      title: `${test.title}`,
      html: `<p>Plazas: ${test.plazas} </p> <p>Hora: ${test.horaInicio} </p>`,

      confirmButtonColor: "#5e96ff",
    });
  };

  return (
    <>
      <Container className=" pt-4 ">
        <Calendar
          className="eventos calendario "
          views={["month"]}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={test}
          style={{ height: "70vh", width: "90vh" }}
          onSelectEvent={onSelectEvent}
        />
        <div className="text-center">
          <button
            onClick={() => fetchCalendario()}
            id="botones"
            className="btn text-white mt-3  "
            type="submit"
          >
            Actualizar agenda
          </button>
        </div>
      </Container>
    </>
  );
}
