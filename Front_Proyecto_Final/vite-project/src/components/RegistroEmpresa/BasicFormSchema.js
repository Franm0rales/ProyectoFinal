import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//5 caracteres,1 mayuscula,1 minuscula,1 numero
export const BasicFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor inserta un email válido")
    .required("Requerido"),
  nombre: yup.string().required("Requerido"),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Por favor necesita una password con mayúscula,número y mínimo 5 caracteres",
    })
    .required("Requerido"),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password incorrecta")
    .required("Requerido"),
  telefono: yup.number().positive().integer().required("Requerido"),
  CIF: yup.string().required("Requerido"),
  ciudad: yup.string().required("Requerido"),
  direccion: yup.string().required("Requerido"),
  descripcion: yup.string().required("Requerido"),
  imagen: yup.required("Requerido"),
});
