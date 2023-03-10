import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useEffect } from "react";

export default function LoginAlumno() {
  const { authorization, user, login } = useAuthContext();
  const navigate = useNavigate();
  async function onSubmit(values, actions) {
    login(values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
    initialValues: { email: "", password: "", user: user },
    validationSchema: BasicFormSchema,
    onSubmit,
  });
  useEffect(() => {
    if (authorization.email) {
      navigate("/");
    }
  }, [authorization]);
  return (
    <div className="m-5 mb-5 ">
      <h1>Login Candidato</h1>
      <form onSubmit={handleSubmit} className="row g-3 needs-validation">
        <div className="mb-3">
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
            data-cy="email"
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
        <div className="mb-3">
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
            data-cy="password"
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

        <button
          data-cy="submit"
          disabled={isSubmitting}
          type="submit"
          id="botones"
          className="btn text-white "
        >
          Login
        </button>
      </form>
    </div>
  );
}
