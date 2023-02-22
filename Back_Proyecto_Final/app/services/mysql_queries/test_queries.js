import db from "../mysql.js";

const testQueries = {};
//Traer todos los Usuarios
testQueries.allTests = async (tabla, pagination) => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT * FROM ${tabla} limit 10 offset ${pagination * 10}`,
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

export default testQueries;
