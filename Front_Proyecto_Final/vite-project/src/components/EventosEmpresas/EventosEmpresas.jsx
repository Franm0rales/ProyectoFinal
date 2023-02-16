import { useState } from "react";
import { Container } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Swal from "sweetalert2";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

moment.locale("es-Es");
const localizer = momentLocalizer(moment);

export default function EventoEmpresas(test) {
  // const [test, setTest] = useState([]);
  // const { authorization } = useAuthContext();

  // async function fetchCalendario() {
  //   const response = await fetch(
  //     `http://localhost:3000/user/getTarjeta/${authorization.id}`
  //   );
  //   const json = await response.json();
  //   setTest(json);
  // }
  const onSelectEvent = (test) =>
    Swal.fire({
      title: `${test.title}`,
      confirmButtonColor: "#5e96ff",
    });

  return (
    <>
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
    </>
  );
}
