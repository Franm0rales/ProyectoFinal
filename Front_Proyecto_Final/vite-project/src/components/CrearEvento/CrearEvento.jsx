import { useFormik } from "formik";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function CrearEvento() {
  const { authorization } = useAuthContext();

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

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      nombre: "",
      fechaInicio: "",
      fechaFin: "",
      horaInicio: "",
      plazas: "",
      descripcion: "",
      email: "",
      telefono: "",
      direccion: "",
      ciudad: "",
    },

    onSubmit,
  });

  return (
    <>
      <div className="container mb-5">
        <form className=" row g-2 d-flex" onSubmit={handleSubmit}>
          <div className="">
            <label className="form-label col-10">
              Nombre del evento:
              <input
                className="form-control "
                type="text"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
          <div className="">
            <label className="form-label col-10">
              Direccion:
              <input
                className="form-control "
                type="text"
                name="direccion"
                value={values.direccion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
          <div className="">
            <label className="form-label col-10">
              Ciudad:
              <input
                className="form-control "
                type="text"
                name="ciudad"
                value={values.ciudad}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
          <div className="">
            <label className="form-label col-10">
              Email
              <input
                className="form-control "
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
          <div className="">
            <label className="form-label col-10">
              Telefono
              <input
                className="form-control "
                type="text"
                name="telefono"
                value={values.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.fechaInicio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>

            <label className="form-label col-5">
              Fecha fin del evento:
              <input
                className="form-control"
                type="date"
                name="fechaFin"
                value={values.fechaFin}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.horaInicio}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.plazas}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>

          <div className="col-10">
            <label for="formFileLg" class="form-label ">
              Imagen evento:
            </label>
            <input
              name="eventImagen"
              value={values.eventImagen}
              onChange={handleChange}
              onBlur={handleBlur}
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
                value={values.descripcion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
          <div className="text-center">
            <button
              onClick={isSubmitting}
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
