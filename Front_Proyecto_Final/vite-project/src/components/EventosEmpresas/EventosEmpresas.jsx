import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Swal from "sweetalert2";
import eventsData from "./events";

moment.locale("es-Es");
const localizer = momentLocalizer(moment);

const isBetween = (start, end, base) =>
  base.isBetween(start, end, undefined, "[]");

export default function EventoEmpresas() {
  const [dateRange, setDateRange] = useState({
    start: moment().startOf("month"),
    end: moment().endOf("month")
  });
  const [eventsList, setEventsList] = useState([]);
  const onSelectEvent = (event) =>  
  Swal.fire({
    title:`${event.title}`,
    confirmButtonColor:"#5295ce",
  })
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
      end: moment(newDate).endOf("month")
    };
    setDateRange(newDateRange);
    loadData(newDateRange);
  };
  return (
    <>
    <h1 className="eventos text-center pt-5 pb-5">Agenda</h1>
    <Container className="d-flex pt-5 pb-5 justify-content-center">
      
      <Calendar
      className="eventos calendario "
        views={["day", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsList}
        style={{ height: "50vh", width:"70vh" , }}
        onSelectEvent={onSelectEvent}
        onNavigate={(newDate) => {
          agendaNavigation(newDate);
        }}
      />
    </Container >
    </>
  );
}