import { useState } from "react";
import LoginAlumno from "../../components/LoginAlumno/LoginAlumno";
import LoginEmpresa from "../../components/LoginEmpresa/LoginEmpresa";
import Registro from "../../components/Registro/Registro";
import RegistroEmpresa from "../../components/RegistroEmpresa/RegistroEmpresa";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function LoginAcount() {
  const [view, setView] = useState("Alumno");
  const { toggleUser, user } = useAuthContext();
  console.log(user);
  return (
    <div className="d-flex justify-content-around ">
      <nav className="col-5">
        <ul className="nav nav-tabs justify-content-between">
          <li className="">
            <button
              type="button"
              onClick={() => {
                setView("Alumno");
                toggleUser();
              }}
              className="nav-link text-dark mt-3 btn btn-outline-dark"
            >
              Alumno
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                setView("Empresa");
                toggleUser();
              }}
<<<<<<< HEAD
              className="nav-link  text-dark mt-3 btn btn-outline-dark"
=======
              className="nav-link text-dark mt-3 btn btn-outline-dark"
>>>>>>> 788d8d14aef517c63172f4c7ca84f8ab9e9aed7d
            >
              Empresa
            </button>
          </li>
        </ul>
        {view === "Alumno" ? <LoginAlumno /> : <LoginEmpresa />}
        {view === "Alumno" ? <Registro /> : <RegistroEmpresa />}
      </nav>
    </div>
  );
}
