import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";

export default function Registro() {
  async function onSubmit(values, actions) {
    fetch("http://localhost:3000/user/signUpAlumno", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      console.log(values);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        alert(`usuario ${values.nombre} registrado correctamente`);
      } else if (response.status === 409) {
        alert("usuario ya registrado");
      }
    });
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
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
      email: "",
      nombre: "",
      apellidos: "",
      password: "",
      passwordRepeat: "",
      telefono: "",
      ciudad: "",
      avatar: "",
    },
    validationSchema: BasicFormSchema,
    onSubmit,
  });
  return (
    <div className="m-5">
      <h1>Regístrate</h1>

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
          <label htmlFor="validationCustom02" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className={
              errors.apellidos && touched.apellidos
                ? "form-control is-invalid"
                : "form-control"
            }
            value={values.apellidos}
            name="apellidos"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div
            className={
              errors.apellidos && touched.apellidos
                ? "invalid-feeback is-invalid"
                : ""
            }
          >
            {errors.apellidos}
          </div>{" "}
        </div>
        <div className="col-md-7">
          <label htmlFor="validationCustom01" className="form-label">
            Avatar
          </label>

          <select
            as="select"
            name="avatar"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.avatar}
            class="form-select "
            aria-label="Default select example"
          >
            <option value="8">Mujer</option>
            <option value="7">Hombre</option>
          </select>
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
          <label htmlFor="validationCustom01" className="form-label">
            Ciudad
          </label>
          <input
            type="text"
            className={
              errors.ciudad && touched.ciudad
                ? "form-control is-invalid"
                : "form-control"
            }
            value={values.ciudad}
            name="ciudad"
            onChange={handleChange}
            onBlur={handleBlur}
            id="ciudad"
          />
          <div
            className={
              errors.ciudad && touched.ciudad
                ? "invalid-feeback is-invalid"
                : ""
            }
          >
            {errors.ciudad}
          </div>
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-8">
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
          </div>{" "}
        </div>
        <div className="col-md-6">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className={
              errors.password && touched.password
                ? "form-control is-invalid"
                : "form-control"
            }
            value={values.password}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div
            className={
              errors.password && touched.password
                ? "invalid-feeback is-invalid"
                : ""
            }
          >
            {errors.password}
          </div>{" "}
        </div>
        <div className="col-md-6">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Repetir contraseña
          </label>
          <input
            type="password"
            className={
              errors.passwordRepeat && touched.passwordRepeat
                ? "form-control is-invalid"
                : "form-control"
            }
            value={values.passwordRepeat}
            name="passwordRepeat"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div
            className={
              errors.passwordRepeat && touched.passwordRepeat
                ? "invalid-feeback is-invalid"
                : ""
            }
          >
            {errors.passwordRepeat}
          </div>{" "}
        </div>
        <div className="mb-3  form-check">
          <input type="checkbox" className="form-check-input" required />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Aceptar política de privacidad
          </label>
        </div>
        <button
          id="botones"
          disabled={isSubmitting}
          type="submit"
          className="btn text-white "
        >
          Crea una cuenta ahora
        </button>
      </form>
    </div>
  );
}
