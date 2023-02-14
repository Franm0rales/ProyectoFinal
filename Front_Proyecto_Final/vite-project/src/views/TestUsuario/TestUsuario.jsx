import { useEffect, useState } from "react";
import PreguntasTest from "../../components/PreguntasTest/PreguntasTest";

export default function TestUsuario() {
  let suma = 0;
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

  function sumar(x) {
    suma = suma + x;
  }
  return (
    <>
      <h2 id="test" className="section-title mt-5">
        Test vocacional
      </h2>
      {test ? (
        test.map((pregunta) => (
          <div className="container mt-sm-5 my-1" key={pregunta.id}>
            <div className="question ml-sm-5 pl-sm-5 pt-2">
              <div className="py-2 h5">
                <b>{pregunta.pregunta}</b>
              </div>
              <div
                className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3"
                id="options"
              >
                <label className="options">
                  0
                  <input value="0" type="radio" name={pregunta.id} />
                  <span className="checkmark"></span>
                </label>
                <label className="options">
                  1
                  <input value="1" type="radio" name={pregunta.id} />
                  <span className="checkmark"></span>
                </label>
                <label className="options">
                  2
                  <input value="2" type="radio" name={pregunta.id} />
                  <span className="checkmark"></span>
                </label>
                <label className="options">
                  3
                  <input value="3" type="radio" name={pregunta.id} />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h4>Cargando...</h4>
      )}
      <nav
        aria-label="Page navigation example "
        className="d-flex justify-content-center pt-5"
      >
        <ul className="pagination">
          <li className="page-item">
            <button
              id="botones"
              onClick={() => {
                if (pagination > 0) {
                  setPagination(pagination - 1);
                }
              }}
              className="page-link"
              href="#"
            >
              Previous
            </button>
          </li>

          <li className="page-item">
            <button
              id="botones"
              onClick={() => {
                if (pagination < 3) {
                  setPagination(pagination + 1);
                }
              }}
              className="page-link"
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
