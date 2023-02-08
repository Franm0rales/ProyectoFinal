import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({
  authorization: {
    email: null,
    role: null,
    idUsuario: null,
  },
  view: "Alumno",
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
    console.log(alumnoEmpresa, "alumnoEmpresa");
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
      console.log(authorization, "contexto");

      window.localStorage.setItem(
        MY_AUTH_APP,
        JSON.stringify(jwt_decode(token.jwt))
      );
      setErrorMessage(null);
    } else {
      setErrorMessage(alert("Error al introducir password o usuario"));
    }
  }
  async function loginEmpresa(user) {
    console.log(user);
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
  }

  console.log(authorization);
  const value = {
    authorization,
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
