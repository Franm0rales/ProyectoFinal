import userQueries from "./mysql_queries/user_queries.js";
import testQueries from "./mysql_queries/test_queries.js";

const dao = {};

//Añadir usuario a usuarios
dao.addUser = async (data, tabla) => await userQueries.addUser(data, tabla);
// Buscar un usuario por el email
dao.getUserByData = async (tabla, columna, dato) =>
  await userQueries.getUserByData(tabla, columna, dato);
// Añadir un nuevo alumno
dao.addAlumno = async (userData, idUser) =>
  await userQueries.addAlumno(userData, idUser);
// Añadir una nueva empresa
dao.addEmpresa = async (userData, idUser) =>
  await userQueries.addEmpresa(userData, idUser);
// Modificar usuario por su id
dao.updateUser = async (tabla, id, userData, columna) =>
  await userQueries.updateUser(tabla, id, userData, columna);
// Eliminar usuario por su id
dao.deleteUser = async (tabla, data, id, columna) =>
  await userQueries.deleteUser(tabla, data, id, columna);
// Traer todos los usuarios
dao.allUsers = async (tabla) => await userQueries.allUsers(tabla);
// Eliminar usuario por su id
dao.deleteUser = async (tabla, data, id, columna) =>
  await userQueries.deleteUser(tabla, data, id, columna);
dao.allTests = async (pagination) => await testQueries.allTests(pagination);
// Traer todas las tarjetas de eventos
dao.getAllTarjetas = async () => await userQueries.getAllTarjetas();
//Filtrar tarjetas por datos
dao.getTarjetaByData = async (tabla, columna, data) =>
  await userQueries.getTarjetaByData(tabla, columna, data);
//Contador usuarios por evento
dao.contadorByData = async (tabla, columna, data) =>
  await userQueries.contadorByData(tabla, columna, data);
//Suma de datos en una columna
dao.sumByData = async (tabla, columna, columnaData, data) =>
  await userQueries.sumByData(tabla, columna, columnaData, data);

export default dao;
