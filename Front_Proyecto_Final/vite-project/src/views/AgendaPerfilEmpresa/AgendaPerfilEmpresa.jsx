import CrearEvento from "../../components/CrearEvento/CrearEvento";
import EventoEmpresas from "../../components/EventosEmpresas/EventosEmpresas";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useState } from "react";
export default function AgendaPerfilEmpresa() {
  const [test, setTest] = useState([]);
  const { authorization } = useAuthContext();
  const fetchCalendario = async () => {
    const response = await fetch(
      `http://localhost:3000/tarjeta/getTarjeta/${authorization.id}`
    );
    const json = await response.json();
    setTest(json);
  };

  return (
    <>
      <div id="fondo" className="pt-5 pb-5">
        <h1 className="text-center mt-5 mb-5">Añadir eventos</h1>
        <div className="container">
          <div className="d-flex">
            <CrearEvento fetchCalendario={fetchCalendario} />
            <EventoEmpresas fetchCalendario={fetchCalendario} test={test} />
          </div>
        </div>
      </div>
    </>
  );
}
