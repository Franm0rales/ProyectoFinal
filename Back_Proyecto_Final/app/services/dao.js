import userQueries from "./mysql_queries/user_queries.js";

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
dao.updateUser = async (tabla, id, userData) =>
  await userQueries.updateUser(tabla, id, userData);
// Eliminar usuario por su id
dao.deleteUser = async (id) => await userQueries.deleteUser(id);

export default dao;
