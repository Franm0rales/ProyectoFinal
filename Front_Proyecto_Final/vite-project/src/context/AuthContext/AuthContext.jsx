import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({
  authorization: {
    email: null,
    role: null,
  },
  
  login: () => {},
  logout: () => {},
  errorMessage: null,
});
export default AuthContext;

const MY_AUTH_APP = "MY_AUTH_APP";
console.log("email");
export function AuthContextProvider({ children }) {
  const [authorization, setAuthorization] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP)) ?? {
      email: null,
      role: null,
    }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  async function login(e, user) {
 
    const response = await fetch("http://localhost:3000/user/login", {
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
    window.localStorage.removeItem(
      MY_AUTH_APP)
    setAuthorization({
      email: null,
      role: null,
    });
  }
  console.log(authorization);
  const value = {
    authorization,
    errorMessage,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
