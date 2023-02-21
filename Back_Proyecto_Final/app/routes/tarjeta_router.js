import express from "express";
import tarjetaController from "../controller/tarjeta_controller.js";
const tarjetaRouter = express.Router();

//Añadir tarjetas
tarjetaRouter.post("/tarjeta/:id", tarjetaController.addTarjeta);
//Traer tarjetas por idEmpresa
tarjetaRouter.get("/getTarjeta/:id", tarjetaController.getTarjetaEmpresa);
//Traer tarjeta por alumno
tarjetaRouter.get("/getTarjetaUsuario/:id", tarjetaController.getTarjetaUsario);
//Traer tarjetas
tarjetaRouter.get("/getAllTarjetas/tarjetas", tarjetaController.getAllTarjetas);
//Buscar tarjetas por nombre
tarjetaRouter.get(
  "/getTarjetaByNombre/:nombre",
  tarjetaController.getTarjetaByNombre
);
//Unirse a evento
tarjetaRouter.patch("/unirseEvento", tarjetaController.unirseEvento);
//Añadir comentario
tarjetaRouter.post("/addComentario", tarjetaController.addComentario);
//Traer comentarios por idTarjeta
tarjetaRouter.get(
  "/getComentariosByIdTarjeta/:id",
  tarjetaController.getComentariosByIdTarjeta
);
//Traer comentarios por idUsuario
tarjetaRouter.get(
  "/getComentariosByIdUsuario/:id",
  tarjetaController.getComentariosByIdUsuario
);
//Traer usuarios por idTarjeta
tarjetaRouter.get(
  "/getUsersByidTarjeta/:id",
  tarjetaController.getUsersByidTarjeta
);
//Traer numeros de eventos
tarjetaRouter.get("/getNumberOfEventos", tarjetaController.getNumberOfEventos);
//Traer todos los comentarios
tarjetaRouter.get("/getAllComentarios", tarjetaController.getAllComentarios);

export default tarjetaRouter;
