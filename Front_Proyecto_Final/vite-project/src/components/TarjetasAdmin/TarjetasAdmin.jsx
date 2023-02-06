import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";

async function onSubmit(values, actions) {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
}
export default function TarjetasAdmin() {
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
      email: "",
      nombre: "",
      direccion: "",
      ciudad: "",
      imagen: "",
      descripcion: "",
      telefono: "",
    },
    validationSchema: BasicFormSchema,
    onSubmit,
  });
  return (
    <div className="m-5">
      <h1>Añadir tarjeta de visita</h1>

      <form onSubmit={handleSubmit} className="row g-3 needs-validation">
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={
              errors.nombre && touched.nombre
                ? "form-control is-invalid"
                : "form-control"
            }
            value={values.nombre}
            name="nombre"
            onChange={handleChange}
            onBlur={handleBlur}
            id="nombre"
          />
          <div
            className={
              errors.nombre && touched.nombre
                ? "invalid-feeback is-invalid"
                : ""
            }
          >
            {errors.nombre}
          </div>
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Teléfono
          </label>
          <input
            type="number"
            value={values.telefono}
            name="telefono"
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.telefono && touched.telefono
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          <div
            className={
              errors.telefono && touched.telefono
                ? "invalid-feeback is-invalid"
                : ""
            }
          >
            {errors.telefono}
          </div>{" "}
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={
              errors.email && touched.email
                ? "form-control is-invalid"
                : "form-control"
            }
            aria-describedby="emailHelp"
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div
            className={
              errors.email && touched.email ? "invalid-feeback is-invalid" : ""
            }
          >
            {errors.email}
          </div>
        </div>
        <div className="col-md-4">
          <label for="exampleDataList" class="form-label ">
            Ciudad
          </label>
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder=""
            required
          />
          <datalist id="datalistOptions">
            <option value="Jaén" />
            <option value="Cádiz" />
            <option value="Almeria" />
            <option value="Córdoba" />
            <option value="Málaga" />
          </datalist>
        </div>
        <div className="col-md-6">
          <label className="form-label">Direccion</label>
          <input
            type="texto"
            className={
              errors.direccion && touched.direccion
                ? "form-control is-invalid"
                : "form-control"
            }
            value={values.direccion}
            name="direccion"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div
            className={
              errors.direccion && touched.direccion
                ? "invalid-feeback is-invalid"
                : ""
            }
          >
            {errors.direccion}
          </div>{" "}
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Descripción tarjeta
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Seleccionar foto tarjeta
          </label>
          <input className="form-control" type="file" id="formFile" required />
        </div>

        <button disabled={isSubmitting} type="submit" className="btn btn-dark">
          Crear tarjeta ahora
        </button>
      </form>
    </div>
  );
}
