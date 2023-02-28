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
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-box clearfix">
              <div class="table-responsive">
                <table class="table user-list shadow-none ">
                  <thead>
                    <tr>
                      <th>
                        <span>Usuarios</span>
                      </th>
                      <th>
                        <span>Fecha de alta</span>
                      </th>
                      <th class="text-center">
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
                            <img
                              src={`https://bootdey.com/img/Content/avatar/avatar${user.avatar}.png`}
                              alt=""
                              style={{ width: "5rem", height: "3rem" }}
                            />
                            <a href="#" class="user-link">
                              {user.nombre}
                            </a>
                            <span class="user-subhead">Admin</span>
                          </td>
                          <td>{user.tsAlta.split("T")[0]}</td>
                          <td class="text-center">
                            {user.eliminado == 1 ? (
                              <span class="label label-default">Inactivo</span>
                            ) : (
                              <span class="label label-default">Activo</span>
                            )}
                          </td>
                          <td>
                            <a href="#">{user.email}</a>
                          </td>
                          <td style={{ width: "20%" }}>
                            <a href="#" class="table-link">
                              <span class="fa-stack">
                                <i class="fa fa-square fa-stack-2x"></i>
                                <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                              </span>
                            </a>
                            <a href="#" class="table-link">
                              <span class="fa-stack">
                                <i class="fa fa-square fa-stack-2x"></i>
                                <i class="bi bi-pencil text-primary"></i>
                              </span>
                            </a>
                            <a href="#" class="table-link danger">
                              <span class="fa-stack">
                                <i class="bi bi-x-square-fill text-danger px-4"></i>
                                <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
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
      </div>
    </>
  );
}
