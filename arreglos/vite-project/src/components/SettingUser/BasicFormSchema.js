import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//5 caracteres,1 mayuscula,1 minuscula,1 numero
export const BasicFormSchema = yup.object().shape({
  email: yup.string().email("Por favor inserta un email válido"),
  nombre: yup.string(),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Por favor necesita una password con mayúscula,número y mínimo 5 caracteres",
    }),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password incorrecta"),
  telefono: yup.number().positive().integer(),
  apellidos: yup.string(),
});
