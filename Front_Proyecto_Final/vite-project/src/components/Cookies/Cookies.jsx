import { useState } from "react";
import { useCookies } from "react-cookie";

export default function Cookies() {
  const [cookies, setCookie] = useCookies(["acceptedCookies"]);
  const [disable, setDisable] = useState("");

  const acceptCookies = () => {
    setCookie("acceptedCookies", true, { path: "/" });
    setDisable("d-none");
  };
  function rejectCookies() {
    if (disable == "") {
      setDisable("d-none");
    } else {
      setDisable("");
    }
  }

  return (
    <>
      {cookies.acceptedCookies ? null : (
        <div
          className={`container fixed-bottom sombra-home rounded ${disable} pb-3 mb-3`}
        >
          <div className="cookie-notice ">
            <h3 className="text-center mt-2 text-primary">
              Este sitio web utiliza cookies para mejorar la experiencia del
              usuario. Al utilizar este sitio, aceptas nuestro uso de cookies.
            </h3>
            <div className="d-flex justify-content-center gap-5   ">
              <button id="botones" className="rounded" onClick={acceptCookies}>
                Aceptar
              </button>
              <button
                className="btn btn-danger sombre-home border rounded"
                onClick={rejectCookies}
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
