import express from "express";
import userController from "../controller/user_controller.js";
import validateLoginDto from "../utils/validate_login_dto.js";
const userRouter = express.Router();

//Registro de nuevo usuario
userRouter.post("/signUpAlumno", userController.addAlumno);
//Registro de nueva empresa
userRouter.post("/signUpEmpresa", userController.addEmpresa);
//Registro de nuevo admin
userRouter.post("/signUpAdmin", userController.addAdmin);
//Modificar alumno
userRouter.patch("/updateUser/:id", userController.updateUser);
//Login de un usuario
userRouter.post("/login", validateLoginDto, userController.loginUser);
//Login de un usuario
userRouter.post("/loginempresa", validateLoginDto, userController.loginEmpresa);
//Traer todos los usuarios
userRouter.get("/allUsers", userController.allUsers);
userRouter.get("/allEmpresa", userController.allEmpresa);
//Traer un usuario
userRouter.get("/:id", userController.getUser);
//Traer una empresa
userRouter.get("/empresa/:id", userController.getEmpresa);
//Eliminar un usuario
userRouter.patch("/deleteEmpresa/:id", userController.deleteUser);
//Eliminar un usuario
userRouter.patch("/deleteUser/:id", userController.deleteUser);
//Crear tarjeta
userRouter.post("/addCard/:id", userController.addCard);

export default userRouter;
