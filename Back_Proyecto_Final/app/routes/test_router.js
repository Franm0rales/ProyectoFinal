import express from "express";
import testController from "../controller/test_controller.js";
const testRouter = express.Router();
//Traer todas las preguntas
testRouter.get("/:pagination", testController.allTests);
//Para añadir aptitudes a la tabla
testRouter.post("/aptitudes/:id", testController.addAptitudes);
//Traer todas las aptitudes
testRouter.get("/aptitudesUser/:id", testController.getAptitudesUser);

export default testRouter;
