import dao from "../services/dao.js";

import { role, data, tables } from "../const/const.js";

const controller = {};
// Controlador para todos los usuarios
controller.allTests = async (req, res) => {
  const { pagination } = req.params;
  try {
    let tests = await dao.allTests(pagination);
    // Si no existe el producto respondemos con un 404 (not found)
    if (tests.length <= 0) return res.status(404).send("No hay usuarios");
    // Como la consulta a la base de datos nos devuelve un array con el objeto del usuario usamos la desestructuración.
    return res.send(tests);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
