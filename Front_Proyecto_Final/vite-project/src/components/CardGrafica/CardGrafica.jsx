import Grafica from "../Grafica/Grafica";

export default function CardGrafica(aptitudes) {
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
                    Servicios sociales (SS) <i class="bi bi-arrow-right"></i>
                  </th>
                  <td>{aptitudes[0]}%</td>
                </tr>
                <tr>
                  <th className="text-start" scope="row">
                    Ejecutivo persuasivo (EP)<i class="bi bi-arrow-right"></i>
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
  );
}
