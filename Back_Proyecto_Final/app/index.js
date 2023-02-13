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

dotenv.config();

const app = express();
// --- middlewares de express ---
app.use(express.json());
app.use(express.text());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

//Definir punto entrada rutas del proyecto
app.use("/user", userRouter);
app.use("/test", testRouter);

export default app;
