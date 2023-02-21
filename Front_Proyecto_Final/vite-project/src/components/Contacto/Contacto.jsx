export default function Contacto() {
  return (
    <>
      <div className="container">
        <p className=" text-animado text-center fs-5">
          ¿ Quieres saber como seria el trabajo de tus sueños?
          <span className="texto-contacto text-center">Horizons</span>
          &mdash; Contacta con empresas &mdash;
        </p>
        <div className="d-flex justify-content-center">
          <div className="col-4 shadow p-3 mt-5 mb-5">
            <h2 id="test">Enviar formulario</h2>
            <form>
              <div className="border rounded p-3 ">
                <div className="pt-2">
                  <span className="fw-bold">Correo electrónico</span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="pt-2">
                  <span className="fw-bold">Asunto</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="pt-2">
                  <span className="fw-bold">¿Sobre qué trata?</span>
                </div>
                <select
                  class="form-select"
                  aria-label=".form-select-sm example"
                >
                  <option selected>-</option>
                  <option value="1">Devolución</option>
                  <option value="2">Garantía</option>
                  <option value="3">Consulta</option>
                </select>
                <div className="pt-2">
                  <span className="fw-bold">Detalla la consulta</span>
                </div>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <div className="pt-3">
                  <button id="botones" type="submit" className="btn text-white">
                    Enviar consulta
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
