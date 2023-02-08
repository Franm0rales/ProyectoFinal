import Empresa1 from "../../assets/clients/client-1.png"
import Empresa2 from "../../assets/clients/client-2.png"
import Empresa3 from "../../assets/clients/client-3.png"
import Empresa4 from "../../assets/clients/client-4.png"
import Empresa5 from "../../assets/clients/client-5.png"

export default function LogosEmpresas(){
    return(
        <section id="clients" class="clients section-bg">
      <div class="container" data-aos="zoom-in">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center px-5">
            <img src={Empresa1} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center px-5">
            <img src={Empresa2} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center px-5">
            <img src={Empresa3} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center px-5">
            <img src={Empresa4} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center px-5">
            <img src={Empresa5} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center px-5">
            <img src={Empresa1} class="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>
    )
}