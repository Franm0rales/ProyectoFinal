import LoginAlumno from "../../components/LoginAlumno/LoginAlumno";
import LoginEmpresa from "../../components/LoginEmpresa/LoginEmpresa";
import Registro from "../../components/Registro/Registro";
import RegistroEmpresa from "../../components/RegistroEmpresa/RegistroEmpresa";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function LoginAcount() {
  const { view, setView } = useAuthContext();
  return (
    <div id="fondo">
      <div className="container">
        <div className="  pt-5">
          <nav className="col-12">
            <ul className="nav nav-tabs px-5">
              <li className="">
                <a
                  type="button"
                  onClick={() => {
                    setView("Alumno");
                  }}
                  className="nav-link active text-white "
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
                  }}
                  className="nav-link active text-white "
                  id="botones"
                >
                  Empresa
                </a>
              </li>
            </ul>
            <div className="d-flex">
              {view === "Alumno" ? <LoginAlumno /> : <LoginEmpresa />}
              {view === "Alumno" ? <Registro /> : <RegistroEmpresa />}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
