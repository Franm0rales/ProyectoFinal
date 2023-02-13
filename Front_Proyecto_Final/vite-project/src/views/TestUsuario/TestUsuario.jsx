import { useState } from "react";
import PreguntasTest from "../../components/PreguntasTest/PreguntasTest";

export default function TestUsuario() {
  const [test, setTest] = useState([]);
  async () => {
    const response = await fetch(
      `http://localhost:3000/user/${authorization.id}`
    );
    const json = await response.json();
    setTest(json);
  };
  return (
    <>
      <h2 id="test" className="section-title mt-5">
        Test vocacional
      </h2>
      {test ? (
        test.map((pregunta) => <PreguntasTest key={index} test={pregunta} />)
      ) : (
        <h4>Cargando...</h4>
      )}
    </>
  );
}
