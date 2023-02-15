import { useEffect, useState } from "react";
import CardEditarUsuario from "../../components/CardEditarUsuario/CardEditarUsuario";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import Grafica from "../../components/Grafica/Grafica";

export default function EditarUsuario() {
  const { authorization } = useAuthContext();
  const [user, setUser] = useState({});
  const [aptitudes, setAptitudes] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/user/${authorization.id}`
      );

      const json = await response.json();
      setUser(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataGrafica = async () => {
      const responseAptitudes = await fetch(
        `http://localhost:3000/user/aptitudesUser/${authorization.id}`
      );

      const jsonAptitudes = await responseAptitudes.json();
      setAptitudes(jsonAptitudes);
    };
    fetchDataGrafica();
  }, []);
  console.log(aptitudes);
  const data = [
    {
      name: "SS",
      Aptitudes: aptitudes[0],
    },
    {
      name: "EP",
      Aptitudes: aptitudes[1],
    },
    {
      name: "V",
      Aptitudes: aptitudes[2],
    },
    {
      name: "AP",
      Aptitudes: aptitudes[3],
    },
    {
      name: "MS",
      Aptitudes: aptitudes[4],
    },
    {
      name: "Og",
      Aptitudes: aptitudes[5],
    },
    {
      name: "Ct",
      Aptitudes: aptitudes[6],
    },
    {
      name: "Cl",
      Aptitudes: aptitudes[7],
    },
    {
      name: "Mc",
      Aptitudes: aptitudes[8],
    },
    {
      name: "Dt",
      Aptitudes: aptitudes[9],
    },
  ];

  return (
    <>
      {user ? (
        <CardEditarUsuario user={user} setUser={setUser} />
      ) : (
        <p>Cargando...</p>
      )}
      {aptitudes[0] === undefined ? (
        <div className="d-flex justify-content-center">
          <a
            href="http://127.0.0.1:5173/test"
            id="botones"
            className="text-white rounded col-3 text-center mb-5 mt-5"
          >
            Realizar test aptitudes
          </a>
        </div>
      ) : (
        <>
          <h1 className="text-center mt-5 mb-5">Resultado Test aptitudes</h1>
          <div className="container mb-5">
            <div className="d-flex align-items-center justify-content-around">
              <div className="text-center">
                <table class="table container ">
                  <thead>
                    <tr>
                      <th
                        id="aptitudes"
                        className="text-white rounded-start"
                        scope="col"
                      >
                        Aptitudes
                      </th>
                      <th
                        id="aptitudes"
                        className=" text-white rounded-end"
                        scope="col"
                      >
                        Porcentaje por aptitud
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-start" scope="row">
                        Servicios sociales (SS){" "}
                        <i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[0]}%</td>
                    </tr>
                    <tr>
                      <th className="text-start" scope="row">
                        Ejecutivo persuasivo (EP)
                        <i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[1]}%</td>
                    </tr>
                    <tr>
                      <th className="text-start" scope="row">
                        Verbal (V) <i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[2]}%</td>
                    </tr>
                    <tr>
                      <th className="text-start" scope="row">
                        Artes plásticas (AP)<i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[3]}%</td>
                    </tr>
                    <tr>
                      <th className="text-start" scope="row">
                        Musical (Ms) <i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[4]}%</td>
                    </tr>
                    <tr>
                      <th className="text-start" scope="row">
                        Organización y oficina (Og){" "}
                        <i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[5]}%</td>
                    </tr>
                    <tr>
                      <th className="text-start" scope="row">
                        Científico (Ct)<i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[6]}%</td>
                    </tr>
                    <tr>
                      <th className="text-start" scope="row">
                        Calculo numerico (Cl) <i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[7]}%</td>
                    </tr>
                    <tr>
                      <th className="text-start" scope="row">
                        Mecanico (Mc) <i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[8]}%</td>
                    </tr>
                    <tr>
                      <th className="text-start" scope="row">
                        Aire libre (Dt) <i class="bi bi-arrow-right"></i>
                      </th>
                      <td>{aptitudes[9]}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <Grafica data={data} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
