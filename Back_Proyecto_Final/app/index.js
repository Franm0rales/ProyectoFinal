//inicializar proyecto, (npm init)
//copiar carpeta bin de otro ejercicio
//crear archivo .env
//npm i express dotenv morgan nodemon cors -E

//En package.json, cambiar el script por:     "start": "nodemon ./app/bin/www.js"
//Encima de script:   "type" :"module",

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user_router.js";
import testRouter from "./routes/test_router.js";
import tarjetaRouter from "./routes/tarjeta_router.js";
import fileUpload from "express-fileupload";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();

dotenv.config();

// Función para utilizar path en ES Modules (exportamos para utilizarla globalmente)
export function currentDir() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return { __dirname, __filename };
}

const { __dirname } = currentDir();

// --- middlewares de express ---
app.use(express.json());
app.use(express.text());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.static(join(__dirname, "public")));

// instanciamos la librería file upload y le añadimos propiedades.
app.use(
  fileUpload({
    createParentPath: true, // Crea la carpeta donde almacenamos las imágenes si no ha sido creada.
    limits: { fileSize: 20 * 1024 * 1024 }, // Limitamos el tamaño de la imagen a 20mb. Por defecto son 50mb.
    abortOnLimit: true, // Interrumpe la carga del archivo si supera el límite especificado.
    responseOnLimit: "Imagen demasiado grande", // Enviamos un mensaje de respuesta cuando se interrumpe la carga.
    uploadTimeout: 0, // Indicamos el tiempo de respuesta si se interrumpe la carga de la imagen.
  })
);

//Definir punto entrada rutas del proyecto
app.use("/user", userRouter);
app.use("/test", testRouter);
app.use("/tarjeta", tarjetaRouter);

export default app;
