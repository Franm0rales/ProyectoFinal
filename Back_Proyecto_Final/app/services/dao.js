import userQueries from "./mysql_queries/user_queries.js";
import testQueries from "./mysql_queries/test_queries.js";
import tarjetaQueries from "./mysql_queries/tarjeta_queries.js";

const dao = {};

//Añadir usuario a usuarios
dao.addUser = async (data, tabla) => await userQueries.addUser(data, tabla);
// Buscar un usuario por el email
dao.getUserByData = async (tabla, columna, dato) =>
  await userQueries.getUserByData(tabla, columna, dato);
///Buscar info con dos filtros
dao.getInfoBy2Filters = async (tabla, columna1, dato1, columna2, dato2) =>
  await userQueries.getInfoBy2Filters(tabla, columna1, dato1, columna2, dato2);
// Modificar usuario por su id
dao.updateUser = async (tabla, id, userData, columna) =>
  await userQueries.updateUser(tabla, id, userData, columna);
// Traer todos los usuarios no eliminados
dao.allUsers = async (tabla) => await userQueries.allUsers(tabla);
// Traer todos los usuarios
dao.allUsersElim = async (tabla) => await userQueries.allUsersElim(tabla);
//Traer paginas preguntas test
dao.allTests = async (tabla, pagination) =>
  await testQueries.allTests(tabla, pagination);
// Traer todas las tarjetas de eventos
dao.getAllData = async (tabla, columna) =>
  await tarjetaQueries.getAllData(tabla, columna);
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
//Join
dao.getJoin = async () => await tarjetaQueries.getJoin();
//Join data
dao.getJoinData = async (tabla1, tabla2, dato1, dato2, id) =>
  await tarjetaQueries.getJoinData(tabla1, tabla2, dato1, dato2, id);
//Traer las respuestas con join a comentarios
dao.getRespuestasWithData = async (id) =>
  await tarjetaQueries.getRespuestasWithData(id);
//Traer tarjetas por filtros
dao.getTarjetaFilters = async (tabla, data) =>
  await tarjetaQueries.getTarjetaFilters(tabla, data);
//Eliminar evento
dao.deleteEvento = async (tabla, dato, id) =>
  await tarjetaQueries.deleteEvento(tabla, dato, id);

export default dao;
