import { useState } from "react";
import LoginAlumno from "../../components/LoginAlumno/LoginAlumno";
import LoginEmpresa from "../../components/LoginEmpresa/LoginEmpresa";
import Registro from "../../components/Registro/Registro";


export default function LoginAcount(){
    const [view,setView] = useState("Alumno")
    return(
        <div className="d-flex  justify-content-around pt-5">
            <nav className="">
            <ul className="nav nav-tabs">
                 <li className="nav-item">
                    <a onClick={()=>setView("Alumno")} className="nav-link active text-dark "  >Alumno</a>
                </li>
                <li className="nav-item">
                    <a onClick={()=>setView("Empresa")} className="nav-link  text-dark" >Empresa</a>
                </li>
           </ul>
            </nav>
        {view === "Alumno" ? <LoginAlumno/> : <LoginEmpresa/>}
        <Registro/>
        </div>
        
    )
}