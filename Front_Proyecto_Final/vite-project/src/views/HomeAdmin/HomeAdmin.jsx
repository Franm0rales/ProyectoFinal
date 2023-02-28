import "./HomeAdmin.css";
import { useState, useEffect } from "react";
export default function HomeAdmin() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/user/allUsers");
      const json = await response.json();
      setUsers(json);
    };
    fetchData();
  }, []);
  console.log(users);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive d-flex justify-content-center">
                <div className="d-flex align-items-center gap-2 px-3 pt-5 pb-5">
                  <label>
                    <b>Candidatos</b>
                  </label>
                  <input
                    type="checkbox"
                    name="plazas"
                    value="alumnos<plazas"
                    // checked={isCheckedPlazas}
                    // onClick={(e) => handleCheckBoxPlazas(e, 1)}
                  />
                </div>

                <div className="d-flex align-items-center gap-2 px-3 pt-5 pb-5">
                  <label>
                    <b>Empresas</b>
                  </label>
                  <input
                    type="checkbox"
                    name="scales"
                    value="fecha"
                    // checked={isCheckedFecha}
                    // onClick={() => handleCheckBoxFecha(2)}
                  />
                </div>
                <button
                  className="border-0 bg-transparent"
                  // onClick={(e) => deleteFilters(e)}
                >
                  <i class="bi bi-x-square-fill  text-danger "></i>
                </button>
              </div>
              <table className="table user-list shadow-none ">
                <thead>
                  <tr>
                    <th>
                      <span>Usuarios</span>
                    </th>
                    <th>
                      <span>Fecha de alta</span>
                    </th>
                    <th>
                      <span>Fecha modificación</span>
                    </th>
                    <th className="text-center ">
                      <span>Estado</span>
                    </th>
                    <th>
                      <span>Email</span>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                {users ? (
                  users.map((user) => (
                    <tbody>
                      <tr>
                        <td>
                          {user.CIF ? (
                            <img
                              src={`http://localhost:3000/${user.pathLogo}`}
                              alt={user.nombre}
                              style={{ width: "5rem", height: "3rem" }}
                            />
                          ) : (
                            <img
                              src={`https://bootdey.com/img/Content/avatar/avatar${user.avatar}.png`}
                              alt={user.nombre}
                              style={{ width: "5rem", height: "3rem" }}
                            />
                          )}
                          <h1 className="user-link fs-5">
                            <b>
                              {user.nombre} {user.apellidos}
                            </b>
                          </h1>
                          {user.CIF ? (
                            <span className="user-subhead">Empresa</span>
                          ) : (
                            <span className="user-subhead">Candidato</span>
                          )}
                        </td>
                        <td>{user.tsAlta.split("T")[0]}</td>
                        <td>{user.tsMod.split("T")[0]}</td>
                        <td className="text-center">
                          {user.eliminado == 1 ? (
                            <span className="label label-default">
                              Inactivo
                            </span>
                          ) : (
                            <span className="label label-default">Activo</span>
                          )}
                        </td>
                        <td>
                          <p className="font-italic">{user.email}</p>
                        </td>
                        <td style={{ width: "20%" }}>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                            </span>
                          </a>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="bi bi-pencil text-primary"></i>
                            </span>
                          </a>
                          <a href="#" className="table-link danger">
                            <span className="fa-stack">
                              <i className="bi bi-x-square-fill text-danger px-4"></i>
                              <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                            </span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <p>Cargando....</p>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
