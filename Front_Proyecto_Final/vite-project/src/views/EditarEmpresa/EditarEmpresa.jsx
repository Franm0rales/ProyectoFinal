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
  const [comments, setComments] = useState(true);
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
      console.log(eventos);
    };
    fetchData();

    console.log(users);
  }, []);

  useEffect(() => {
    const fetchDataComentarios = async () => {
      const responseComentarios = await fetch(
        `http://localhost:3000/user/getComentariosByIdTarjeta/${idTarjeta}`
      );
      const jsonComentarios = await responseComentarios.json();
      setComentarios(jsonComentarios);
      console.log(comentarios, "comentarios", idTarjeta);
    };
    fetchDataComentarios();
  }, [comments]);

  return (
    <>
      <div className="container">
        {users ? <CardIdEmpresa users={users} /> : <p>Cargando...</p>}

        {/* <SettingsEmpresa /> */}
        <h1 className="text-center pt-5">Eventos</h1>
        {eventos ? (
          eventos.map((evento) => (
            <ComentariosPerfilEmpresa
              key={evento.id}
              evento={evento}
              setIdTarjeta={setIdTarjeta}
              comentarios={comentarios}
              setComments={setComments}
              comments={comments}
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
}
