import dao from "../services/dao.js";
import md5 from "md5";
import { currentDir } from "../index.js";
import { role, data, tables } from "../const/const.js";
import { transporter } from "../config/mailer.js";

const __dirname = currentDir().__dirname;

const controller = {};

//Añadir tarjetas
controller.addTarjeta = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    descripcion,
    email,
    telefono,
    direccion,
    ciudad,
    plazas,
    fechaFin,
    horaInicio,
    fechaInicio,
  } = req.body;
  try {
    // // Controlamos cuando el objeto files sea null
    // if (req.files === null) return;
    // // Controlamos si nos viene algún tipo de archivo en el objeto files
    // if (!req.files || Object.keys(req.files).length === 0) {
    //   return res.status(400).send("No se ha cargado ningún archivo");
    // }
    // // 1 archivo [{}] , >1 archivo [[{},{},...]]
    // // Obtenemos un array de objetos con todas las imagenes
    // const images = !req.files.imagen.length
    //   ? [req.files.imagen]
    //   : req.files.imagen;
    // // Recorremos el array para procesar cada imagen
    // images.forEach(async (image) => {
    //   // Ya podemos acceder a las propiedades del objeto image.
    //   // Obtenemos la ruta de la imagen.
    //   let uploadPath = __dirname + "/public/images/products/" + image.name;
    //   let uploadRelPath = "/images/products/" + image.name;
    //   // Usamos el método mv() para ubicar el archivo en nuestro servidor
    //   image.mv(uploadPath, (err) => {
    //     if (err) return res.status(500).send(err);
    // });
    const tarjetaObj = {
      nombre: nombre,
      descripcion: descripcion,
      email: email,
      telefono: telefono,
      direccion: direccion,
      ciudad: ciudad,
      // imagen: uploadRelPath,
      idEmpresa: id,
      plazas: plazas,
      fechaInicio: `${fechaInicio}T${horaInicio}:00Z`,
      fechaFin: `${fechaFin}T24:00:00Z`,
      horaInicio: horaInicio,
    };
    await dao.addUser(tarjetaObj, data.tarjeta);
    // });
    return res.send("Tarjeta subida!");
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};
//Controlador para traer tarjetas por idEmpresa
controller.getTarjetaEmpresa = async (req, res) => {
  let i = 0;
  try {
    let tarjetas = await dao.getUserByData(
      data.tarjeta,
      data.idEmpresa,
      req.params.id
    );
    // Si no existe el producto respondemos con un 404 (not found)
    if (tarjetas.length <= 0) return res.status(404).send("No hay usuarios");
    let tarjetaObj = [];
    for (let tarjeta of tarjetas) {
      tarjeta = {
        id: tarjeta.id,
        title: tarjeta.nombre,
        start: tarjeta.fechaInicio,
        end: tarjeta.fechaFin,
        plazas: tarjeta.plazas,
        alumnos: tarjeta.alumnos,
        horaInicio: tarjeta.horaInicio,
        mediaRating: tarjeta.mediaRating,
        comentariosAlumnos: tarjeta.comentariosAlumnos,
      };
      tarjetaObj[i] = tarjeta;
      i++;
    }
    return res.send(tarjetaObj);
  } catch (e) {
    console.log(e.message);
  }
};
//Controlador para traer tarjetas por idUsuario
controller.getTarjetaUsario = async (req, res) => {
  try {
    let user = await dao.getUserByData(
      data.alumno,
      data.idUsuario,
      req.params.id
    );
    [user] = user;
    let tarjetas = await dao.getUserByData(
      data.tarjeta,
      data.id,
      user.idTarjeta
    );
    // Si no existe el producto respondemos con un 404 (not found)
    if (tarjetas.length <= 0) return res.status(404).send("No hay tarjetas");
    [tarjetas] = tarjetas;
    return res.send(tarjetas);
  } catch (e) {
    console.log(e.message);
  }
};
//Controlador para traer todas las tarjetas
controller.getAllTarjetas = async (req, res) => {
  try {
    let tarjetas = await dao.getAllData(data.tarjeta, data.fechaInicio);
    // Si no existe el producto respondemos con un 404 (not found)
    if (tarjetas.length <= 0) return res.status(404).send("No hay tarjetas");
    return res.send(tarjetas);
  } catch (e) {
    console.log(e.message);
  }
};
//Buscar de tarjetas por nombre
controller.getTarjetaByNombre = async (req, res) => {
  const { nombre } = req.params;
  try {
    let tarjetas = await dao.getTarjetaByData(
      data.tarjeta,
      data.nombre,
      nombre
    );
    // Si no existe el producto respondemos con un 404 (not found)
    if (tarjetas.length <= 0) return res.status(404).send("No hay tarjetas");
    return res.send(tarjetas);
  } catch (e) {
    console.log(e.message);
  }
};
//Unirse a un evento
controller.unirseEvento = async (req, res) => {
  const { idUsuario, idEvento } = req.body;
  try {
    let user = await dao.getUserByData(tables[2], data.idUsuario, idUsuario);
    [user] = user;
    const oldIdTarjeta = user.idTarjeta;
    console.log(oldIdTarjeta, "oldIdTarjeta");
    // if (oldIdTarjeta !== idEvento)
    //   return res.status(409).send("Usuario ya registrado en un evento");
    const eventoObj = {
      idTarjeta: idEvento,
    };
    console.log(eventoObj, "eventoObj");
    await dao.updateUser(data.alumno, idUsuario, eventoObj, data.idUsuario);

    let contador = await dao.contadorByData(
      data.alumno,
      data.idTarjeta,
      idEvento
    );
    [contador] = contador;
    const contadorObj = {
      alumnos: contador.contador,
    };
    console.log(contadorObj, "contadorObj");
    await dao.updateUser(data.tarjeta, idEvento, contadorObj, data.id);
    let contadorAntiguo = await dao.contadorByData(
      data.alumno,
      data.idTarjeta,
      oldIdTarjeta
    );
    [contadorAntiguo] = contadorAntiguo;
    const contadorAntiguoObj = {
      alumnos: contadorAntiguo.contador,
    };
    console.log(contadorAntiguoObj, "contadorAntiguoObj");
    await dao.updateUser(
      data.tarjeta,
      oldIdTarjeta,
      contadorAntiguoObj,
      data.id
    );
    return res.status(200).send();
  } catch (e) {
    console.log(e.message);
  }
};
//Añadir comentario a evento
controller.addComentario = async (req, res) => {
  const { idUsuario, idTarjeta, comentario, rating } = req.body;
  try {
    const eventoObj = {
      idTarjeta: 0,
    };
    await dao.updateUser(data.alumno, idUsuario, eventoObj, data.idUsuario);
    const comentarioObj = {
      idUsuario: idUsuario,
      idTarjeta: idTarjeta,
      comentario: comentario.comentario,
      rating: rating,
    };
    await dao.addUser(comentarioObj, data.comentarios);
    let contador = await dao.contadorByData(
      data.comentarios,
      data.idTarjeta,
      idTarjeta
    );
    [contador] = contador;
    let suma = await dao.sumByData(
      data.comentarios,
      data.rating,
      data.idTarjeta,
      idTarjeta
    );
    [suma] = suma;
    let ratingObj = {
      mediaRating: suma.suma / contador.contador,
      comentariosAlumnos: contador.contador,
    };
    await dao.updateUser(data.tarjeta, idTarjeta, ratingObj, data.id);
    return res.status(200).send();
  } catch (e) {
    console.log(e.message);
  }
};
//Traer todos los comentarios
controller.getAllComentarios = async (req, res) => {
  try {
    let comentarios = await dao.getJoin();
    return res.status(200).send(comentarios);
  } catch (e) {
    console.log(e.message);
  }
};
//Traer comentarios por idTarjeta
controller.getComentariosByIdTarjeta = async (req, res) => {
  const { id } = req.params;
  try {
    let comentarios = await dao.getUserByData(
      data.comentarios,
      data.idTarjeta,
      id
    );
    console.log(comentarios, "comentarios");
    let tarjeta = await dao.getUserByData(data.tarjeta, data.id, id);
    console.log(tarjeta);
    if (comentarios.length <= 0) {
      return res.status(200).send([]);
    }
    let comentariosObj = [];
    for (let i = 0; i < comentarios.length; i++) {
      let user = await dao.getUserByData(
        data.alumno,
        data.idUsuario,
        comentarios[i].IdUsuario
      );
      [user] = user;
      comentariosObj[i] = {
        comentario: comentarios[i].comentario,
        idUsuario: comentarios[i].IdUsuario,
        idTarjeta: comentarios[i].IdTarjeta,
        rating: comentarios[i].rating,
        nombre: user.nombre,
        apellidos: user.apellidos,
        email: user.email,
        avatar: user.avatar,
        telefono: user.telefono,
      };
    }
    console.log(comentariosObj);
    return res.status(200).send(comentariosObj);
  } catch (e) {
    console.log(e.message);
  }
};
//Traer comentarios por idUsuario
controller.getComentariosByIdUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    let comentarios = await dao.getUserByData(
      data.comentarios,
      data.idUsuario,
      id
    );
    return res.status(200).send(comentarios);
  } catch (e) {
    console.log(e.message);
  }
};
//Traer alumnos por idTarjeta
controller.getUsersByidTarjeta = async (req, res) => {
  const { id } = req.params;
  try {
    let users = await dao.getUserByData(data.alumno, data.idTarjeta, id);
    return res.status(200).send(users);
  } catch (e) {}
};
//Traer numero de eventos
controller.getNumberOfEventos = async (req, res) => {
  try {
    let eventos = await dao.contadorByDataNoFilter(data.tarjeta);
    [eventos] = eventos;
    return res.status(200).send(eventos);
  } catch (e) {
    console.log(e.message);
  }
};
export default controller;
