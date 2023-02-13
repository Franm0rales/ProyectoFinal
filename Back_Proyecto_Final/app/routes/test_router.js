import express from "express";
import testController from "../controller/test_controller.js";
const testRouter = express.Router();
//Traer todas las preguntas
testRouter.get("/", testController.allTests);

export default testRouter;
