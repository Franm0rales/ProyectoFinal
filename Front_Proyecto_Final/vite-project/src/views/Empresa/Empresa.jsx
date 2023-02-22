import CrearEvento from "../../components/CrearEvento/CrearEvento";
import EmpresasParaVista from "../../components/EmpresasParaVista/EmpresasParaVista";

import Webcam from "../../components/Webcam/Webcam";

export default function Empresa() {
  const resultados = [
    { pregunta: 1, respuesta: "Opción A" },
    { pregunta: 2, respuesta: "Opción B" },
    { pregunta: 3, respuesta: "Opción C" },
    { pregunta: 1, respuesta: "Opción B" },
    { pregunta: 2, respuesta: "Opción A" },
    { pregunta: 3, respuesta: "Opción D" },
    { pregunta: 1, respuesta: "Opción C" },
    { pregunta: 2, respuesta: "Opción C" },
    { pregunta: 3, respuesta: "Opción A" },
  ];

  return (
    <>
    <div className="container mt-5">
    <div class="">
                        <div class="col-lg-2">
                            
                        </div>
                        <div class="col-lg-10">
                            <div class="event-list-content fix">
                                <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: "0.2s"}} class="">
                                    <li><i class="fas fa-map-marker-alt"></i> Waterfront Hotel, London</li>
                                    <li><i class="far fa-clock"></i> 9.30 - 10.30 AM</li>
                                </ul>
                                <h2>Google Youtube Stratigic Party</h2>
                                <p>In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.</p>
                                <a href="#" class="btn mt-20 mr-10"><i class="far fa-ticket-alt"></i> Buy Ticket</a>
                                <a href="#" class="btn mt-20">Read More</a>
                                <div class="crical"><i class="far fa-cogs"></i> </div>
                            </div>
                        </div>
                    </div>
                    </div>
      {/* <Resultados resultados={resultados} /> */}
      <EmpresasParaVista />


      {/* <Webcam />
      <CrearEvento /> */}
      
    </>
  );
}
