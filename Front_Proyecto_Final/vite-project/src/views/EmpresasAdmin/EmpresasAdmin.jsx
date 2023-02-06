import CardEmpresa from "../../components/CardEmpresa/CardEmpresa";
import { useState, useEffect } from "react";
export default function EmpresasAdmin() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/user/allEmpresa");
      const json = await response.json();
      setUsers(json);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <div className=" d-flex px-1 flex-wrap d-grip gap-5">
        {users ? (
          users.map((user) => (
            <CardEmpresa
              key={user.id}
              idUsuario={user.idUsuario}
              nombre={user.nombre}
              descripcion={user.descripcion}
              ciudad={user.ciudad}
              direccion={user.direccion}
              email={user.email}
              telefono={user.telefono}
            />
          ))
        ) : (
          <h4>No hay usuarios cargados...</h4>
        )}
      </div>
    </div>
  );
}
