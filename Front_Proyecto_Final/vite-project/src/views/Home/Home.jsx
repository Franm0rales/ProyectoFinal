import { Link } from "react-router-dom";
import Descripcion from "../../components/Descripcion/Descripcion";
import Galeria from "../../components/Galeria/Galeria";
import Quedadas from "../../components/Quedadas/Quedadas";
export default function Home() {
  return (
    <>
      <div>
        <Link to="/admin">Dashboard</Link>
        <Descripcion />
        <Quedadas />
        <Galeria />
      </div>
    </>
  );
}
