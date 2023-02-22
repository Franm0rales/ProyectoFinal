import { useState, useEffect } from "react";
import CardIdEmpresa from "../../components/CarIdEmpresa/CardIdEmpresa";
import ComentariosPerfil from "../../components/ComentariosPerfil/ComentariosPerfil";
import ComentariosPerfilEmpresa from "../../components/ComentariosPerfilEmpresa/ComentariosPerfilEmpresa";
import SettingsEmpresa from "../../components/SettingEmpresa/SettingEmpresa";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function EditarEmpresa() {
  const { authorization } = useAuthContext();
  const [comentarios, setComentarios] = useState([]);
  const [eventos, setEventos] = useState(null);
  const [idTarjeta, setIdTarjeta] = useState(0);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/user/empresa/${authorization.id}`
      );
      const json = await response.json();
      setUsers(json);
      const responseEventos = await fetch(
        `http://localhost:3000/tarjeta/getTarjeta/${authorization.id}`
      );
      const jsoneventos = await responseEventos.json();
      setEventos(jsoneventos);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataComentarios = async () => {
      const responseComentarios = await fetch(
        `http://localhost:3000/tarjeta/getComentariosByIdTarjeta/${idTarjeta}`
      );
      const jsonComentarios = await responseComentarios.json();
      setComentarios(jsonComentarios);
    };
    fetchDataComentarios();
  }, [idTarjeta]);
  // Seleccionar el contenedor del loader
  const loaderContainer = document.getElementById("loader-container");

  // Esperar 2 segundos y agregar la clase "loaded"
  setTimeout(function () {
    loaderContainer.classList.add("loaded");
  }, 2000);

  return (
    <>
      <div className="container">
        <div className="bubbles">
          {users ? (
            <h1 className="pt-3 pb-2 texto-contacto text-center">
              {" "}
              {users.nombre}
            </h1>
          ) : (
            <div id="loader-container">
              <div class="loader"></div>
            </div>
          )}
        </div>

        {users ? <CardIdEmpresa users={users} /> : <p>Cargando...</p>}

        {/* <SettingsEmpresa /> */}
        <div className="pt-5">
          <h1 className="pt-5 pb-2 text-center">Eventos creados</h1>
        </div>

        {eventos ? (
          eventos.map((evento) => (
            <ComentariosPerfilEmpresa
              key={evento.id}
              evento={evento}
              setIdTarjeta={setIdTarjeta}
              comentarios={comentarios}
            />
          ))
        ) : (
          <div id="loader-container">
            <div class="loader"></div>
          </div>
        )}
      </div>
    </>
  );
}
