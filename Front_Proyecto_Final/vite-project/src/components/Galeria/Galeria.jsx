import galeria1 from "../../assets/galeria1.jpg"
import galeria2 from "../../assets/galeria2.jpg"
import galeria3 from "../../assets/galeria3.jpg"
import galeria4 from "../../assets/galeria4.jpg"
import galeria5 from "../../assets/galeria5.jpg"
import galeria6 from "../../assets/galeria6.jpg"
import galeria7 from "../../assets/galeria7.jpg"
import "./Galeria.css"
export default function Galeria(){
    return(
<div class="container mt-5">
      <div class="row mb-5">
        <div class="col-md-6">
          <h2>Galería de Imágenes</h2>
        </div>
      </div>
   
      <div class="row justify-content-start">
        <div class="col-3">
          <img src={galeria1} alt="Galería" class="card-img-top"/>
        </div>
        <div class="col-3">
          <img src={galeria7} alt="Galería" class="card-img-top"/>
        </div>
        <div class="col-3">
          <img src={galeria3} alt="Galería" class="card-img-top"/>
        </div>
        <div class="col-3">
          <img src={galeria4} alt="Galería" class="card-img-top"/>
        </div>
        <div class="col-3">
          <img src={galeria5} alt="Galería" class="card-img-top"/>
        </div>
        <div class="col-3">
          <img src={galeria3} alt="Galería" class="card-img-top"/>
        </div>
        <div class="col-3">
          <img src={galeria7} alt="Galería" class="card-img-top"/>
        </div>
        <div class="col-3">
          <img src={galeria3} alt="Galería" class="card-img-top"/>
        </div>
      </div>
    </div>
    )
}


