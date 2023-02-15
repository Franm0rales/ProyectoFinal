import React, { useState } from "react";

export default function CrearEvento() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventPerson, setEventPerson] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImagen, setEventImagen] = useState("");
  async function onSubmit(values, actions) {
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Evento ya creado",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Evento creado correctamente ",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (response.status === 409) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Evento ya creado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "eventName":
        setEventName(value);
        break;
      case "eventDate":
        setEventDate(value);
        break;
      case "eventTime":
        setEventTime(value);
        break;
      case "eventPerson":
        setEventPerson(value);
        break;
      case "eventDescription":
        setEventDescription(value);
        break;
      case "eventImagen":
        setEventImagen(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="container mb-5">
        <form className=" row g-2 d-flex" onSubmit={onSubmit}>
          <div className="">
            <label className="form-label col-10">
              Nombre del evento:
              <input
                className="form-control "
                type="text"
                name="eventName"
                value={eventName}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="">
            <label className="form-label col-5">
              Fecha inicio del evento:
              <input
                className="form-control"
                type="date"
                name="eventDate"
                value={eventDate}
                onChange={handleInputChange}
              />
            </label>

            <label className="form-label col-5">
              Fecha fin del evento:
              <input
                className="form-control"
                type="date"
                name="eventDate"
                value={eventDate}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="">
            <label className="form-label col-4">
              Hora del evento:
              <input
                className="form-control"
                type="time"
                name="eventTime"
                value={eventTime}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="">
            <label className="form-label col-2">
              Plazas:
              <input
                className="form-control"
                type="number"
                name="eventPerson"
                value={eventPerson}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="col-10">
            <label for="formFileLg" class="form-label ">
              Imagen evento:
            </label>
            <input
              name="eventImagen"
              value={eventImagen}
              onChange={handleInputChange}
              class="form-control "
              type="file"
            />
          </div>
          <div className=" ">
            <label className="form-label col-10">
              Descripción del evento:
              <textarea
                className="form-control"
                name="eventDescription"
                value={eventDescription}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="text-center">
            <button
              id="botones"
              className="btn text-white mt-3  "
              type="submit"
            >
              Crear evento
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
