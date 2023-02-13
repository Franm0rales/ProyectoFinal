import db from "../mysql.js";
import utils from "../../utils/utils.js";

const testQueries = {};
//Traer todos los Usuarios
testQueries.allTests = async (tabla) => {
  // Conectamos con la base de datos
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(`SELECT * FROM ${tabla}`, [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default testQueries;
