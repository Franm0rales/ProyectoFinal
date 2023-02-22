import dao from "../services/dao.js";

import { role, data, tables } from "../const/const.js";

const controller = {};
// Controlador para todos los usuarios
controller.allTests = async (req, res) => {
  const { pagination } = req.params;
  try {
    let tests = await dao.allTests(data.test, pagination);
    // Si no existe el producto respondemos con un 404 (not found)
    if (tests.length <= 0) return res.status(404).send("No hay preguntas");
    // Como la consulta a la base de datos nos devuelve un array con el objeto del usuario usamos la desestructuración.
    return res.send(tests);
  } catch (e) {
    console.log(e.message);
  }
};
//Añadir aptitudes
controller.addAptitudes = async (req, res) => {
  const { resp } = req.body;
  const { id } = req.params;
  // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)

  try {
    let userData = await dao.getUserByData(data.alumno, data.idUsuario, id);
    [userData] = userData;
    // Lo registramos
    let resultadosObj = {
      servicioSocial: ((resp[0] / resp[10]) * 100).toFixed(2),
      ejecutivoPersuasivo: ((resp[1] / resp[10]) * 100).toFixed(2),
      verbal: ((resp[2] / resp[10]) * 100).toFixed(2),
      artesPlasticas: ((resp[3] / resp[10]) * 100).toFixed(2),
      musical: ((resp[4] / resp[10]) * 100).toFixed(2),
      organizacionOficina: ((resp[5] / resp[10]) * 100).toFixed(2),
      cientifico: ((resp[6] / resp[10]) * 100).toFixed(2),
      calculoNumerico: ((resp[7] / resp[10]) * 100).toFixed(2),
      mecanico: ((resp[8] / resp[10]) * 100).toFixed(2),
      aireLibre: ((resp[9] / resp[10]) * 100).toFixed(2),
      idAlumno: userData.idUsuario,
    };

    const idresultados = await dao.addUser(resultadosObj, data.respuestastest);
    return res.send(`resultados en ${idresultados}`);
    //}
  } catch (e) {
    console.log(e.message);
  }
};
//Traer aptitudes por id
controller.getAptitudesUser = async (req, res) => {
  const { id } = req.params;
  try {
    let aptitudesUser = await dao.getUserByData(
      data.respuestastest,
      data.idAlumno,
      id
    );

    if (aptitudesUser.length <= 0) return res.status(404).send();
    [aptitudesUser] = aptitudesUser;

    const aptitudesObj = [
      aptitudesUser.servicioSocial,
      aptitudesUser.ejecutivoPersuasivo,
      aptitudesUser.verbal,
      aptitudesUser.artesPlasticas,
      aptitudesUser.musical,
      aptitudesUser.organizacionOficina,
      aptitudesUser.cientifico,
      aptitudesUser.calculoNumerico,
      aptitudesUser.mecanico,
      aptitudesUser.aireLibre,
    ];
    return res.status(200).send(aptitudesObj);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
