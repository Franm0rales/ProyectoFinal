import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardIdEmpresa from "../../components/CarIdEmpresa/CardIdEmpresa";
import SettingsEmpresa from "../../components/SettingEmpresa/SettingEmpresa";

export default function EditarEmpresa() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/user/empresa/${id}`);
      const json = await response.json();
      setUsers(json);
    };
    fetchData();
  }, []);
  console.log(users, "vista");
  return (
    <>
      {users ? <CardIdEmpresa users={users} /> : <p>Cargando...</p>}

      <SettingsEmpresa />
    </>
  );
}
