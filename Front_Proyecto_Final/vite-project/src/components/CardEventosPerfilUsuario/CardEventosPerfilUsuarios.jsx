export default function CardEventosPerfilUsuario(){
    return(
        <div class="container pt-5 eventoscard">
        <h1 className="eventos text-center">Eventos</h1>
        <div class="row row-striped">
          <div class="col-2 text-right">
            <h1 class="display-4">
              <span class="text-dark">23</span>
            </h1>
            <h2>OCT</h2>
          </div>
          <div class="col-10">
            <h3 class="text-uppercase">
              <strong>Ice Cream Social</strong>
            </h3>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="bi bi-calendar"></i> Monday
              </li>
              <li class="list-inline-item">
                <i class="bi bi-clock"></i> 12:30 PM - 2:00 PM
              </li>
              <li class="list-inline-item">
                <i class="bi bi-cup-hot"></i> Café
              </li>
            </ul>
            <p>
              Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <i class="bi bi-plus-circle fs-2 d-flex justify-content-end mas"></i>
        </div>
      </div>
    )
}