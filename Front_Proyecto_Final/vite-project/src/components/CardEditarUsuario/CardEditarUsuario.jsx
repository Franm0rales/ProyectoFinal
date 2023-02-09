import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function CardEditarUsuario({ user, setUser }) {
  const [inputNombre, setInputNombre] = useState(false);
  const [inputApellido, setInputApellido] = useState(false);
  const [inputTelefono, setInputTelefono] = useState(false);
  const [inputCiudad, setInputCiudad] = useState(false);
  const [inputEmail, setInputEmail] = useState(false);
  const [inputFecha, setInputFecha] = useState(false);

  const { authorization } = useAuthContext();

  const [editarUsuario, setEditarUsuario] = useState("");
  function handleInput(e) {
    let cambio = { ...editarUsuario, [e.target.name]: e.target.value };
    setEditarUsuario(cambio);
  }

  async function onSubmit() {
    const response = await fetch(
      `http://localhost:3000/user/updateUser/${authorization.id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editarUsuario),
      }
    );

    if (response.status === 400) {
      alert("Error al recibir el body");
    } else if (response.status === 200) {
      setInputNombre(!inputNombre);
      setUser(await response.json());
      alert(`usuario ${authorization.id} modificado correctamente`);
    } else if (response.status === 409) {
      alert("usuario ya modificado");
    }
  }
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h3 className="dark-color">About Me</h3>
              <h6 className="theme-color lead">
                A Lead UX &amp; UI designer based in Canada
              </h6>
              <p>
                I <mark>design and develop</mark> services for customers of all
                sizes, specializing in creating stylish, modern websites, web
                services and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions.
              </p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Nombre</label>
                    <button
                      className="btn "
                      onClick={() => setInputNombre(!inputNombre)}
                    >
                      {!inputNombre ? (
                        <i className="bi bi-pencil text-primary"></i>
                      ) : (
                        <i className="bi bi-x-circle"></i>
                      )}
                    </button>

                    {inputNombre ? (
                      <button className="btn" onClick={() => onSubmit()}>
                        {" "}
                        <i className="bi bi-check-circle text-success"></i>
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-text-center gap-3">
                      {inputNombre ? (
                        <input
                          name="nombre"
                          onChange={handleInput}
                          className="form-control"
                          placeholder={`${user.nombre}`}
                        ></input>
                      ) : (
                        <p>{user.nombre}</p>
                      )}
                    </div>
                  </div>
                  <div className="media">
                    <label>Apellidos</label>
                    <button
                      className="btn "
                      onClick={() => setInputApellido(!inputApellido)}
                    >
                      {!inputApellido ? (
                        <i className="bi bi-pencil text-primary"></i>
                      ) : (
                        <i className="bi bi-x-circle"></i>
                      )}
                    </button>

                    {inputApellido ? (
                      <button className="btn" onClick={() => onSubmit()}>
                        {" "}
                        <i className="bi bi-check-circle text-success"></i>
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-text-center gap-3">
                      {inputApellido ? (
                        <input
                          name="apellidos"
                          onChange={handleInput}
                          className="form-control"
                          placeholder={`${user.apellidos}`}
                        ></input>
                      ) : (
                        <p>{user.apellidos}</p>
                      )}
                    </div>
                  </div>
                  <div className="media">
                    <label>Ciudad</label>
                    <button
                      className="btn "
                      onClick={() => setInputCiudad(!inputCiudad)}
                    >
                      {!inputCiudad ? (
                        <i className="bi bi-pencil text-primary"></i>
                      ) : (
                        <i className="bi bi-x-circle"></i>
                      )}
                    </button>

                    {inputCiudad ? (
                      <button className="btn" onClick={() => onSubmit()}>
                        {" "}
                        <i className="bi bi-check-circle text-primary"></i>
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-text-center gap-3">
                      {inputCiudad ? (
                        <input
                          name="ciudad"
                          onChange={handleInput}
                          className="form-control"
                          placeholder={`${user.ciudad}`}
                        ></input>
                      ) : (
                        <p>{user.ciudad}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>Correo</label>
                    <button
                      className="btn "
                      onClick={() => setInputEmail(!inputEmail)}
                    >
                      {!inputEmail ? (
                        <i className="bi bi-pencil text-primary"></i>
                      ) : (
                        <i className="bi bi-x-circle text-danger"></i>
                      )}
                    </button>

                    {inputEmail ? (
                      <button className="btn" onClick={() => onSubmit()}>
                        {" "}
                        <i className="bi bi-check-circle text-primary"></i>
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-text-center gap-3">
                      {inputEmail ? (
                        <input
                          name="email"
                          onChange={handleInput}
                          className="form-control"
                          placeholder={`${user.email}`}
                        ></input>
                      ) : (
                        <p>{user.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="media">
                    <label>Telefono</label>
                    <button
                      className="btn "
                      onClick={() => setInputTelefono(!inputTelefono)}
                    >
                      {!inputTelefono ? (
                        <i className="bi bi-pencil text-primary"></i>
                      ) : (
                        <i className="bi bi-x-circle text-primary"></i>
                      )}
                    </button>

                    {inputTelefono ? (
                      <button className="btn" onClick={() => onSubmit()}>
                        {" "}
                        <i className="bi bi-check-circle text-success"></i>
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-text-center gap-3">
                      {inputTelefono ? (
                        <input
                          name="telefono"
                          onChange={handleInput}
                          className="form-control"
                          placeholder={`${user.telefono}`}
                        ></input>
                      ) : (
                        <p>{user.telefono}</p>
                      )}
                    </div>
                  </div>
                  <div className="media">
                    <label>Fecha de alta</label>
                    <button
                      className="btn "
                      onClick={() => setInputFecha(!inputFecha)}
                    >
                      {!inputFecha ? (
                        <i className="bi bi-pencil text-primary"></i>
                      ) : (
                        <i className="bi bi-x-circle text-danger"></i>
                      )}
                    </button>

                    {inputFecha ? (
                      <button className="btn" onClick={() => onSubmit()}>
                        {" "}
                        <i className="bi bi-check-circle text-success"></i>
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-text-center gap-3">
                      {inputFecha ? (
                        <input
                          name="tsAlta"
                          onChange={handleInput}
                          className="form-control"
                          placeholder={`${user.tsAlta}`}
                        ></input>
                      ) : (
                        <p>{user.tsAlta}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-avatar">
              <img
                src={`https://bootdey.com/img/Content/avatar/avatar${user.avatar}.png`}
                title=""
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="500" data-speed="500">
                  500
                </h6>
                <p className="m-0px font-w-600">Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="150" data-speed="150">
                  150
                </h6>
                <p className="m-0px font-w-600">Project Completed</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="850" data-speed="850">
                  850
                </h6>
                <p className="m-0px font-w-600">Photo Capture</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="190" data-speed="190">
                  190
                </h6>
                <p className="m-0px font-w-600">Telephonic Talk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
