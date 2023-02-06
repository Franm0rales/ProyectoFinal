import TarjetasAdmin from "../../components/TarjetasAdmin/TarjetasAdmin";

export default function CrearTarjeta() {
  async function crearTarjeta(user) {
    console.log(user);
    const response = await fetch("http://localhost:3000/user/addCard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      const token = await response.json();
      setAuthorization(jwt_decode(token.jwt));

      window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(token.jwt));
      setErrorMessage(null);
    } else {
      setErrorMessage(alert("Error al introducir password o usuario"));
    }
  }
  return <TarjetasAdmin />;
}
