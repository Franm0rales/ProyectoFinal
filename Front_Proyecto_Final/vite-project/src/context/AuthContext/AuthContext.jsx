import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const AuthContext = createContext({
  authorization: {
    email: null,
    role: null,
    idUsuario: null,
  },
  view: "Alumno",
  puntuacionTest: 0,
  setPuntuacionTest: () => {},
  setView: () => {},
  toggleUser: () => {},
  login: () => {},
  loginEmpresa: () => {},
  logout: () => {},
  errorMessage: null,
});
export default AuthContext;

const MY_AUTH_APP = "MY_AUTH_APP";

export function AuthContextProvider({ children }) {
  const [puntuacionTest, setPuntuacionTest] = useState(0);
  const [authorization, setAuthorization] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP)) ?? {
      email: null,
      role: null,
      idUsuario: null,
    }
  );
  const [view, setView] = useState("Alumno");
  const [errorMessage, setErrorMessage] = useState(null);
  const [alumnoEmpresa, setAlumnoEmpresa] = useState(2);
  async function login(user) {
    if (view === "Alumno") {
      setAlumnoEmpresa(2);
    } else {
      setAlumnoEmpresa(1);
    }
    const response = await fetch(
      `http://localhost:3000/user/login/${alumnoEmpresa}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );

    if (response.status === 200) {
      const token = await response.json();
      setAuthorization(jwt_decode(token.jwt));

      window.localStorage.setItem(
        MY_AUTH_APP,
        JSON.stringify(jwt_decode(token.jwt))
      );
      setErrorMessage(null);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registrado correctamente ",
        showConfirmButton: false,
        timer: 1500,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      setErrorMessage(alert("Error al introducir password o usuario"));
    }
  }
  async function loginEmpresa(user) {
    const response = await fetch("http://localhost:3000/user/loginempresa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      const token = await response.json();
      setAuthorization(jwt_decode(token.jwt));

      window.localStorage.setItem(
        MY_AUTH_APP,
        JSON.stringify(jwt_decode(token.jwt))
      );
      setErrorMessage(null);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registrado correctamente ",
        showConfirmButton: false,
        timer: 1500,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      setErrorMessage(alert("Error al introducir password o usuario"));
    }
  }
  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthorization({
      email: null,
      role: null,
      idUsuario: null,
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Ha cerrado la sesion correctamente ",
      showConfirmButton: false,
      timer: 1500,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  const value = {
    authorization,
    puntuacionTest,
    setPuntuacionTest,
    errorMessage,
    view,
    setView,
    login,
    loginEmpresa,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
