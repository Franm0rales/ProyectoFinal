import {useFormik} from "formik"
import { BasicFormSchema } from "./BasicFormSchema";

async function onSubmit(values,actions){
  console.log(values);
  console.log(actions);
  await new Promise((resolve)=>setTimeout(resolve,2000))
  actions.resetForm();
}

export default function EmpresasAdmin() {
  const { values,touched, errors, handleBlur,handleChange,handleSubmit,isSubmitting } = useFormik({
  initialValues:{email:"",nombre:"",apellidos:"",password:"",passwordRepeat:"",telefono:""},
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
          className={errors.nombre && touched.nombre ? "form-control input-error" : ""}
          value={values.nombre}
          name="nombre"
          onChange={handleChange}
          onBlur={handleBlur}
       
        />
        {errors.nombre && touched.nombre && ( <p className="error">{errors.nombre}</p> )}
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">
          Apellidos
        </label>
        <input
          type="text"
          className={errors.apellidos && touched.apellidos ? "form-control input-error" : ""}
          value={values.apellidos}
          name="apellidos"
          onChange={handleChange}
          onBlur={handleBlur}
       
        />
        {errors.apellidos && touched.apellidos && ( <p className="error">{errors.apellidos}</p> )}
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
          className={errors.telefono && touched.telefono ? "form-control input-error" : ""}
       
        />
        {errors.telefono && touched.telefono && ( <p className="error">{errors.telefono}</p> )}
        <div className="valid-feedback">Looks good!</div>
      </div>
   
      <div className="col-md-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={errors.email && touched.email ? "form-control input-error" : ""}
          aria-describedby="emailHelp"
          value={values.email}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          
        />
        {errors.email && touched.email && ( <p className="error">{errors.email}</p> )}
      </div>
      <div className="col-md-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className={errors.password && touched.password ? "form-control input-error" : ""}
          value={values.password}
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
       
        />
        {errors.password && touched.password && ( <p className="error">{errors.password}</p> )}
      </div>
      <div className="col-md-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Repetir contraseña
        </label>
        <input
          type="password"
          className={errors.passwordRepeat && touched.passwordRepeat ? "form-control input-error" : ""}
          value={values.passwordRepeat}
          name="passwordRepeat"
          onChange={handleChange}
          onBlur={handleBlur}
       
        />
        {errors.passwordRepeat && touched.passwordRepeat && ( <p className="error">{errors.passwordRepeat}</p> )}
      </div>
      <div className="mb-3 pl-3 form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Recordar usuario y contraseña
        </label>
      </div>
      <button disabled={isSubmitting} type="submit" className="btn btn-dark">
        Crea una cuenta ahora
      </button>
    </form>
  </div>

  );
}
