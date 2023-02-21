export default function CardEventosPerfilUsuario({ cardEvento }) {
  let diaEvento = `${cardEvento.fechaInicio.split("T")[0].split("-")[2]}`;
  let arrayMeses = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];
  let mesEvento = `${cardEvento.fechaInicio.split("T")[0].split("-")[1]}`;
  return (
    <div class="container pt-5 eventoscard">
      <h1 className="eventos text-center">Evento registrado</h1>
      <div class="row row-striped">
        <div class="col-2 text-right">
          <h1 class="display-4">
            <span class="text-dark">{diaEvento}</span>
          </h1>
          <h2>{arrayMeses[mesEvento - 1]}</h2>
        </div>
        <div class="col-10">
          <h3 class="text-uppercase">
            <strong>{cardEvento.nombre}</strong>
          </h3>
          <ul class="list-inline">
            <li class="list-inline-item">
              <i class="bi bi-envelope text-primary fs-4"></i>{" "}
              {cardEvento.email}
            </li>
            <li class="list-inline-item">
              <i class="bi bi-telephone-fill  text-primary fs-4"></i>{" "}
              {cardEvento.telefono}
            </li>
            <li class="list-inline-item">
              <i class="bi bi-buildings text-primary fs-4"></i>{" "}
              {cardEvento.ciudad}
            </li>
            <li class="list-inline-item">
              <i className="bi bi-geo-alt text-primary fs-4"></i>
              {cardEvento.direccion}
            </li>
            <li class="list-inline-item">
              <i class="bi bi-clock text-primary fs-4 "></i>{" "}
              {cardEvento.horaInicio}
            </li>
            <li class="list-inline-item">
              <i className="bi bi-people-fill text-primary fs-4"></i>{" "}
              {cardEvento.alumnos}/{cardEvento.plazas}
            </li>
          </ul>
          <p>{cardEvento.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
