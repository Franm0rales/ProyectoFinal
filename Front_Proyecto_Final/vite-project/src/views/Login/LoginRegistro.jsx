import { useState } from "react";
import LoginAlumno from "../../components/LoginAlumno/LoginAlumno";
import LoginEmpresa from "../../components/LoginEmpresa/LoginEmpresa";
import Registro from "../../components/Registro/Registro";
import RegistroEmpresa from "../../components/RegistroEmpresa/RegistroEmpresa";


export default function LoginAcount(){
    const [view,setView] = useState("Alumno")
    return(
        <div className="d-flex  justify-content-around pt-5">
            <nav className="col-5">
            <ul className="nav nav-tabs px-5">
                 <li className="">
                    <a type="button" onClick={()=>setView("Alumno")} className="nav-link active text-dark "  >Alumno</a>
                </li>
                <li className="">
                    <a type="button" onClick={()=>setView("Empresa")} className="nav-link active text-dark" >Empresa</a>
                </li>
           </ul>
        {view === "Alumno" ? <LoginAlumno/> : <LoginEmpresa/> }
        {view === "Alumno" ? <Registro/> : <RegistroEmpresa/> }

       
            </nav>
           
        </div>
        
    )
}