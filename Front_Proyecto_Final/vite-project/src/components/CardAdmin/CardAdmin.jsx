import "./CardAdmin.css"

export default function CardAdmin(user) {
  return (

    <div className="container pt-4 pb-3">
      <div className="card   ">
        <div className="imgContainer">
          <img src="https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
        <div className="content">
          <h2>{user.nombre} {user.apellidos}</h2>
          <p>{user.email}</p>
          <p>{user.ciudad}</p>
          <p>{user.telefono}</p>
          
        </div>
        <a href="#" className="btn btn-primary">
            Editar Alumno
          </a>
      </div>
    </div>
  );
}
