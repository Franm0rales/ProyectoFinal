export default function EmpresasParaVista() {
  return (
    <div className="container">
      <div class="card event-card mb-4">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="evento.jpg" class="card-img" alt="Imagen del evento" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Nombre del evento</h5>
              <p class="card-text">Descripción breve del evento.</p>
              <p class="card-text">
                <small class="text-muted">Fecha del evento</small>
              </p>
            </div>
          </div>
        </div>
        <div class="card-overlay">
          <div class="card-overlay-text">
            <h5 class="card-title">Nombre del evento</h5>
            <p class="card-text">Descripción breve del evento.</p>
            <p class="card-text">
              <small class="text-muted">Fecha del evento</small>
            </p>
            <a id="botones" href="#" class="btn btn-primary">
              Más información
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
