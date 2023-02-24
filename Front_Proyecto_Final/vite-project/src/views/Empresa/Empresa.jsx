import { useState, useEffect } from "react";
import CrearEvento from "../../components/CrearEvento/CrearEvento";
import EmpresasParaVista from "../../components/EmpresasParaVista/EmpresasParaVista";

import Webcam from "../../components/Webcam/Webcam";

export default function Empresa() {
  const [empresa, setEmpresa] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/user/allEmpresa`);
      const json = await response.json();
      setEmpresa(json);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <Resultados resultados={resultados} /> */}
      {empresa && <EmpresasParaVista empresas={empresa} />}

      {/* <Webcam />
      <CrearEvento /> */}
    </>
  );
}
