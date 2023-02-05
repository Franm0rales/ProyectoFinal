import galeria1 from "../../assets/galeria1.jpg"
import CardEmpresa from "../../components/CardEmpresa/CardEmpresa";
import { useState,useEffect } from "react";

export default function TarjetasAdmin() {
  
    const [users, setUsers] = useState(null);
  useEffect(()=>{
   const fetchData= async ()=> {
      const response = await fetch("http://localhost:3000/user/allUsers");
      const json = await response.json();
      setUsers(json);
    }
    fetchData()
  },[])

  return (
    <div className="">
    <div className=" d-flex px-1 flex-wrap d-grip gap-5">
      
    {users ? (
        users.map((user) => <CardEmpresa key={user.id} nombre={user.nombre} apellidos={user.apellidos} ciudad={user.ciudad} email={user.email} telefono={user.telefono}/>)
      ) : (
        <h4>No hay usuarios cargados...</h4>)}
    </div>
    </div>
  );
}
