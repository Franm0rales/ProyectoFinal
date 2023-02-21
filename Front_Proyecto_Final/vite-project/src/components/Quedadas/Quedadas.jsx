import "./Quedadas.css";

export default function Quedadas() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="pt-5 ">Conoce nuestras quedadas</h1>
        </div>
      </div>

      <div className="row no-gutters modelo basico align-items-end mt-4">
        <div className="col-md-6">
          <div className="contenido bg-white p-5 px-md-0">
            <h3>Releevant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              provident harum autem ratione esse fuga, officiis laboriosam.
              Explicabo sed culpa placeat quis officiis qui eum ducimus delectus
              dolorem! Dignissimos, dolorem?
            </p>
            <a
              href="#"
              id="botones"
              className="btn btn-outline-dark text-uppercase"
            >
              Más información
            </a>
          </div>
        </div>
      </div>

      <div className="row no-gutters modelo premier justify-content-end mt-4">
        <div className="col-md-6">
          <div className="contenido bg-white p-5">
            <h3>Plityx</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              provident harum autem ratione esse fuga, officiis laboriosam.
              Explicabo sed culpa placeat quis officiis qui eum ducimus delectus
              dolorem! Dignissimos, dolorem?
            </p>
            <a
              href="#"
              id="botones"
              className="btn btn-outline-dark text-uppercase"
            >
              Más información
            </a>
          </div>
        </div>
      </div>

      <div className="row no-gutters modelo elite mt-4">
        <div className="col-md-6">
          <div className="contenido bg-white p-5 px-md-0">
            <h3>Accenture</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              provident harum autem ratione esse fuga, officiis laboriosam.
              Explicabo sed culpa placeat quis officiis qui eum ducimus delectus
              dolorem! Dignissimos, dolorem?
            </p>
            <a
              href="#"
              id="botones"
              className="btn btn-outline-dark text-uppercase"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
