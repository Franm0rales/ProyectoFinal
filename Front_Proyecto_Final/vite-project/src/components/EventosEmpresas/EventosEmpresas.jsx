import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Swal from "sweetalert2";

moment.locale("es-Es");
const localizer = momentLocalizer(moment);

export default function EventoEmpresas({ fetchCalendario, test }) {
  useEffect(() => {
    fetchCalendario();
  }, []);

  const onSelectEvent = (test) => {
    console.log(localizer);
    Swal.fire({
      title: `${test.title}`,
      html: `<p>Plazas: ${test.alumnos}/${test.plazas} </p> <p>Hora: ${test.horaInicio} </p>`,

      confirmButtonColor: "#5e96ff",
    });
  };

  return (
    <>
      <Container className=" pt-4  ">
        <div
          className="p-4"
          style={{
            background: "#ffffff8f",
            borderRadius: "8px",
            boxShadow: " 0 15px 30px 1px grey",
          }}
        >
          <Calendar
            className="eventos calendario "
            views={["month"]}
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={test}
            style={{
              height: "60vh",
              width: "80vh",
            }}
            onSelectEvent={onSelectEvent}
          />
        </div>
      </Container>
    </>
  );
}
