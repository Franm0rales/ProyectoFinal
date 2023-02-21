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
        `http://localhost:3000/user/getTarjeta/${authorization.id}`
      );
      const jsoneventos = await responseEventos.json();
      setEventos(jsoneventos);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataComentarios = async () => {
      const responseComentarios = await fetch(
        `http://localhost:3000/user/getComentariosByIdTarjeta/${idTarjeta}`
      );
      const jsonComentarios = await responseComentarios.json();
      setComentarios(jsonComentarios);
    };
    fetchDataComentarios();
  }, [idTarjeta]);

  return (
    <>
      <div className="container">
        <div className="bubbles">
        <h1 className="pt-5  text-center"></h1>
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
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
}
