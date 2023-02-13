import express from "express";
import userController from "../controller/user_controller.js";
import validateLoginDto from "../utils/validate_login_dto.js";
const testRouter = express.Router();
//Traer todas las preguntas
userRouter.get("/", userController.allTests);

export default testRouter;
