import { useState, useEffect } from "react";
import CardIdEmpresa from "../../components/CarIdEmpresa/CardIdEmpresa";
import SettingsEmpresa from "../../components/SettingEmpresa/SettingEmpresa";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function EditarEmpresa() {
  const { authorization } = useAuthContext()
  
console.log(authorization,"hola");
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/user/empresa/${authorization.id}`);
      const json = await response.json();
      setUsers(json);
    };
    fetchData();
    console.log(users);
  }, []);


  return (
    <>
      <div className="container">
        {users ? <CardIdEmpresa users={users} /> : <p>Cargando...</p>}

        <SettingsEmpresa />
      </div>
    
    </>
  );
}
