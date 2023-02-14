import { useEffect, useState } from "react";
import PreguntasTest from "../../components/PreguntasTest/PreguntasTest";

export default function TestUsuario() {
  const value = [0, 1, 2, 3];
  const [test, setTest] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [numeros, setNumeros] = useState([]);
  let suma = 0;
  useEffect(() => {
    const fetchTests = async () => {
      const response = await fetch(`http://localhost:3000/test/${pagination}`);
      const json = await response.json();
      setTest(json);
    };
    fetchTests();
  }, [pagination]);

  const actualizarNumero = (index, event) => {
    const nuevoValor = parseInt(event.target.value);
    numeros[index] = nuevoValor;
    console.log(numeros);
  };

  function agregarNumeros() {
    for (let i of numeros) {
      suma += i;
    }
  }

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
      {test ? (
        test.map((pregunta) => (
          <div className="container mt-sm-5 my-1" key={pregunta.id}>
            <form onSubmit={() => agregarNumeros}>
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
                    <input
                      value={value[0]}
                      type="radio"
                      name={pregunta.id}
                      onChange={(e) => actualizarNumero(pregunta.id, e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="options">
                    1
                    <input
                      value={value[1]}
                      type="radio"
                      name={pregunta.id}
                      onChange={(e) => actualizarNumero(pregunta.id, e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="options">
                    2
                    <input
                      value={value[2]}
                      type="radio"
                      name={pregunta.id}
                      onChange={(e) => actualizarNumero(pregunta.id, e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="options">
                    3
                    <input
                      value={value[3]}
                      type="radio"
                      name={pregunta.id}
                      onChange={(e) => actualizarNumero(pregunta.id, e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </form>
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
                agregarNumeros();
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
                } else {
                  agregarNumeros();
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
