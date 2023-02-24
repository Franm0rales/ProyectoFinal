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
userRouter.patch("/updateEmpresa/:id", userController.updateEmpresa);
//Login de un usuario
userRouter.post("/login", validateLoginDto, userController.loginUser);
//Login de un usuario
userRouter.post("/loginempresa", validateLoginDto, userController.loginEmpresa);
//Traer todos los usuarios
userRouter.get("/allUsers", userController.allUsers);
userRouter.get("/allEmpresa", userController.allEmpresa);
//Traer un usuario
userRouter.get("/:id", userController.getUser);
userRouter.get("/empresa/:id", userController.getEmpresa);
//Eliminar un usuario
userRouter.patch("/deleteEmpresa/:id", userController.deleteEmpresa);
userRouter.patch("/deleteUser/:id", userController.deleteUser);
userRouter.get("/getNumberOfUsers/all", userController.getNumberOfUsers);

export default userRouter;
