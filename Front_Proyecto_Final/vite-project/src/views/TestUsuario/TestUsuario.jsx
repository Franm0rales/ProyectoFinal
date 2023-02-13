import { useEffect, useState } from "react";
import PreguntasTest from "../../components/PreguntasTest/PreguntasTest";

export default function TestUsuario() {
  const [test, setTest] = useState([]);
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    const fetchTests = async () => {
      const response = await fetch(`http://localhost:3000/test/${pagination}`);
      const json = await response.json();
      setTest(json);
    };
    fetchTests();
  }, [pagination]);
  return (
    <>
      <h2 id="test" className="section-title mt-5">
        Test aptitudes
      </h2>
      <table class="table container col-8">
        <thead>
          <tr>
            <th scope="col">Respuestas</th>
            <th scope="col">Significado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              3 <i class="bi bi-arrow-right"></i>
            </th>
            <td>"TE CONSIDERAS MUY COMPETENTE"</td>
          </tr>
          <tr>
            <th scope="row">
              2 <i class="bi bi-arrow-right"></i>
            </th>
            <td>"TE CONSIDERAS COMPETENTE"</td>
          </tr>
          <tr>
            <th scope="row">
              1 <i class="bi bi-arrow-right"></i>
            </th>

            <td>"TE CONSIDERAS MEDIANAMENTE COMPETENTE"</td>
          </tr>
          <tr>
            <th scope="row">
              0 <i class="bi bi-arrow-right"></i>
            </th>

            <td>"TE CONSIDERAS INCOMPETENTE"</td>
          </tr>
        </tbody>
      </table>
      {/* <ul className="container">
        <li className="list-unstyled">3 "TE CONSIDERAS MUY COMPETENTE"</li>
        <li className="list-unstyled">2 "TE CONSIDERAS COMPETENTE"</li>
        <li className="list-unstyled">
          1 "TE CONSIDERAS MEDIANAMENTE COMPETENTE"
        </li>
        <li className="list-unstyled">0 "TE CONSIDERAS INCOMPETENTE"</li>
      </ul> */}
      {test ? (
        test.map((pregunta) => (
          <PreguntasTest key={pregunta.id} test={pregunta.pregunta} />
        ))
      ) : (
        <h4>Cargando...</h4>
      )}
      <nav
        aria-label="Page navigation example "
        className="d-flex justify-content-center pt-5"
      >
        <ul class="pagination">
          <li class="page-item">
            <button
              id="botones"
              onClick={() => {
                if (pagination > 0) {
                  setPagination(pagination - 1);
                }
              }}
              class="page-link"
              href="#"
            >
              Previous
            </button>
          </li>

          <li class="page-item">
            <button
              id="botones"
              onClick={() => {
                if (pagination < 3) {
                  setPagination(pagination + 1);
                }
              }}
              class="page-link"
              href="#"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
