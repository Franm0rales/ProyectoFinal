export default function CardIdAlumno({ users }) {
  console.log(users, "card");
  return (
    <div className="container-fluid">
      <div
        className="card mb-3 mt-4 ml-4 d-flex  flex-wrap d-grip gap-5"
        style={{ width: "90%" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="img-fluid "
              src="https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </div>

          <div className="col-md-8 d-flex">
            <div className="card-body">
              <h5 className="card-title">{users.nombre}</h5>
              <p className="card-text">{users.apellidos}</p>
              <p className="card-text">{users.ciudad}</p>
              <p className="card-text">{users.email}</p>
              <p className="card-text">
                <small className="text-muted">{users.telefono}</small>
              </p>
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" class="btn btn-danger btn-sm  ">
                <i class="bi bi-trash3 text-white fs-5 "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
