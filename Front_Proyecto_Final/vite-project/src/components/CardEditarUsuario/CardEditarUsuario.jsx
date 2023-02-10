import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function CardEditarUsuario({ user, setUser }) {
  const [inputNombre, setInputNombre] = useState(false);
  const [inputApellido, setInputApellido] = useState(false);
  const [inputTelefono, setInputTelefono] = useState(false);
  const [inputCiudad, setInputCiudad] = useState(false);
  const [inputEmail, setInputEmail] = useState(false);
  const [inputAvatar, setInputAvatar] = useState(false);
  const [inputTitulo, setInputTitulo] = useState(false);
  const [inputDescripcion, setInputDescripcion] = useState(false);

  const [avatar2, setAvatar2] = useState("");
  const [avatar3, setAvatar3] = useState("");
  const [avatar4, setAvatar4] = useState("");
  const [avatar5, setAvatar5] = useState("");
  const [avatar7, setAvatar7] = useState("");
  const [avatar8, setAvatar8] = useState("");

  const { authorization } = useAuthContext();

  const [editarUsuario, setEditarUsuario] = useState("");
  function handleInput(e) {
    let cambio = { ...editarUsuario, [e.target.name]: e.target.value };
    setEditarUsuario(cambio);
  }

  function matchAvatar(valor) {
    setEditarUsuario({ avatar: valor });
    switch (valor) {
      case 2:
        setAvatar2("border-primary");
        setAvatar3("");
        setAvatar4("");
        setAvatar5("");
        setAvatar7("");
        setAvatar8("");

        break;
      case 3:
        setAvatar2("");
        setAvatar3("border-primary");
        setAvatar4("");
        setAvatar5("");
        setAvatar7("");
        setAvatar8("");

        break;
      case 4:
        setAvatar2("");
        setAvatar3("");
        setAvatar4("border-primary");
        setAvatar5("");
        setAvatar7("");
        setAvatar8("");
        break;
      case 5:
        setAvatar2("");
        setAvatar3("");
        setAvatar4("");
        setAvatar5("border-primary");
        setAvatar7("");
        setAvatar8("");
        break;
      case 7:
        setAvatar2("");
        setAvatar3("");
        setAvatar4("");
        setAvatar5("");
        setAvatar7("border-primary");
        setAvatar8("");
        break;
      case 8:
        setAvatar2("");
        setAvatar3("");
        setAvatar4("");
        setAvatar5("");
        setAvatar7("");
        setAvatar8("border-primary");
        break;
    }
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
      setInputNombre(false);
      setInputApellido(false);
      setInputTelefono(false);
      setInputCiudad(false);
      setInputEmail(false);
      setInputAvatar(false);
      setInputTitulo(false);
      setInputDescripcion(false);

      setUser(await response.json());
      setEditarUsuario("");
    } else if (response.status === 409) {
      alert("usuario ya modificado");
    }
  }
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-start justify-content-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="about-avatar">
              <img
                className="rounded-circle color-sombra-avatar"
                src={`https://bootdey.com/img/Content/avatar/avatar${user.avatar}.png`}
                title=""
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h2 className="dark-color eventos">Perfil</h2>
              <div className="d-flex">
                <h4 className="theme-color lead">
                  {!inputTitulo ? (
                    user.titulo === "null" ? (
                      "Inserte un titulo"
                    ) : (
                      user.titulo
                    )
                  ) : (
                    <input
                      name="titulo"
                      onChange={handleInput}
                      className="form-control"
                      placeholder={
                        user.titulo === "null" ? "Titulo" : `${user.titulo}`
                      }
                    ></input>
                  )}
                </h4>
                <button
                  className="btn "
                  onClick={() => setInputTitulo(!inputTitulo)}
                >
                  {!inputTitulo ? (
                    <i className="bi bi-pencil text-primary"></i>
                  ) : (
                    <i className="bi bi-x-circle text-danger"></i>
                  )}
                </button>
                {inputTitulo ? (
                  <button className="btn" onClick={() => onSubmit()}>
                    {" "}
                    <i className="bi bi-check-circle text-success"></i>
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="d-flex">
                <h6>
                  {!inputDescripcion ? (
                    user.descripcion === "null" ? (
                      "Inserte un descripcion"
                    ) : (
                      user.descripcion
                    )
                  ) : (
                    <textarea
                      name="descripcion"
                      onChange={handleInput}
                      className="form-control d-flex flex-fill"
                      placeholder={
                        user.descripcion === "null"
                          ? "Descripcion"
                          : `${user.descripcion}`
                      }
                    ></textarea>
                  )}
                </h6>
                <button
                  className="btn "
                  onClick={() => setInputDescripcion(!inputDescripcion)}
                >
                  {!inputDescripcion ? (
                    <i className="bi bi-pencil text-primary"></i>
                  ) : (
                    <i className="bi bi-x-circle text-danger"></i>
                  )}
                </button>
                {inputDescripcion ? (
                  <button className="btn" onClick={() => onSubmit()}>
                    {" "}
                    <i className="bi bi-check-circle text-success"></i>
                  </button>
                ) : (
                  ""
                )}
              </div>
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
                        <i className="bi bi-x-circle text-danger"></i>
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
                        <i className="bi bi-x-circle text-danger"></i>
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
                        <i className="bi bi-x-circle text-danger"></i>
                      )}
                    </button>

                    {inputCiudad ? (
                      <button className="btn" onClick={() => onSubmit()}>
                        {" "}
                        <i className="bi bi-check-circle text-success"></i>
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-text-center gap-3">
                      {inputCiudad ? (
                        <select
                          name="ciudad"
                          onChange={handleInput}
                          className="form-control"
                        >
                          <option value="">Selecciona una ciudad</option>
                          <option value="Almería">Almería</option>
                          <option value="Cádiz">Cádiz</option>
                          <option value="Cordoba">Cordaba</option>
                          <option value="Granada">Granada</option>
                          <option value="Huelva">Huelva</option>
                          <option value="Jaen">Jaen</option>
                          <option value="Málaga">Málaga</option>
                          <option value="Sevilla">Sevilla</option>
                        </select>
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
                        <i className="bi bi-check-circle text-success"></i>
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
                        <i className="bi bi-x-circle text-danger"></i>
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
                    <label>Avatar</label>
                    <button
                      className="btn "
                      onClick={() => setInputAvatar(!inputAvatar)}
                    >
                      {!inputAvatar ? (
                        <i className="bi bi-pencil text-primary"></i>
                      ) : (
                        <i className="bi bi-x-circle text-danger"></i>
                      )}
                    </button>

                    {inputAvatar ? (
                      <button className="btn" onClick={() => onSubmit()}>
                        {" "}
                        <i className="bi bi-check-circle text-success"></i>
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="d-flex ms-2 gap-3">
                      {inputAvatar ? (
                        <div className="d-flex flex-row ">
                          <div className="col-4">
                            <button
                              className={`btn ${avatar2}`}
                              onClick={() => matchAvatar(2)}
                            >
                              <img
                                className="rounded-circle avatar"
                                width="50"
                                height="50"
                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              ></img>
                            </button>
                            <button
                              className={`btn ${avatar3}`}
                              onClick={() => matchAvatar(3)}
                            >
                              <img
                                className="rounded-circle"
                                width="50"
                                height="50"
                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              ></img>
                            </button>
                            <button
                              className={`btn ${avatar4}`}
                              onClick={() => matchAvatar(4)}
                            >
                              <img
                                className="rounded-circle"
                                width="50"
                                height="50"
                                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              ></img>
                            </button>
                          </div>
                          <div className="col-4">
                            <button
                              className={`btn ${avatar5}`}
                              onClick={() => matchAvatar(5)}
                            >
                              <img
                                className="rounded-circle"
                                width="50"
                                height="50"
                                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                              ></img>
                            </button>
                            <button
                              className={`btn ${avatar8}`}
                              onClick={() => matchAvatar(8)}
                            >
                              <img
                                className="rounded-circle"
                                width="50"
                                height="50"
                                src="https://bootdey.com/img/Content/avatar/avatar8.png"
                              ></img>
                            </button>
                            <button
                              className={`btn ${avatar7}`}
                              onClick={() => matchAvatar(7)}
                            >
                              <img
                                className="rounded-circle"
                                width="50"
                                height="50"
                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                              ></img>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <img
                          className="rounded-circle"
                          width="50"
                          height="50"
                          src={`https://bootdey.com/img/Content/avatar/avatar${user.avatar}.png`}
                          size="rem"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-5 eventoscard">
        <h2 className="eventos text-center">Eventos</h2>
        <div class="row row-striped">
          <div class="col-2 text-right">
            <h1 class="display-4">
              <span class="text-dark">23</span>
            </h1>
            <h2>OCT</h2>
          </div>
          <div class="col-10">
            <h3 class="text-uppercase">
              <strong>Ice Cream Social</strong>
            </h3>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="bi bi-calendar"></i> Monday
              </li>
              <li class="list-inline-item">
                <i class="bi bi-clock"></i> 12:30 PM - 2:00 PM
              </li>
              <li class="list-inline-item">
                <i class="bi bi-cup-hot"></i> Café
              </li>
            </ul>
            <p>
              Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
