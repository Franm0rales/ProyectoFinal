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
  const { authorization } = useAuthContext();
  useEffect(() => {
    const fetchCalendario = async () => {
      const response = await fetch(`http://localhost:3000/${authorization.id}`);
      const json = await response.json();
      setTest(json);
    };
    fetchCalendario();
  }, []);
  const eventsData = [
    {
      id: 0,
      title: "Evento Jornada phyton",
      start: "2023-02-21",
      end: "2023-02-24",
    },
    {
      id: 1,
      title: "Long Event",
      start: "2015-04-06T22:00:00.000Z",
      end: "2015-04-09T22:00:00.000Z",
    },
  ];
  const [dateRange, setDateRange] = useState({
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  });
  const [eventsList, setEventsList] = useState([]);
  const onSelectEvent = (event) =>
    Swal.fire({
      title: `${event.title}`,
      confirmButtonColor: "#5e96ff",
    });
  const loadData = (targetedDateRange) => {
    const data = eventsData.filter((item) => {
      const itemStart = moment(item.start);
      const itemEnd = moment(item.end);

      return (
        isBetween(targetedDateRange.start, targetedDateRange.end, itemStart) ||
        isBetween(targetedDateRange.start, targetedDateRange.end, itemEnd)
      );
    });
    setEventsList(data);
  };

  useEffect(() => {
    loadData(dateRange);
  }, [dateRange]);

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
            onClick=""
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
