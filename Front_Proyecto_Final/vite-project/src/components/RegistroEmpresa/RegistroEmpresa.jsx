import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";

export default function RegistroEmpresa() {
  async function onSubmit(values, actions) {
    fetch("http://localhost:3000/user/signUpEmpresa", {
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
      CIF: "",
      password: "",
      passwordRepeat: "",
      telefono: "",
      ciudad: "",
      direccion: "",
      descripcion: "",
    },
    validationSchema: BasicFormSchema,
    onSubmit,
  });
  return (
    <div className="m-5">
      <h1>Registro Empresa</h1>

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
            CIF
          </label>
          <input
            type="text"
            className={
              errors.CIF && touched.CIF
                ? "form-control is-invalid"
                : "form-control"
            }
            value={values.CIF}
            name="CIF"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div
            className={
              errors.CIF && touched.CIF ? "invalid-feeback is-invalid" : ""
            }
          >
            {errors.CIF}
          </div>{" "}
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
        <div className="col-md-6">
          <label htmlFor="exampleInputPassword1" className="form-label">
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
          />
          <div
            className={
              errors.ciudad && touched.ciudad
                ? "invalid-feeback is-invalid"
                : ""
            }
          >
            {errors.ciudad}
          </div>{" "}
        </div>
        <div className="col-md-6">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Dirección
          </label>
          <input
            type="text"
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
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Descripción tarjeta
          </label>
          <textarea
            type="text"
            className={
              errors.descripcion && touched.descripcion
                ? "form-control is-invalid"
                : "form-control"
            }
            aria-describedby="emailHelp"
            value={values.descripcion}
            name="descripcion"
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          <div
            className={
              errors.descripcion && touched.descripcion
                ? "invalid-feeback is-invalid"
                : ""
            }
          >
            {errors.descripcion}
          </div>
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
        <button disabled={isSubmitting} type="submit" className="btn btn-dark">
          Crea una cuenta ahora
        </button>
      </form>
    </div>
  );
}
