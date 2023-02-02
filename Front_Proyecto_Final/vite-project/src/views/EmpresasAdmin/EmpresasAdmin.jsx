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
    <h1>Añadir tarjeta de visita</h1>
    
    <form onSubmit={handleSubmit} className="row g-3 needs-validation">
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className={errors.nombre && touched.nombre ? "form-control is-invalid" : "form-control"}
          value={values.nombre}
          name="nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          id="nombre"
       
        />
        <div className={errors.nombre && touched.nombre ? "invalid-feeback is-invalid":"" }>
    
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
          className={errors.apellidos && touched.apellidos ? "form-control is-invalid" : "form-control"}
          value={values.apellidos}
          name="apellidos"
          onChange={handleChange}
          onBlur={handleBlur}
       
        />
   <div className={errors.apellidos
     && touched.apellidos ? "invalid-feeback is-invalid":"" }>
    
    {errors.apellidos}
    </div>        <div className="valid-feedback">Looks good!</div>
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
          className={errors.telefono && touched.telefono ? "form-control is-invalid" : "form-control"}
       
        />
   <div className={errors.telefono  && touched.telefono ? "invalid-feeback is-invalid":"" }>
    
    {errors.telefono}
    </div>        <div className="valid-feedback">Looks good!</div>
      </div>
   
      <div className="col-md-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={errors.email && touched.email ? "form-control is-invalid" : "form-control"}
          aria-describedby="emailHelp"
          value={values.email}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          
        />
   <div className={errors.email && touched.email ? "invalid-feeback is-invalid":"" }>
    
    {errors.email}
    </div>      
    </div>
    <div className="col-md-6">
    <label for="exampleDataList" class="form-label ">Ciudad</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder=""/>
<datalist id="datalistOptions">
  <option value="Jaén"/>
  <option value="Cádiz"/>
  <option value="Almeria"/>
  <option value="Córdoba"/>
  <option value="Málaga"/>
</datalist>
</div>
      <div className="col-md-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className={errors.password && touched.password ? "form-control is-invalid" : "form-control"}
          value={values.password}
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
       
        />
   <div className={errors.password && touched.password ? "invalid-feeback is-invalid":"" }>
    
    {errors.password}
    </div>      </div>
      <div className="col-md-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Repetir contraseña
        </label>
        <input
          type="password"
          className={errors.passwordRepeat && touched.passwordRepeat ? "form-control is-invalid" : "form-control"}
          value={values.passwordRepeat}
          name="passwordRepeat"
          onChange={handleChange}
          onBlur={handleBlur}
       
        />
   <div className={errors.passwordRepeat && touched.passwordRepeat ? "invalid-feeback is-invalid":"" }>
    
    {errors.passwordRepeat}
    </div>      </div>
     
      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Descripción tarjeta</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">Seleccionar foto tarjeta</label>
  <input className="form-control" type="file" id="formFile"/>
</div>

      <button disabled={isSubmitting} type="submit" className="btn btn-dark">
        Crear tarjeta ahora
      </button>
    </form>
  </div>

  );
}
