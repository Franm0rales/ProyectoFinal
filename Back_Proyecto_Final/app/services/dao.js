import userQueries from "./mysql_queries/user_queries.js";
import testQueries from "./mysql_queries/test_queries.js";
import tarjetaQueries from "./mysql_queries/tarjeta_queries.js";

const dao = {};

//Añadir usuario a usuarios
dao.addUser = async (data, tabla) => await userQueries.addUser(data, tabla);
// Buscar un usuario por el email
dao.getUserByData = async (tabla, columna, dato) =>
  await userQueries.getUserByData(tabla, columna, dato);
// Modificar usuario por su id
dao.updateUser = async (tabla, id, userData, columna) =>
  await userQueries.updateUser(tabla, id, userData, columna);
// Traer todos los usuarios
dao.allUsers = async (tabla) => await userQueries.allUsers(tabla);
//Traer paginas preguntas test
dao.allTests = async (pagination) => await testQueries.allTests(pagination);
// Traer todas las tarjetas de eventos
dao.getAllData = async (tabla) => await tarjetaQueries.getAllData(tabla);
//Filtrar tarjetas por datos
dao.getTarjetaByData = async (tabla, columna, data) =>
  await tarjetaQueries.getTarjetaByData(tabla, columna, data);
//Contador usuarios por evento
dao.contadorByData = async (tabla, columna, data) =>
  await tarjetaQueries.contadorByData(tabla, columna, data);
//Suma de datos en una columna filtrado
dao.sumByData = async (tabla, columna, columnaData, data) =>
  await tarjetaQueries.sumByData(tabla, columna, columnaData, data);
//Suma de datos en una columna sin filtrar
dao.contadorByDataNoFilter = async (tabla) =>
  await tarjetaQueries.contadorByDataNoFilter(tabla);

export default dao;
