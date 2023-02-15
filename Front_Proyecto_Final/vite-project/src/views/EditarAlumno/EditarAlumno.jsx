import SettingsUser from "../../components/SettingUser/SettingUser";
import { useState, useEffect } from "react";
import CardIdAlumno from "../../components/CardIdAlumno/CardIdAlumno";
import { useParams } from "react-router-dom";

export default function EditarAlumno() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const json = await response.json();
      setUsers(json);
    };
    fetchData();
  }, []);

  return (
    <>
      {users ? <CardIdAlumno users={users} /> : <p>Cargando...</p>}

      <SettingsUser />
    </>
  );
}
