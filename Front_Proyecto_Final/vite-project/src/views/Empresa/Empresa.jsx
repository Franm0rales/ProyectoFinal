import CrearEvento from "../../components/CrearEvento/CrearEvento";
import EmpresasParaVista from "../../components/EmpresasParaVista/EmpresasParaVista";

import Webcam from "../../components/Webcam/Webcam";

export default function Empresa() {
  const resultados = [
    { pregunta: 1, respuesta: "Opción A" },
    { pregunta: 2, respuesta: "Opción B" },
    { pregunta: 3, respuesta: "Opción C" },
    { pregunta: 1, respuesta: "Opción B" },
    { pregunta: 2, respuesta: "Opción A" },
    { pregunta: 3, respuesta: "Opción D" },
    { pregunta: 1, respuesta: "Opción C" },
    { pregunta: 2, respuesta: "Opción C" },
    { pregunta: 3, respuesta: "Opción A" },
  ];

  return (
    <>
      {/* <Resultados resultados={resultados} /> */}
      <EmpresasParaVista />

      <Webcam />
      <CrearEvento />
    </>
  );
}
