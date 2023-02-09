export default function Contacto() {
  return (
    <div className="col-4 shadow p-3">
      <h4>Enviar formulario</h4>
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
          <select class="form-select" aria-label=".form-select-sm example">
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
            <button type="submit" className="btn btn-primary">
              Enviar consulta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
