import CardAdmin from "../../components/CardAdmin/CardAdmin";
import { useState,useEffect } from "react";


export default function AlumnosAdmin() {
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
        users.map((user) => <CardAdmin key={user.id} idUsuario={user.idUsuario} nombre={user.nombre} apellidos={user.apellidos} ciudad={user.ciudad} email={user.email} telefono={user.telefono}/>)
      ) : (
        <h4>No hay usuarios cargados...</h4>)}
    </div>
    </div>
  );
}
