import galeria1 from "../../assets/galeria1.jpg"

export default function TarjetasAdmin() {
  return (
    <div className="container-fluid">
    <div className="card mb-3 mt-4 ml-4 d-flex  flex-wrap d-grip gap-5" style={{width: "90%"}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img className="img-fluid" src={galeria1}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <a href="#" class="btn btn-primary">
          Editar tarjeta de visita
        </a>
    </div>
    
</div>
<div className="card mb-3 mt-4 ml-4 d-flex  flex-wrap d-grip gap-5" style={{width: "90%"}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img className="img-fluid" src={galeria1}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <a href="#" class="btn btn-primary">
          Editar tarjeta de visita
        </a>
    </div>
</div>
<div className="card mb-3 mt-4 ml-4 d-flex  flex-wrap d-grip gap-5" style={{width: "90%"}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img className="img-fluid" src={galeria1}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <a href="#" class="btn btn-primary">
          Editar tarjeta de visita
        </a>
    </div>
</div>
</div>
  );
}
