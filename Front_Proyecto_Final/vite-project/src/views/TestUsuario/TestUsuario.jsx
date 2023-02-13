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
        Test vocacional
      </h2>
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
