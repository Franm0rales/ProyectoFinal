import CrearEvento from "../../components/CrearEvento/CrearEvento";
import EventoEmpresas from "../../components/EventosEmpresas/EventosEmpresas";

export default function AgendaPerfilEmpresa() {
  return (
    <>
    <div id="fondo" className="pt-5 pb-5">
      <h1 className="text-center mt-5 mb-5">Añadir eventos</h1>
      <div className="container">
        <div className="d-flex">
          <CrearEvento />
          <EventoEmpresas />
        </div>
      </div>
      </div>
    </>
  );
}
