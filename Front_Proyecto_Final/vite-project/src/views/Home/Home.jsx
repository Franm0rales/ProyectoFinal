import { Link } from "react-router-dom";
import Descripcion from "../../components/Descripcion/Descripcion";
import Galeria from "../../components/Galeria/Galeria";
import Quedadas from "../../components/Quedadas/Quedadas";
export default function Home() {
  return (
    <>
      <div>
        <Descripcion />
        <Link to="/admin">Dashboard</Link>
        <Quedadas />
        <Galeria />
      </div>
    </>
  );
}
