import "./HomeAdmin.css";
import { useState, useEffect } from "react";
export default function HomeAdmin() {
  const [users, setUsers] = useState(null);
  const [userDeleted, setUserDeleted] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([
    undefined,
    undefined,
  ]);
  const [id, setId] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/user/allUsers");
      const json = await response.json();
      setUsers(json);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/user/allUsers");
      const json = await response.json();
      setUsers(json);
    };
    fetchData();
  }, [userDeleted]);
  async function deleteUser() {
    await fetch(`http://localhost:3000/user/deleteUser/${id}`, {
      method: "PATCH",
    });
    setUserDeleted(!userDeleted);
    toggleVisible(0);
  }

  useEffect(() => {
    const fetchRutaABuscar = async () => {
      try {
        if (selectedFilters[0] == "alumno") {
          const response = await fetch(`http://localhost:3000/user/allUsers`);
          const data = await response.json();
          setUsers(data);
          console.log(users, "alumnos");
        } else if (selectedFilters[0] == "empresa") {
          const responseEmpresa = await fetch(
            `http://localhost:3000/user/allEmpresa`
          );
          const dataEmpresa = await responseEmpresa.json();
          setUsers(dataEmpresa);
          console.log(users);
        }
        if (selectedFilters[1] == 0) {
          const objetosFiltrados = users.filter((evento) =>
            evento.eliminado.includes(selectedFilters[1])
          );
          setUsers(objetosFiltrados);
        } else if (selectedFilters[1] == 1) {
          const objetosFiltrados = users.filter((evento) =>
            evento.nombre
              .toLowerCase()
              .includes(selectedFilters[1].toLocaleLowerCase())
          );
          setUsers(objetosFiltrados);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRutaABuscar();
  }, [selectedFilters]);

  const [visible, setVisible] = useState("d-none");
  function toggleVisible(x) {
    if (visible === "d-none") {
      setVisible("");
    } else {
      setVisible("d-none");
    }
    setId(x);
  }
  function handleChangeEstado(event, x) {
    let options = event.target.value;
    selectedFilters[x] = options;
    setSelectedFilters([...selectedFilters]);
    console.log(selectedFilters);
  }
  function handleChangeUsuario(event, x) {
    let options = event.target.value;
    selectedFilters[x] = options;
    setSelectedFilters([...selectedFilters]);
    console.log(selectedFilters);
  }
  function deleteFilters(e) {
    e.preventDefault();
    setSelectedFilters([undefined]);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive d-flex  gap-3">
                <div className="form-label col-3 pt-5">
                  <select
                    name="estado"
                    onChange={(e) => handleChangeEstado(e, 1)}
                    value={selectedFilters[1]}
                    className="form-select col-2"
                    aria-label="Default select example"
                  >
                    <option value={undefined}>Selecciona estado</option>
                    <option value={0}>Activo</option>
                    <option value={1}>Inactivo</option>
                  </select>
                </div>
                <div className="form-label col-3 pt-5">
                  <select
                    name="usuario"
                    onChange={(e) => handleChangeUsuario(e, 0)}
                    value={selectedFilters[0]}
                    className="form-select col-3"
                    aria-label="Default select example"
                  >
                    <option value={undefined}>Selecciona usuario</option>
                    <option value="alumno">Candidatos</option>
                    <option value="empresa">Empresas</option>
                  </select>
                </div>

                <button
                  onClick={(e) => deleteFilters(e)}
                  className="border-0 bg-transparent text-end pt-5"
                >
                  <i class="bi bi-x-square-fill  text-danger text-end "></i>
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
                    <th>
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
                        <td>
                          {user.eliminado == 1 ? (
                            <span className="text-danger label label-default">
                              Inactivo
                            </span>
                          ) : (
                            <span className="label label-default text-success">
                              Activo
                            </span>
                          )}
                        </td>
                        <td>
                          <p className="font-italic">{user.email}</p>
                        </td>
                        <td style={{ width: "20%" }}>
                          {user.eliminado == 1 ? (
                            <p></p>
                          ) : (
                            <button
                              onClick={() => toggleVisible(user.idUsuario)}
                              className="table-link danger border-0 bg-transparent"
                            >
                              <i className="bi bi-x-square-fill text-danger px-4"></i>
                            </button>
                          )}

                          {id == user.idUsuario ? (
                            <div
                              className={`alert alert-danger ${visible}`}
                              role="alert"
                            >
                              Eliminar usuario ¿Estas seguro?
                              <button
                                className="btn btn-outline-secondary mx-1 text-white rounded-2"
                                onClick={() => deleteUser()}
                              >
                                Si
                              </button>
                              <button
                                className="btn btn-outline-secondary mx-1 text-white rounded-2"
                                onClick={() => toggleVisible(0)}
                              >
                                No
                              </button>
                            </div>
                          ) : (
                            <p></p>
                          )}
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
