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
//Añadir respuesta del comentario
tarjetaRouter.post("/addRespuesta", tarjetaController.addRespuesta);
//Traer respuestas con comentarios
tarjetaRouter.get(
  "/getRespuestasByIdComentario/:id",
  tarjetaController.getRespuestasByIdComentario
);
//Traer tarjetas por filtros
tarjetaRouter.get(
  "/getTarjetaFilters/:query",
  tarjetaController.getTarjetasFilters
);

export default tarjetaRouter;
