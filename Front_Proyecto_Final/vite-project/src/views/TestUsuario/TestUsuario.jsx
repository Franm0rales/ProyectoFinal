import { useEffect, useState } from "react";
import PreguntasTest from "../../components/PreguntasTest/PreguntasTest";

export default function TestUsuario() {
  const [test, setTest] = useState([]);
  useEffect(() => {
    const fetchTests = async () => {
      const response = await fetch(`http://localhost:3000/test/`);
      const json = await response.json();
      setTest(json);
    };
    fetchTests();
  }, []);
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
    </>
  );
}
