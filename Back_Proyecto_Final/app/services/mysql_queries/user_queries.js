import db from "../mysql.js";
import utils from "../../utils/utils.js";

const userQueries = {};

//Añadir nuevo usuario
userQueries.addUser = async (data, tabla) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    return await db.query(`INSERT INTO ${tabla} SET ?`, data, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Query para buscar usuario por dato
userQueries.getUserByData = async (tabla, columna, dato) => {
  //Conectamos con la base de datos y buscamos si existe el usuario por el email
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT * FROM ${tabla} where ${columna} = ?`,
      dato,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
// Modificar un usuario por su id
userQueries.updateUser = async (tabla, id, userData, columna) => {
  // Eliminamos todos los campos que no se han rellenado
  userData = await utils.removeUndefinedKeys(userData);
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    // Actualizamos el usuario con los datos introducidos
    return await db.query(
      `UPDATE ${tabla} SET ? WHERE ${columna} = ?`,
      [userData, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Borrar un usuario por su id
userQueries.deleteUser = async (tabla, data, id, columna) => {
  // Conectamos con la base de datos y eliminamos el usuario por su id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `UPDATE ${tabla} SET ? WHERE ${columna} = ?`,
      [data, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Traer todos los Usuarios
userQueries.allUsers = async (tabla) => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT * FROM ${tabla} where eliminado='0'`,
      [],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Traer todas las tarjetas
userQueries.getAllTarjetas = async () => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(`SELECT * FROM tarjeta`, [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Filtrar tarjetas por data
userQueries.getTarjetaByData = async (tabla, columna, data) => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT * FROM ${tabla} where ${columna} like '%${data}%' `,
      [],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Contador usuarios por evento
userQueries.contadorByData = async (tabla, columna, data) => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT count(*) as contador FROM ${tabla} where ${columna}= ?`,
      [data],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default userQueries;
