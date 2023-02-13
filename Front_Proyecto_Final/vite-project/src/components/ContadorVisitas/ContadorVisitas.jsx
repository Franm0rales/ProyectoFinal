import { useState } from "react";
import Swal from "sweetalert2";
export default function ContadorVisitas() {
  const [visitCount, setVisitCount] = useState(0);
  const [buttonState, setButtonState] = useState("Asistiré");
  const [isDisabled, setIsDisabled] = useState(false);
  const maxVisitors = 20;

  const handleClick = () => {
    Swal.fire({
      title: "Registrado al Evento",
      icon: "success",
      confirmButtonColor: "#5295ce",
    });
    setVisitCount(visitCount + 1);
    setButtonState("No asistiré");
    setIsDisabled(true);
  };
  const handleUnclick = () => {
    Swal.fire({
      title: "Te has eliminado del evento correctamente",
      icon: "success",
      confirmButtonColor: "#5295ce",
    });
    setVisitCount(visitCount - 1);
    setButtonState("Asistiré");
    setIsDisabled(false);
  };

  return (
    <div>
      <p>
        <i class="bi bi-people-fill fs-2"></i> {visitCount}/{maxVisitors}
      </p>
      {buttonState === "Asistiré" && (
        <button
          id="botones"
          className="rounded mt-2 mb-5"
          onClick={handleClick}
        >
          Asistiré
        </button>
      )}
      {buttonState === "No asistiré" && (
        <button
          id="botones"
          className="rounded mt-2 mb-5"
          onClick={handleUnclick}
        >
          No asistiré
        </button>
      )}
    </div>
  );
}
