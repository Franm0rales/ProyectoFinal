import dao from "../services/dao.js";
import md5 from "md5";
import jwt_decode from "jwt-decode";
import { SignJWT, jwtVerify } from "jose";
import { role, data, tables } from "../const/const.js";
import { transporter } from "../config/mailer.js";

const controller = {};
// Controlador para todos los usuarios
controller.allTests = async (req, res) => {
  try {
    let tests = await dao.allTests(data.test);
    // Si no existe el producto respondemos con un 404 (not found)
    if (tests.length <= 0) return res.status(404).send("No hay usuarios");
    // Como la consulta a la base de datos nos devuelve un array con el objeto del usuario usamos la desestructuración.
    return res.send(tests);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
