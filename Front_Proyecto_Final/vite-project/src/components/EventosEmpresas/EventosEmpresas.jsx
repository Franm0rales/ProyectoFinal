import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

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
  const onSelectEvent = (event) => alert(event.title);

  const loadData = (targetedDateRange) => {
    console.log("loadData");
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
    <Container>
      <h1 className="eventos text-center pt-5 pb-5">Agenda</h1>
      <Calendar
        views={["day", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsList}
        style={{ height: "50vh", width:"70vh"  }}
        onSelectEvent={onSelectEvent}
        onNavigate={(newDate) => {
          agendaNavigation(newDate);
        }}
      />
    </Container >
  );
}
