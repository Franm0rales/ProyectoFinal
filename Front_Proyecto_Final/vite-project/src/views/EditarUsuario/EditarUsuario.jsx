import { useEffect, useState } from "react";
import CardEditarUsuario from "../../components/CardEditarUsuario/CardEditarUsuario";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function EditarUsuario() {
  const { authorization } = useAuthContext();
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/user/${authorization.id}`
      );
      const json = await response.json();
      setUser(json);
    };
    fetchData();
  }, []);
  return (
    <>
      {user ? (
        <CardEditarUsuario user={user} setUser={setUser} />
      ) : (
        <p>Cargando...</p>
      )}
      <h1 className="text-center">Resultado Test aptitudes</h1>
    </>
  );
}
