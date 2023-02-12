import CrearEvento from "../../components/CrearEvento/CrearEvento";
import EventosEmpresas from "../../components/EventosEmpresas/EventosEmpresas";
import Webcam from "../../components/Webcam/Webcam";

export default function Empresa() {
  return(
    <>
    <div>
  <EventosEmpresas/>
  <div className="container meetup-card">
  <div class=" mb-3">
  <img src="https://d1.awsstatic.com/aws-cloud-financial-managment/600x400_Verisk_Logo_Transparent.9b8b98cb92c3642aecfa51f38351d258ef0590e0.png" class="card-img-top" alt="Meetup event image"/>
  <div class="card-body">
    <h5 class="card-title">Título del evento</h5>
    <p class="card-text">Fecha y hora:</p>
    <p class="card-text">Lugar:</p>
    <p class="card-text">Descripción:</p>
  </div>
  <div class="card-footer">
    <a href="#" id='botones' className="btn text-white col-3 ">Ver más detalles</a>
  </div>
</div>
</div>
</div>
  <Webcam/>
  <CrearEvento/>
  
  </>
  )
}
