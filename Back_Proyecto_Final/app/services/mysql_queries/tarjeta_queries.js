import db from "../mysql.js";

const tarjetaQueries = {};
//Traer todas las tarjetas
tarjetaQueries.getAllData = async (tabla, columna) => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT * FROM ${tabla} order by ${columna}`,
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
//Filtrar tarjetas por data
tarjetaQueries.getTarjetaByData = async (tabla, columna, data) => {
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
tarjetaQueries.contadorByData = async (tabla, columna, data) => {
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
//Suma de valores en una columna
tarjetaQueries.sumByData = async (tabla, columna, columnaData, data) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT sum(${columna}) as suma FROM ${tabla} where ${columnaData}= ?`,
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
//Contador eventos
tarjetaQueries.contadorByDataNoFilter = async (tabla) => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT count(*) as contador FROM ${tabla}`,
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
//GetJoin
tarjetaQueries.getJoin = async () => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT nombre, apellidos, titulo, rating, avatar, comentario, comentarios.id FROM proyecto.comentarios join proyecto.alumno on comentarios.IdUsuario=alumno.idUsuario`,
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
//Traer respuestas con join con comentarios
tarjetaQueries.getRespuestasWithData = async (id) => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT * FROM respuestascomentarios join comentarios on respuestascomentarios.idComentario = comentarios.id where idComentario = ?`,
      [id],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default tarjetaQueries;
