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
userRouter.post("/login/:id", validateLoginDto, userController.loginUser);
//Login de un usuario
userRouter.post("/loginempresa", validateLoginDto, userController.loginEmpresa);
//Traer todos los usuarios
userRouter.get("/allUsers", userController.allUsers);
userRouter.get("/allEmpresa", userController.allEmpresa);
// //Eliminar un usuario
// userRouter.delete("/deleteUser", userController.deleteUser);
//Traer un usuario
userRouter.get("/:id", userController.getUser);
userRouter.get("/empresa/:id", userController.getEmpresa);
//Eliminar un usuario
userRouter.patch("/deleteEmpresa/:id", userController.deleteEmpresa);
userRouter.patch("/deleteUser/:id", userController.deleteUser);
//Crear tarjeta
userRouter.post("/addCard", userController.addCard);
//Para añadir aptitudes a la tabla
userRouter.post("/aptitudes/:id", userController.addAptitudes);
//Traer todas las aptitudes
userRouter.get("/aptitudesUser/:id", userController.getAptitudesUser);
//Añadir tarjetas
userRouter.post("/tarjeta/:id", userController.addTarjeta);
//Traer tarjetas por id
userRouter.get("/getTarjeta/:id", userController.getTarjeta);
//Traer tarjetas
userRouter.get("/getAllTarjetas/tarjetas", userController.getAllTarjetas);

export default userRouter;
