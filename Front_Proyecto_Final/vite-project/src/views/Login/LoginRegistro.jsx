import LoginAlumno from "../../components/LoginAlumno/LoginAlumno";
import LoginEmpresa from "../../components/LoginEmpresa/LoginEmpresa";
import Registro from "../../components/Registro/Registro";
import RegistroEmpresa from "../../components/RegistroEmpresa/RegistroEmpresa";
import { useState } from "react";

export default function LoginAcount() {
  const [view, setView] = useState("Alumno");
  const [showRegistration, setShowRegistration] = useState(false);
  const [activeTab, setActiveTab] = useState("Alumno");

  function BotonRegistro() {
    return (
      <div className="container text-center">
        {" "}
        <p>
          {" "}
          Todavía no te has registrado.
          <a onClick={() => setShowRegistration(true)} className="mb-5 cursor">
            Regístrate
          </a>
        </p>{" "}
      </div>
    );
  }

  return (
    <div id="fondo">
      <div className="container">
        <div className="  pt-5 d-flex justify-content-center">
          <nav className="col-6">
            <ul className="nav nav-tabs px-5">
              <li className="">
                <a
                  type="button"
                  onClick={() => {
                    setView("Alumno");
                    setShowRegistration(false);
                    setActiveTab("Alumno");
                  }}
                  className={`nav-link active text-white ${
                    activeTab === "Alumno" ? "active-tab" : ""
                  }`}
                  id="botones"
                >
                  Alumno
                </a>
              </li>
              <li className="">
                <a
                  type="button"
                  onClick={() => {
                    setView("Empresa");
                    setShowRegistration(false);
                    setActiveTab("Empresa");
                  }}
                  className={`nav-link active text-white ${
                    activeTab === "Empresa" ? "active-tab" : ""
                  }`}
                  id="botones"
                >
                  Empresa
                </a>
              </li>
            </ul>
            <div className="d-flex">
              {view === "Alumno" && !showRegistration ? <LoginAlumno /> : null}
              {view === "Empresa" && !showRegistration ? (
                <LoginEmpresa />
              ) : null}
              {showRegistration && (
                <div className="d-flex">
                  {view === "Alumno" ? <Registro /> : <RegistroEmpresa />}
                </div>
              )}
            </div>
            {!showRegistration && (
              <div className="d-flex flex-column">
                <BotonRegistro />
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
