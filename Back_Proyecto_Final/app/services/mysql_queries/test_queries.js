import db from "../mysql.js";
import utils from "../../utils/utils.js";

const testQueries = {};
//Traer todos los Usuarios
testQueries.allTests = async (pagination) => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT * FROM test limit 10 offset ${pagination * 10}`,
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
