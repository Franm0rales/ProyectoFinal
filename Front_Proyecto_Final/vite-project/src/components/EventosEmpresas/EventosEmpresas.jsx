import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Swal from "sweetalert2";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

moment.locale("es-Es");
const localizer = momentLocalizer(moment);

const isBetween = (start, end, base) =>
  base.isBetween(start, end, undefined, "[]");

export default function EventoEmpresas() {
  const [test, setTest] = useState([]);
  const { authorization } = useAuthContext();

  const fetchCalendario = async () => {
    const response = await fetch(`http://localhost:3000/user/getTarjeta/82`);
    const json = await response.json();
    setTest(json);
  };

  const [dateRange, setDateRange] = useState({
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  });
  const [eventsList, setEventsList] = useState([]);
  const onSelectEvent = (test) =>
    Swal.fire({
      title: `${test.title}`,
      confirmButtonColor: "#5e96ff",
    });
  const loadData = (targetedDateRange) => {
    const data = test.filter((item) => {
      const itemStart = moment(item.start);
      const itemEnd = moment(item.end);

      return (
        isBetween(targetedDateRange.start, targetedDateRange.end, itemStart) ||
        isBetween(targetedDateRange.start, targetedDateRange.end, itemEnd)
      );
    });
    setEventsList(data);
  };

  const agendaNavigation = (newDate) => {
    const newDateRange = {
      start: moment(newDate).startOf("month"),
      end: moment(newDate).endOf("month"),
    };
    setDateRange(newDateRange);
    loadData(newDateRange);
  };
  return (
    <>
      <Container className=" pt-4 ">
        <Calendar
          className="eventos calendario "
          views={["day", "work_week", "month"]}
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={eventsList}
          style={{ height: "60vh", width: "80vh" }}
          onSelectEvent={onSelectEvent}
          onNavigate={(newDate) => {
            agendaNavigation(newDate);
          }}
        />
        <div className="text-center">
          <button
            onClick={() => fetchCalendario}
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
