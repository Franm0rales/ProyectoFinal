export default function Contacto() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-4 shadow p-3 mt-5 mb-5 rounded">
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
    </>
  );
}
