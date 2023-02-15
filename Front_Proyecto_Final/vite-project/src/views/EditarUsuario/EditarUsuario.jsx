import { useEffect, useState } from "react";
import CardEditarUsuario from "../../components/CardEditarUsuario/CardEditarUsuario";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function EditarUsuario() {
  const { authorization } = useAuthContext();
  const [user, setUser] = useState({});
  const [aptitudes, setAptitudes] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/user/${authorization.id}`
      );
      const responseAptitudes = await fetch(
        `http://localhost:3000/user/aptitudesUser/${authorization.id}`
      );

      const jsonAptitudes = await responseAptitudes.json();
      setAptitudes(jsonAptitudes);
      const json = await response.json();
      setUser(json);
    };
    fetchData();
  }, []);

  return (
    <>
      {user ? (
        <CardEditarUsuario user={user} setUser={setUser} />
      ) : (
        <p>Cargando...</p>
      )}
      <h1 className="text-center mt-5 mb-5">Resultado Test aptitudes</h1>
      <table class="table container col-8">
        <thead>
          <tr>
            <th scope="col">Aptitudes</th>
            <th scope="col">Porcentaje por aptitud</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              Servicios sociales (SS) <i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.servicioSocial}%</td>
          </tr>
          <tr>
            <th scope="row">
              Ejecutivo persuasivo (EP)<i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.ejecutivoPersuasivo}%</td>
          </tr>
          <tr>
            <th scope="row">
              Verbal (V) <i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.verbal}%</td>
          </tr>
          <tr>
            <th scope="row">
              Artes plásticas (AP)<i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.artesPlasticas}%</td>
          </tr>
          <tr>
            <th scope="row">
              Musical (Ms) <i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.musical}%</td>
          </tr>
          <tr>
            <th scope="row">
              Organización y oficina (Og) <i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.organizacionOficina}%</td>
          </tr>
          <tr>
            <th scope="row">
              Científico (Ct)<i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.cientifico}%</td>
          </tr>
          <tr>
            <th scope="row">
              Calculo numerico (Cl) <i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.calculoNumerico}%</td>
          </tr>
          <tr>
            <th scope="row">
              Mecanico (Mc) <i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.mecanico}%</td>
          </tr>
          <tr>
            <th scope="row">
              Aire libre (Dt) <i class="bi bi-arrow-right"></i>
            </th>
            <td>{aptitudes.aireLibre}%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
