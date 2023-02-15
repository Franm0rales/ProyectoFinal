import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
export default function CrearEvento() {
  const { authorization } = useAuthContext();

  const [nombre, setEventName] = useState("");
  const [fechaInicio, setfechaInicio] = useState("");
  const [fechaFin, setfechaFin] = useState("");
  const [horaInicio, sethoraInicio] = useState("");
  const [plazas, setEventPerson] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [eventImagen, setEventImagen] = useState("");
  async function onSubmit(values) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/tarjeta/${authorization.id}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

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
      case "nombre":
        setEventName(value);
        break;
      case "fechaInicio":
        setfechaInicio(value);
        break;
        case "fechaFin":
          setfechaFin(value);
          break;
      case "horaInicio":
        sethoraInicio(value);
        break;
      case "plazas":
        setEventPerson(value);
        break;
      case "descripcion":
        setdescripcion(value);
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
                name="nombre"
                value={nombre}
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
                name="fechaInicio"
                value={fechaInicio}
                onChange={handleInputChange}
              />
            </label>

            <label className="form-label col-5">
              Fecha fin del evento:
              <input
                className="form-control"
                type="date"
                name="fechaFin"
                value={fechaFin}
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
                name="horaInicio"
                value={horaInicio}
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
                name="plazas"
                value={plazas}
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
                name="descripcion"
                value={descripcion}
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
